---
layout:   post-thought
title:    "What I've Achieved in 2015"
date:     2015-12-30
category: post
---

2015 has been an interesting year, and I have grown **so** much since 2014. The top of this year was a _terrible_ time for my family and I though, because we lost our daughter to a miscarriage. The end of this year is more joyous because we are pregnant again, and ultrasounds show no signs of trouble (and, we're further along). With that said, on to my list!

### Learned about Turner Syndrome

This is what killed my daughter, Zoe.

[Wikipedia says](https://en.wikipedia.org/wiki/Turner_syndrome) this syndrome occurs in one of 5000 females (in fact, Turner Syndrome only affects females). It is a chromosomal abnormality in which one of the X chromosomes is altered or missing entirely. 99% of baby girls with Turner Syndrome are either stillborn, or miscarried. The 1% that _do_ live have to deal with heart surgeries and the like, pretty much forever. The most difficult thing to deal with, aside from seeing the grief-stricken mother of my daughter everyday, was feeling guilty that I couldn't do anything to prevent or fix this. I couldn't save Zoe. Literally every bad hand I have **ever** been dealt in life has been dealt with and turned around by sheer determination and my unwavering optimism. However, like you've just read, Turner Syndrome is completely random and unfortunately, that randomness hit home.



### Escaped a poisonous work environment

I didn't get much support from my job at the time, aside from the expected condolences, about my daughter's death. In fact, all they seemed to care about was my completion of a project for my then boss' family member. You won't find it on the website, but it was _so_ important. Process was such that it was easy to set people up for failure as well but, whatevs.



### Started work in a new field

Chatter about the "Internet of Things" really blew up this year. I've tinkered with Raspberry Pis and things like that, but I never did anything serious with them. At Queralt, I got to work with an in-house API, create dashboards, and actually _think_ about how to create actionable data for our customers to use. RFID tags and readers can give you a bunch of information, but if you don't know what to do with it, it's just noise. Before Queralt, I never worked with an API. Now, my JavaScript skills are _crazy_ (not really, I just know how to break things more, haha)!



### Wrote popular posts

I forget what text editor I was using before Brackets, but it probably doesn't matter at this point, haha! The more I used Brackets, the more I thought I should write about it, so I did! The first post is, "[My Brackets Setup](/thoughts/post/my-brackets-setup)". In it, I just posted links to my favorite Brackets plugins and themes. The second post is, "[How to use Brackets Sass](/thoughts/post/how-to-use-brackets-sass)". When I am developing static one-pager sites, I don't need to use Jekyll, but I certainly want to use Sass. Compass is unnecessary, and I _could_ just run a `sass-watch` command in Terminal, but why do that when I can let Brackets do it for me? Brackets Sass is a plugin that watches Sass files and compiles them to CSS. However, the documentation for said plugin isn't straightforward, so after having my GitHub Issue on the topic ignored, I decided to work at it for a couple minutes and create a how-to for others having the same comprehension problem. Those two posts prompted [Adobe to send](https://twitter.com/NetOpWibby/status/596129811657072640) me two Brackets t-shirts, which was pretty awesome. Thanks again guys!

<figure>
  ![](/images/thoughts/2015-12-30/01.jpg)
  <figcaption>Dope robot illustration by Adam Lehman</figcaption>
</figure>



### Encouraged my girlfriend to start a blog

She has very strong opinions and will talk to me about things that annoy/delight her about virtually any topic. Her rants (lol) get lots of likes and such on Facebook and in various online groups she's a part of, but she always assumed no one cared about her thoughts (which is a dumb thought). I'm not sure if the popularity of my Brackets posts pushed her to finally start writing for public consumption, but I'm glad it happened regardless. You can find her writings at [Sincerely, Shantelle](http://sincerelyshantelle.com).



### Figured out automatic deployment

Ugh. I cannot _believe_ that I used to manually upload my compiled Jekyll site to my server every time I made a change. How barbaric. I could use [GitHub Pages](https://pages.github.com), but plugin use isn't possible. Plus, I like handling as much as possible for my projects. I really should update my deploy script for the latest Capistrano version, or try [Mina](http://nadarei.co/mina). That's something I'll definitely do in 2016!



### Started my own fashion brand

[WEÖM](https://weöm.com) is an idea that I've had for at least five years and never did anything with but plan (space-focused apparel). Is it profitable? Absolutely not. The selection isn't even that great (we have a t-shirt and a snapback), but I'm working to change that in 2016. Nothing worth doing is ever easy.



### Created my own email server

Courtesy of [Mail-in-a-Box](https://mailinabox.email)! I had grown increasingly uncomfortable with the amount of data Google has on me, and I hated checking my Gmail knowing that Google read it before me. Call me crazy, but I don't like being tracked and spied upon, even _with_ permission. MiaB's setup instructions are incredibly easy, especially if you already SFTP into servers and such. Also, having your email address be `netopwibby@thenetwork.email` sounds amazing. I have the domain name `illuminatus.email`, but I haven't set it up yet.



### Enabled better security for (some of) my servers

[SSL Labs](https://www.ssllabs.com/ssltest) runs a service to check if your servers are secure and I was dismayed to find that mine weren't. I documented the process to get one of my servers from an F to an [A+ rating](/thoughts/post/set-up-your-apache-server-with-ssl). Unfortunately, there is even _more_ work to be done, according to [SecurityHeaders.io](https://securityheaders.io), haha! I'll work on getting my headers up to snuff soon.



### Deleted Google from my life

Well, almost. I _really_ like YouTube, and keeping track of my favorite videos with playlists. What I **did** do is export all of my data, update my login information on every single website I used my Gmail address for (or, I deleted my account on the website), before finally deleting my Google Account. After a day or two, I created a new Google Account with my `thenetwork.email` address, just for YouTube. I use DuckDuckGo for my web searches. My work-provided email is via Google Apps too, so I haven't escaped 100%, but close.



### Enabled 2FA everywhere possible

I thought Google Authenticator was the only good app out there for managing two-factor authentication, but it turns out that it isn't! [Authy](https://www.authy.com) is a perfect non-Google alternative. I also discovered that someone from France was trying to access my GitHub account (well, the IP was from France).



### Got to A Rank in Splatoon

This may seem silly (because it is), but there are really great Splatoon players out there. That I even got to A Rank means I must be pretty decent. I want to get to S+ though.



### Released a plugin

It is called, "[OfflineDetector](https://github.com/NetOperatorWibby/OfflineDetector)", and is available in vanilla JavaScript and jQuery versions. Like the name suggests, it lets you know if you lose connectivity. I copy/pasted the code in my IoT solutions so much, it just made sense to extract it.



### Created a plugin with options/parameters

This jQuery plugin hasn't been released yet, and that's because I want to create a demo page and nice documentation for it. The name of it is, "PieTimer", and it allows you to setup multiple SVG pie timers on a page, each with their own custom attributes like size, color, rotation count, countdown type (like clockwise, counterclockwise), &c. I'm really proud of it, but have been distracted by the holidays and Splatoon.



### Landed my first freelance client

Courtesy of my youngest sister and happenstance. The client is a cool guy, used to do advertising back in the day, but now just paints great portraits of Boston. Look for his website redesign in 2016 (of course, I'll post about it here, on my Projects page)!



### Became a registered Wii U developer

Like my fashion brand, I've had plenty of ideas for games, but I haven't done much in the way of acting upon them, which is terrible. Thoughts without actions are daydreams. I intend to release a game in 2016.



### Made my web browser better

Yes, [Aries](https://github.com/IdeasNeverCease/Aries) is so much better now! I opted to use [Electron](http://electron.atom.io) in place of [NW.js](http://nwjs.io), especially after I learned that Slack was built with it, and Slack feels like a native app. I was able to replicate the same functionality of NW.js base in half the time. Amazing. More to come in 2016!

I'll end this post with my best nine Instagram photos of 2015, according to [Lip Inc](http://2015bestnine.com).

<figure>
  ![](/images/thoughts/2015-12-30/02.jpg)
  <figcaption>You can see more [@spacemanfresh](https://www.instagram.com/spacemanfresh)</figcaption>
</figure>