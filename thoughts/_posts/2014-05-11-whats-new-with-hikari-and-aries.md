---
layout:   post-thought
title:    "What's new with hikari and Aries?"
date:     2014-05-11
category: post
---

Almost a year ago, [I wrote](/thoughts/post/the-future-of-the-operating-system) about my operating system concept, hikari OS, and how excited I was to work on it. It's about time you got some updates, right?

<div class="divider">
  <span class="divider__shape-01"></span>
  <span class="divider__shape-02"></span>
  <span class="divider__shape-03"></span>
  <span class="divider__shape-04"></span>
</div>

I am using [node.js](http://nodejs.org) for the structure and foundation of hikari. After I am done with most of the desktop functionality I want in the 1.0 release, I will implement a Linux kernel to boot it from. I am still figuring out if I want to move away from [Ventus](https://github.com/rlamana/Ventus) as the window manager, or implement my own. In my period of uncertainty, I decided to work on a different project (more on this later). Authentication is handled via [Passport.js](http://passportjs.org), but only GitHub and Facebook oAuth is implemented at the moment. If you wish to play around with hikari on your own system, you will need to get your own oAuth keys (instructions are included in the repo).

I thought it clever to run the server on `localhost:1343` because of the main town in Megaman Battle Network is ACDC Town (think of the numbers as letters, you'll get it). `localhost:1343/s` is the URL you'll get it when you log in. This is future-proofing for when hikari will be hosted "in the cloud". The full URL will be `hikar.io/s`, for "hikari OS". I really like playing around with URLs, if you haven't noticed. Ooh, here are some screens of hikari at this time of writing!

<figure>
  ![](/images/thoughts/2014-05-11/01.jpg)
  <figcaption>Login screen</figcaption>
</figure>

I had the idea to use animated gifs that correspond with the weather in your area. Large animated gifs affect performance negatively on a Retina display. Check out that cursor though! I'm using SVG for it.

<figure>
  ![](/images/thoughts/2014-05-11/02.jpg)
  <figcaption>Login panel expanded, opens with a nifty animation.</figcaption>
</figure>

I have a theory that logins are going to become less important as the years go on. Still, for peace of mind (and as backup), standard login will be implemented.

<figure>
  ![](/images/thoughts/2014-05-11/03.jpg)
  <figcaption>I'm logged in!</figcaption>
</figure>

You can tell from the upper-right corner that my avatar is being pulled via GitHub's oAuth, and the vertical green bar indicates I have an Internet connection.

<figure>
  ![](/images/thoughts/2014-05-11/04.jpg)
  <figcaption>The main side menu opened. Battle Network fans will recognize this instantly.</figcaption>
</figure>

<div class="divider">
  <span class="divider__shape-01"></span>
  <span class="divider__shape-02"></span>
  <span class="divider__shape-03"></span>
  <span class="divider__shape-04"></span>
</div>

Whilst I was in the middle of developing hikari, a new web font service called [Brick.im](http://brick.im) came out and the font selection is *beautiful*. In fact, DSGN* is using fonts from Brick! A couple weeks ago, I asked the curator if I could include the fonts in Aries and got the go-ahead. Sweet!

> [@NetOpWibby](https://twitter.com/NetOpWibby) Is this for Aries? Sure! Though I think for a browser, it'll be faster to package the font files directly with the browser. &mdash; Alfred Xing ([@lfrdxng](https://twitter.com/lfrdxng))

> [May 2, 2014](https://twitter.com/lfrdxng/statuses/462260062400950272)

What a nice segue into the project that's taking most of my time now: Aries!

Aries is the name I chose for hikari's browser. For one, my zodiac sign is Aries, it is the first sign of the cardinal zodiac, and I thought it would be cool if the icon was a ram on fire. Of course, I haven't designed the icon yet, but all the above reasons sounded good enough to me!

Anyhoo, those eagle-eyed readers might have noticed that the above screenshots were of hikari running *inside* of Aries. Of course, Aries still needs a **lot** of work.

Aries is running on [node-webkit](https://github.com/rogerwang/node-webkit), and I have been working on it for the past two weeks, daily. Since I develop on a Mac primarily these days, I have not created binaries for Aries on other platforms yet. I am waiting to get to a 1.0 release (just like hikari).

<!--/ ad /-->

The default node-webkit window is basically a stripped down Chromium browser. For Aries, it is the parent container for the tabs and frames associated with them. Because of this unique setup, I am able to do things I wouldn't otherwise be able to do normally like grab the title of a page in an iframe. I am doing the same for favicons, but I've got to come up with a better regex for grabbing them. Absolute URLs to favicons work, but relative ones don't. *UGH*. I'm learning a lot of pretty nifty stuff though, and it definitely makes my crazy idea of making the browser I want an actual reality.

The GitHub repo for [Aries is here](https://github.com/IdeasNeverCease/Aries), if you want to check it out, star it, &c. You can get a pretty good idea of what I'm gonna do next by looking at [the issues](https://github.com/IdeasNeverCease/Aries/issues) and [following me](https://twitter.com/intent/user?screen_name=netopwibby) or [my hikari account](https://twitter.com/intent/user?screen_name=tadashihikari) on Twitter. I can go on about more specific details about hikari and Aries in this post, but that's overkill at this point. Basically, thinking like an OS manufacturer *and* browser vendor is an exercise in mental stability.

Here's to 1.0!