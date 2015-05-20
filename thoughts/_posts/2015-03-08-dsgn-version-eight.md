---
layout:   post-thought
title:    "DSGN, version 8.0"
date:     2015-03-08
category: post
---

About a month ago, I felt I needed to give this dear site of mine more love in the form of a redesign. As I started the redesign, I realized what it needed was more of a re*align*. The code needed a major refactor, mobile styles needed to be refined, and I needed a better way to organize (and create new) projects.

This is finally done! However, I jumped the gun a bit, haha!



### What I got wrong

On mobile, I am using swipe gestures to navigate between pages and next/previous posts/projects on the Thoughts and Projects pages. This worked extremely well in development via Adobe's Edge Inspect (Edge Inspect allows your mobile device to see whatever page your browser is on). When I pushed everything to my server, none of this nifty functionality worked.

I suppose this is why people have staging servers. Seeing as how this is my own personal site, it doesn't really matter, but in the future I will create a private folder on my server to do last checks before making the site "live".

Another issue I found was with the nice white to transparent gradient in the header of this site on iOS devices (later I found this to be an issue in desktop Safari as well). I don't have an Android device to test on, but I will assume they don't have the problem I am about to describe.

~~iOS devices~~ Safari shows that gradient as going from white to black, and it throws off the design. Quite honestly, it looks like shit. I didn't think to create an image to fix the issue for Safari, but that may be the case (I think I used the `-webkit-linear-gradient` syntax when trying to fix it, but I forget where I went with that).

The last thing I messed up on was not testing the neat image placeholders I have for my Projects.

The great thing about hosting this site on GitHub is that I can [post issues](https://github.com/NetOperatorWibby/DSGN/issues) for these problems, because I need an external brain to offload my todos on. Too many ideas, not enough mental real estate.



### What I got right

Before I started this realign, I was using fonts from [Brick](http://brick.im), and I love that site still (I'm using fonts from there in Aries). Now, I am using fonts I purchased from MyFonts. [Range Serif](http://www.myfonts.com/fonts/schizotype/range-serif), [Texta](http://www.myfonts.com/fonts/latinotype/texta), and [Grota Sans](http://www.myfonts.com/fonts/latinotype/grota-sans) are my new favorites.

The page transitions are courtesty of [Animsition](http://git.blivesta.com/animsition), an animation library for such. When navigating Previous/Next Page/Post, it feels more natural. Try it for yourself on this post!

I intend to publish more posts with code samples in the future, and I used [SyntaxHighlighter](http://alexgorbatchev.com/SyntaxHighlighter) to achieve a look that mirrors my own development theme in Brackets. You can see it in action on my post about [using dashes in rails routes](/thoughts/post/using-dashes-in-rails-3-routes). However, the correct coloring hasn't been loading on page load, which is annoying. That's going to be fixed soon.

The blur at the top of the site that transitions to the white of the main content was intital done using the `:before` pseudo-selector. However, this introduced horizontal scrolling that was minimal, but unsightly once you noticed it. I resorted to using an empty div to enable the effect.

But why keep it, you ask? Well, the main navigation that scrolls with the page looks absolutely terrible without it. On smaller displays, this isn't an issue, but on desktop is how a vast majority of people visit this here site.

Anyhoo, I added some custom JavaScript to make that div keep position with scrolling, but on systems with built-in smooth scroll (like Macs), the illusion is broken on swift swipes/scrolls. Meh.

Behind the scenes, I've adapted the use of BEM syntax where it made sense, to make keeping track of divs and styling easier, reduce specificity, &c. There's still some cruft in my CSS that can be removed, and that'll happen in due time. In hindsight, I wish I recorded code stats of version seven of DSGN. Womp.



### So, what now?

At a high level, I am quite pleased with how version 8 of this site came out\*, but of course there are things that can (and will be) made better. I haven't updated the Projects portion of my site, because the process of creating a new project wasn't fun. Now that the Projects are as easy to update as my regular blog posts are, I can finally point people to my thought process behind my operating system and browser projects, instead of handing them a bunch of links to Dribbble, deviantART, here, and elsewhere.

Announcement! There is another project I'm working on, and a full write-up will come later, but the name of it is "WEÖM" (pronounced, "wee-oohm"). It is a streetwear (for lack of a better word) brand whose focus is space. Not the Dieter Rams designer-y "space", but that place Neil deGrasse Tyson likes to talk about so much.

You can reach it at [weöm.com](https://weöm.com) and also [weom.co](http://weom.co). The plan is to launch it on my birthday, April 3rd, and even though that's just a month away, I have faith that my team and I can get it done. Unfortunately, we are only able to launch with one product due to manufacturer issues, but more is in the pipeline.

Til' next time!

<small>*I've had this domain for eight years and I'm pretty sure it's been redesigned at least once a year. This marks the first time that the design has stayed the same, but iterated to a better design.</small>