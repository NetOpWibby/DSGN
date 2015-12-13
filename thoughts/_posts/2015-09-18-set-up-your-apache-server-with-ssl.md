---
layout:   post-thought
title:    "How to Setup an Apache Server with SSL (and get an A+)"
date:     2015-09-18
category: post
---

As a regular user of the Internet, I am sure you have noticed a padlock icon in your URL bar when you visit certain sites. All of your favorite social networks have them: Ello, Facebook, Twitter, &c. This is not for decoration, it is for security (as you might have guessed). You certainly feel safer when you log on to these sites, right? Of course you do! Before I brain dive into this topic with you, I would like to back up a bit and ~~steal~~ copy Wikipedia's definititon of HTTPS (also known as HTTP over TLS, or Transport Layer Security):

> HTTPS URLs begin with "https://" and use port 443 by default, whereas HTTP URLs begin with "http://" and use port 80 by default.

> HTTP is not encrypted and is vulnerable to man-in-the-middle and eavesdropping attacks, which can let attackers gain access to website accounts and sensitive information, and modify webpages to inject malware or advertisements. HTTPS is designed to withstand such attacks and is considered secure against them (with the exception of older, deprecated versions of SSL).

SSL (Secure Sockets Layer) is a kind of certificate that is needed to make your server secure. Technicially, when (the royal) we say "SSL", we really mean "TLS" (Transport Layer Security), but that is not really important. Of course, Wikipedia is chock-full of technical [details and specs about TLS/SSL](https://en.wikipedia.org/wiki/Transport_Layer_Security).

You can see why HTTPS is important, but should you really care? (Hell yeah!) You only have a small blog or mom-and-pop shop, you say? You never had a problem without it, you exclaim? **Well**, let me tell *you* something!

Search engines like Google are including HTTPS statuses into their [search rankings](http://googlewebmastercentral.blogspot.com/2014/08/https-as-ranking-signal.html). Web users are becoming increasingly distrusting of sites that exhibit sketchy behavior, and they are caring about their own privacy more. If you have a website, you should care about your visitors. Make the web safe! Alright, enough preamble, let's [DO IT](https://www.youtube.com/watch?v=1IzYQYYAdw0&t=27s)!

##### If you see anything that could be done better, please feel free to [let me know](https://twitter.com/@NetOpWibby) about it so I can spread the knowledge! Also, someone really should start a #MakeTheWebGreatAgain campaign, that has potential to be funny.



### First things first, buy your SSL certificate

I am unsure when I stumbled upon [SSLs.com](https://www.ssls.com), but I love 'em. They are part of [Namecheap Group](http://www.namecheapgroup.com) and they make buying SSLs even easier than it already *is* on [Namecheap.com](https://www.namecheap.com/security/ssl-certificates.aspx), IMHO.

I recently purchased two [PositiveSSL](https://www.ssls.com/ssl-certificates/comodo-positivessl) certificates for this site (surprise!) and [PW Software](https://pw-software.com). Because they are so cheap ($8.95, for one year), I decided to buy them for three years. I think I am going to continue hosting these sites for awhile, haha! Of course, if you have sensitive information being shared on your site/app, you can purchase certificates that are graded higher.

<figure>
  ![](/images/thoughts/2015-09-18/01.png)
  <figcaption>Let's activate that last cert, for DSGN.io!</figcaption>
</figure>

Clicking on the Cert # or Status will lead you to an activation page. You have to input your CSR ([Certificate Signing Request](http://helpdesk.ssls.com/hc/en-us/articles/203226631-What-is-CSR-)) to get started. Here is how I generate my CSRs, in Mac OS X's Terminal.app:

```bash
cd          # this is to make sure I am in my base directory
cd Desktop  # this is to make sure the resulting files end up here
openssl req -new -newkey rsa:2048 -nodes -keyout yourdomain.key -out yourdomain.csr
```

I replace `yourdomain` with the name of the site the SSL certificate will be used for. I use underscores in place of periods (so, `dsgn_io`, instead of `dsgn.io`). I do not think it really matters, that is just a personal preference. When you press Enter, you will be greeted with a super-short questionnaire. Your certificate needs information to make sure it will be issued to the correct person (you). Here is what mine looks like:

<figure>
  ![](/images/thoughts/2015-09-18/02.png)
  <figcaption>You can set a challenge password if you want, I did not</figcaption>
</figure>

Go to your Desktop and open the generated `.csr` in your favorite text editor. Copy its contents and paste into the textfield you have open on SSLs.com. After they make sure the information you input is correct, you will be asked to confirm you actually *own* the domains you generated the CSR for.

<figure>
  ![](/images/thoughts/2015-09-18/03.png)
  <figcaption>The option I'm going with is, "Upload a File"</figcaption>
</figure>

After you fill out even *more* information, get the file, and upload said file to your server, grab a snack or watch a fail compilation video on YouTube. You will have to wait ~4-10 minutes for an email with your certificates (I got my certificates in four minutes). Download your zip file, unzip it, and `cd` into that folder in Terminal.



### Prepare your certificates

```bash
cat yourdomain.crt COMODORSADomainValidationSecureServerCA.crt COMODORSAAddTrustCA.crt > ssl-bundle.crt
```

What the above code does is concatenate (combine) your files into one. The resulting file will be `ssl-bundle.crt`. I have seen comments on StackOverflow and elsewhere that the *order* of your concatenated files is important, and that **all** of them are necessary. I believe the latter part of that statement to be false, because SSL Labs' [SSL Test](https://www.ssllabs.com/ssltest/analyze.html?d=dsgn.io&s=162.243.54.204) will complain of "Chain issues". That chain issue being it "Contains anchor". That anchor is `AddTrustExternalCARoot.crt`, and as you will see at the end of this post, it does not need to be included in your `ssl-bundle.crt` to get an A+ SSL rating.

You remember that `yourdomain.key` file you generated earlier? We are going to combine that file with the newly generated `ssl-bundle.crt` to create a `yourdomain.pem` file.

```bash
cat ssl-bundle.crt yourdomain.key > yourdomain.pem
```



### Configure Apache to use SSL

Now, before we get your server set up, make sure you have taken care of all updates and upgrades for your server. If you are using an Ubuntu server like I am, just run:

```bash
apt-get update && apt-get upgrade
```

Your server *should* tell you if any updates are available anyway.

##### I run my servers as a root user and if you do not, you will have to preface the above command (and future commands in this post) with `sudo`.

You will have to enable SSL and restart your server, like so:

```bash
a2enmod ssl
service apache2 restart
```

On your server, open your `default-ssl.conf` file, located at `/etc/apache2/sites-available/default-ssl.conf`. This file has a **lot** of comments, for good reason. I am going to show you what your `default-ssl.conf` should look like, with my own comments to guide you.

```bash
ServerName yourdomain.com # change this

<IfModule mod_ssl.c>
  <VirtualHost _default_:443>
    ServerAdmin email@yourdomain.com # change this
    ServerName yourdomain.com # change this



    # My document root is symlinked because I have backups that are
    # auto-generated when I deploy updates to this site, so it looks like
    # DocumentRoot /var/www/html/current
    # I explained how/why I did this, here: https://the-inc.co/8/5i

    DocumentRoot /var/www/html
    <Directory />
      Options FollowSymLinks
      AllowOverride None
    </Directory>

    <Directory /var/www/>
      Options Indexes FollowSymLinks MultiViews
      AllowOverride All
      Order allow,deny
      allow from all
    </Directory>



    ScriptAlias /cgi-bin/ /usr/lib/cgi-bin/
    <Directory "/usr/lib/cgi-bin">
      AllowOverride None
      Options +ExecCGI -MultiViews +SymLinksIfOwnerMatch
      Order allow,deny
      Allow from all
    </Directory>



    ErrorLog ${APACHE_LOG_DIR}/error.log
    LogLevel warn

    CustomLog ${APACHE_LOG_DIR}/ssl_access.log combined
    Alias /doc/ "/usr/share/doc/"



    <Directory "/usr/share/doc/">
      Options Indexes MultiViews FollowSymLinks
      AllowOverride None
      Order deny,allow
      Deny from all
      Allow from 127.0.0.0/255.0.0.0 ::1/128
    </Directory>



    # Enable/Disable SSL and Perfect Forward Secrecy
    # Taken from http://stackoverflow.com/a/17463708/1167646
    SSLEngine on
    SSLProtocol All -SSLv2 -SSLv3
    SSLCompression off
    SSLCipherSuite ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:DHE-DSS-AES128-GCM-SHA256:kEDH+AESGCM:ECDHE-RSA-AES128-SHA256:ECDHE-ECDSA-AES128-SHA256:ECDHE-RSA-AES128-SHA:ECDHE-ECDSA-AES128-SHA:ECDHE-RSA-AES256-SHA384:ECDHE-ECDSA-AES256-SHA384:ECDHE-RSA-AES256-SHA:ECDHE-ECDSA-AES256-SHA:DHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA:DHE-DSS-AES128-SHA256:DHE-RSA-AES256-SHA256:DHE-DSS-AES256-SHA:DHE-RSA-AES256-SHA:!aNULL:!eNULL:!EXPORT:!DES:!RC4:!3DES:!MD5:!PSK



    # Set up HTTP Strict Transport Security (HSTS)
    # You can set your header for one year, but mine is set for three
    # I bought a three year certificate, remember?

    # Guarantee HTTPS for 1 year including subdomains
    # Header always set Strict-Transport-Security "max-age=31536000; includeSubDomains"

    # Guarantee HTTPS for 3 years including subdomains
    Header always set Strict-Transport-Security "max-age=94608000; includeSubDomains"



    # Server Certificate Files
    # If both key and certificate are stored in the same file, only the
    # SSLCertificateFile directive is needed.
    SSLCertificateFile    /etc/ssl/certs/yourdomain.pem
    SSLCertificateKeyFile /etc/ssl/private/yourdomain.key

    # Server Certificate Chain
    SSLCertificateChainFile /etc/apache2/ssl.crt/ssl-bundle.crt

    # Certificate Authority (CA)
    SSLCACertificatePath /etc/ssl/certs/
    SSLCACertificateFile /etc/apache2/ssl.crt/ssl-bundle.crt



    # SSL Engine Options
    <FilesMatch "\.(cgi|shtml|phtml|php)$">
      SSLOptions +StdEnvVars
    </FilesMatch>

    <Directory /usr/lib/cgi-bin>
      SSLOptions +StdEnvVars
    </Directory>



    # SSL Protocol Adjustments
    BrowserMatch "MSIE [2-6]" \
    nokeepalive ssl-unclean-shutdown \
    downgrade-1.0 force-response-1.0

    # MSIE 7 and newer should be able to use keepalive
    BrowserMatch "MSIE [17-9]" ssl-unclean-shutdown
  </VirtualHost>
</IfModule>
```

After you save this file, make sure you upload:

* `yourdomain.pem` to `/etc/ssl/certs/`
* `yourdomain.key` to `/etc/ssl/private/`
* `ssl-bundle.crt` to `/etc/apache2/ssl.crt/`

I had to manually create my `ssl.crt` folder, as it did not exist.



### Activate!

You will need to enable the Apache Headers Module and your SSL Virtual Host. This will require another restart of your server, and then a reload.

<!--/ ad /-->

```bash
a2enmod headers
service apache2 restart

a2ensite default-ssl.conf
service apache2 reload
```

You might see a message like:
`The SSLCertificateChainFile directive is deprecated, SSLCertificateFile should be used instead`, and while we *do* use the directive that is recommended, it does not hurt to have this extra one.



### Moment of Truth

Now that we are *finally* done, open a new browser tab and go to `https://yourdomain.tld`. That padlock icon looks good next to your URL, right? Of *course* it does! No? Hmmm, you need more convincing, I see. Time to visit Qualsys SSL Labs [SSL Server Test](https://www.ssllabs.com/ssltest)!

##### Good grief, ya think they could come up with a better name?

Enter your URL into that nifty lil' input box there and wait a couple minutes. Watch more fail compilations and...

<figure>
  ![](/images/thoughts/2015-09-18/04.png)
  <figcaption>Aww yeah, DSGN is A+ baby!</figcaption>
</figure>

Well would you look at *that*! You must be some sort of gotdayum SSL pro or something! I bet you bench 280. Is that a hemi? *\*ahem*\*

Anyhoo, rest easy in the knowledge that:

1. Your server is secure
2. Your visitors/users are secure
3. You are totally badass
4. Your server has better security than Facebook and Google
5. No, seriously, your security is better than [Facebook](https://www.ssllabs.com/ssltest/analyze.html?d=facebook.com) and [Google](https://www.ssllabs.com/ssltest/analyze.html?d=google.com).

I am totally unsurprised about Google, I mean, they are well known for not caring about privacy/security. Gmail is no different, so I feel incredibly relieved that I deleted my Google Account a few months ago and made my own email server, but that is another post for another day. On the flipside, DuckDuckGo has an A+ rating **and** they are known for privacy/security.

And hey, now **you** are too. ᕦ(ò_óˇ)ᕤ