---
layout: post
title:  "What's new with hikari and Aries?"
date:   2014-05-11
category: post
---

Almost a year ago, <a href="/thoughts/the-future-of-the-operating-system">I wrote</a> about my operating system concept, hikari OS, and how excited I was to work on it. It's about time you got some updates, right?

<div class="hr">
	<span>&middot;</span>
	<span>&middot;</span>
	<span>&middot;</span>
	<span>&middot;</span>
</div>

I am using <a href="http://nodejs.org" target="_blank">node.js</a> for the structure and foundation of hikari. After I am done with most of the desktop functionality I want in the 1.0 release, I will implement a Linux kernel to boot it from. I am still figuring out if I want to move away from <a href="https://github.com/rlamana/Ventus" target="_blank">Ventus</a> as the window manager, or implement my own. In my period of uncertainty, I decided to work on a different project (more on this later). Authentication is handled via <a href="http://passportjs.org" target="_blank">Passport.js</a>, but only GitHub and Facebook oAuth is implemented at the moment. If you wish to play around with hikari on your own system, you will need to get your own oAuth keys (instructions are included in the repo).

I thought it clever to run the server on <span class="mono">localhost:1343</span> because of the main town in Megaman Battle Network is ACDC Town (think of the numbers as letters, you'll get it). <span class="mono">localhost:1343/s</span> is the URL you'll get it when you log in. This is future-proofing for when hikari will be hosted "in the cloud". The full URL will be <span class="mono">hikar.io/s</span>, for "hikari OS". I really like playing around with URLs, if you haven't noticed. Ooh, here are some screens of hikari at this time of writing!

<div>
	<a href="/images/thoughts/wnwhaa/01.jpg"><img src="/images/thoughts/wnwhaa/01.jpg" alt=""/></a>
	<small>Login screen</small>
</div>

I had the idea to use animated gifs that correspond with the weather in your area. Large animated gifs affect performance negatively on a Retina display. Check out that cursor though! I'm using SVG for it.

<div>
	<a href="/images/thoughts/wnwhaa/02.jpg"><img src="/images/thoughts/wnwhaa/02.jpg" alt=""/></a>
	<small>Login panel expanded, opens with a nifty animation.</small>
</div>

I have a theory that logins are going to become less important as the years go on. Still, for peace of mind (and as backup), standard login will be implemented.

<div>
	<a href="/images/thoughts/wnwhaa/03.jpg"><img src="/images/thoughts/wnwhaa/03.jpg" alt=""/></a>
	<small>I'm logged in!</small>
</div>

You can tell from the upper-right corner that my avatar is being pulled via GitHub's oAuth, and the vertical green bar indicates I have an Internet connection.

<div>
	<a href="/images/thoughts/wnwhaa/04.jpg"><img src="/images/thoughts/wnwhaa/04.jpg" alt=""/></a>
	<small>The main side menu opened. Battle Network fans will recognize this instantly.</small>
</div>

<div class="hr">
	<span>&middot;</span>
	<span>&middot;</span>
	<span>&middot;</span>
	<span>&middot;</span>
</div>

Whilst I was in the middle of developing hikari, a new web font service called <a href="http://brick.im" target="_blank">Brick.im</a> came out and the font selection is *beautiful*. In fact, DSGN* is using fonts from Brick! A couple weeks ago, I asked the curator if I could include the fonts in Aries and got the go-ahead. Sweet!

<blockquote class="twitter-tweet" lang="en"><p><a href="https://twitter.com/NetOpWibby">@NetOpWibby</a> Is this for Aries? Sure! Though I think for a browser, it&#39;ll be faster to package the font files directly with the browser.</p>&mdash; Alfred Xing (<a href="https://twitter.com/lfrdxng">@lfrdxng</a>) <a href="https://twitter.com/lfrdxng/statuses/462260062400950272">May 2, 2014</a></blockquote>

What a nice segue into the project that's taking most of my time now: Aries!

Aries is the name I chose for hikari's browser. For one, my zodiac sign is Aries, it is the first sign of the cardinal zodiac, and I thought it would be cool if the icon was a ram on fire. Of course, I haven't designed the icon yet, but all the above reasons sounded good enough to me!

Anyhoo, those eagle-eyed readers might have noticed that the above screenshots were of hikari running *inside* of Aries. Of course, Aries still needs a **lot** of work.

Aries is running on <a href="https://github.com/rogerwang/node-webkit" target="_blank">node-webkit</a>, and I have been working on it for the past two weeks, daily. Since I develop on a Mac primarily these days, I have not created binaries for Aries on other platforms yet. I am waiting to get to a 1.0  release (just like hikari).

The default node-webkit window is basically a stripped down Chromium browser. For Aries, it is the parent container for the tabs and frames associated with them. Because of this unique setup, I am able to do things I wouldn't otherwise be able to do normally like grab the title of a page in an iframe. I am doing the same for favicons, but I've got to come up with a better regex for grabbing them. Absolute URLs to favicons work, but relative ones don't. *UGH*. I'm learning a lot of pretty nifty stuff though, and it definitely makes my crazy idea of making the browser I want an actual reality.

The GitHub repo for Aries <a href="https://github.com/IdeasNeverCease/Aries" target="_blank">is here</a>, if you want to check it out, star it, &c. You can get a pretty good idea of what I'm gonna do next by looking at <a href="https://github.com/IdeasNeverCease/Aries/issues" target="_blank">the Issues</a> and <a href="https://twitter.com/intent/user?screen_name=netopwibby" target="_blank">following me</a> or <a href="https://twitter.com/intent/user?screen_name=tadashihikari" target="_blank">my hikari account</a> on Twitter. I can go on about more specific details about hikari and Aries in this post, but that's overkill at this point. Basically, thinking like an OS manufacturer *and* browser vendor is an exercise in mental stability.

Here's to 1.0!