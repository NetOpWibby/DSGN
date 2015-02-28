---
layout:   post
title:    "My graphic design/web development toolkit"
date:     2014-01-16
category: post
---

When I started doing graphic design eight years ago (followed by web design a year later), I was like a distracted puppy. I had lots of imagination, and barely any skills so I wanted to try everything. A new application was released? I tested it. "10 Awesome New Fonts You Should Use"? Downloaded 'em. Web and graphic trends? Followed 'em (remember when grunge, textures, and glossy buttons were a thing? My site had coffee stain textures on it, and I don't even drink coffee).

As I matured into a more capable (front-end) web developer, I stopped paying attention to the "top list" headlines blogs are *still* continuing to use, and found myself returning to the same tools for every project I worked on. Subsequently, I released less and less graphic goodies (I used to make desktop wallpaper all the time). I intend to reverse that trend.

This was going to be two different blog posts but most people are beginning the transition from designer to developer and vice-versa. I figured it would be helpful to show how my workflow is, so that you can learn something new and/or tell me how I could do something better! Also, I am on a Windows machine so some of the applications here won't apply to your system. Linux users, I commend you. Mac users&hellip;you guys get all the good stuff anyway.

### Writing Utensil and Paper
This is probably my most prized set of tools, right before Notepad++ and Opera. I own many [Moleskine](http://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=Moleskine)s, sketch pads, notebooks, and [DotGrid Journal](http://www.creativesoutfitter.com/product/33/dot-grid-journal)s. These many sources of paper are filled with layout sketches, HEX color codes, lyrics, plans for world domination, [Numberman codes](http://www.gamefaqs.com/gba/915457-mega-man-battle-network-3-blue/cheats), &c. Sketches are super essential for communicating ideas, complex and otherwise. Want proof? [Hieroglyphics](http://en.wikipedia.org/wiki/Hieroglyphics).

### Photoshop [*](http://adobe.com/photoshop)

<figure>
  [![](/images/thoughts/mddt/01.png")](/images/thoughts/mddt/01.png)
  <figcaption>Adobe Photoshop</figcaption>
</figure>

The industry standard. I am keen to try [Pixelmator](http://www.pixelmator.com), but I am on a Windows machine and sadly, Pixelmator is Mac-exclusive. I do think the team behind Pixelmator could give Adobe a run for their money if they supported more platforms. Unfortunately, some of the core features in that awesome app rely on technologies provided by the Mac platform.

Anyhoo! For concepts that require a bit of finesse and optimizing, Photoshop gets the job done for me. Aside from that, I mostly use Photoshop to get HEX and RGBA values for colors to use with my Sass files.

### Axialis Icon Workshop [*](http://www.axialis.com/iconworkshop)

<figure>
  [![](/images/thoughts/mddt/02.png)](/images/thoughts/mddt/02.png)
  <figcaption>Axialis Icon Workshop</figcaption>
</figure>

I use this app to package 16px and 32px images of my favicons. Before this, I just made a single PNG (favicon.png) and called it a day. If you don't already know this, icons actually contain several different sizes of an image optimized for particular dimensions. Fun fact! High-DPI displays can take advantage of the 32x32px image inside your favicon.ico, whereas regular displays will still show the 16x16px icon. This is a small detail, but a detail nonetheless.

### Opera [*](http://opera.com)

<figure>
  [![](/images/thoughts/mddt/03.png)](/images/thoughts/mddt/03.png)
  <figcaption>Opera Developer</figcaption>
</figure>

I discovered this browser sometime in 2006 and have been a faithful user ever since. I have three versions of Opera installed my computer: version [12.16](http://www.opera.com/download/guide/?os=windows&ver=12.16&local=y), the [latest stable](http://www.opera.com/computer) version, and the [latest developer](http://www.opera.com/developer) version.

I use Opera because at the time I discovered it, it was the most standards-compliant (HTML, CSS, &c) browser, and it pioneered a lot of cool features that are now defaults in the other popular browsers. I am not sure if Opera is still the most standards-compliant, but even if it isn't, I'm a creature of habit. It's pretty difficult to get me to try something else if I'm comfortable with what I've got.

<del>For long-time Opera users, I'll write a future post detailing how I make the new Opera feel like version 12.</del>
<span><small>Updated 03.29.14 to add [this](/thoughts/bringing-back-opera-classic), a post where I detail how to make the new Opera feel like version 12.</small></span>

### Notepad++ [*](http://www.notepad-plus-plus.org)

<figure>
  [![](/images/thoughts/mddt/04.png)](/images/thoughts/mddt/04.png)
  <figcaption>Notepad++</figcaption>
</figure>

My dad used Dreamweaver back when it was owned by Macromedia (lol, old man!). I *may* have perused a "[Dreamweaver MX](http://webdesign.about.com/cs/htmleditors/gr/aapr_dreamwvrmx.htm)" book back in the day. Even though I started coding in '06/'07, I actually dabbled in it when I was in 7th grade. I didn't like how bulky Dreamweaver felt back then (still don't), so I opted to use Windows' default simple text editor, Notepad.

Maybe that's why I use Notepad++? I just wish it had native [Sass](http://sass-lang.com) support! I've tried [Sublime Text](http://www.sublimetext.com) and liked it *visually*, but I didn't like the auto-bracketing and other "auto" things. A pet peeve of mine is when programs try to tell me what to do (similarly, I also dislike Google's "Did you mean" suggestions, so I use [DuckDuckGo](https://duckduckgo.com). I also don't like getting tracked/spied on, but that's a different story). I'm sure the things that annoy me about Sublime can be disabled, but I didn't experience anything to make me think I should change text editors...also, Notepad++ is free.

I am using a custom theme based on a screenshot I saw on Dribbble. The font I use is "[Source Code Pro](http://sourceforge.net/projects/sourcecodepro.adobe/files)" at 9 points.

### Console2 [*](http://sourceforge.net/projects/console)

<figure>
  [![](/images/thoughts/mddt/05.png)](/images/thoughts/mddt/05.png)
  <figcaption>Console2</figcaption>
</figure>

While I was an apprentice at thoughtbot in early 2012, I was required to use MacBook because that's what they used (I think I used [TextMate](http://macromates.com/download) as my replacement for Notepad++). The team there uses Ruby a lot, so that meant learning how to use Terminal. It was intimidating at first, but I grew to love the command line.

When the apprenticeship was over, I was first disgusted, then saddened at the prospect of using Windows' default terminal, cmd.exe. Yuck. A quick search brought the existence of Console2 into my life. Using a screenshot of my temporary MacBook's Terminal, I customized Console2 to resemble it. The current look you see above is based on [Amana2](http://www.mangosango.us/new/amana2) screenshots by the immaculate [Sang Lee](http://www.sanglee.me).

### JS Beautifier [*](http://jsbeautifier.org)

<figure>
  [![](/images/thoughts/mddt/06.png)](/images/thoughts/mddt/06.png)
  <figcaption>JS Beautifier</figcaption>
</figure>

I often find useful code online, but it will be sloppily written. My coding style leans heavily on the side of readability, because looking at a screen all day gets really irritating and tiresome when you have to look at shit. I am also thinking about helping out the *future* me. Whatever I'm working on today may not last in 3 months or 6 years, but in the event it does? Well, I will be able to easily find what I'm looking for.

Besides, it helps me learn and become better at coding JavaScript.

### JS Hint [*](http://jshint.com)

<figure>
  [![](/images/thoughts/mddt/07.png)](/images/thoughts/mddt/07.png)
  <figcaption>JS Hint</figcaption>
</figure>

I use JS Hint immediately after using JS Beautifier. As I hinted earlier, I teach myself how to code JavaScript by looking at other code samples and integrating them into my own personal projects. JS Hint tells me how I *should* structure my JavaScript and I find the results enlightening. However, as with all recommendation engines, it is best to ensure the hinted code still works in your project.

Not all JavaScript is created equal.

### Stack Overflow [*](http://stackoverflow.com)

<figure>
  [![](/images/thoughts/mddt/08.png)](/images/thoughts/mddt/08.png)
  <figcaption>Stack Overflow</figcaption>
</figure>

This is the Google for coders. I really love this community, the majority of it is really nice and keen on helping people discover solutions to their problems. It feels good to give back to the community when I actually have an answer to a newbie's problem. I still consider myself intermediate, but I'm getting there.

<div class="divider">
  <span class="divider__shape-01"></span>
  <span class="divider__shape-02"></span>
  <span class="divider__shape-03"></span>
  <span class="divider__shape-04"></span>
</div>

And there you have it! I started to get carried away there, adding [GitHub](https://github.com) and [Unheap](http://www.unheap.com) to the list, but those two sites are more like "places where I can find some nice plugins".