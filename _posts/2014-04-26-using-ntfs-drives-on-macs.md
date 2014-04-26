---
layout: post
title:  "Using NTFS drives on Macs"
date:   2014-04-26
category: post
---

I recently got a new MacBook Pro for work and have spent the past week trying to find the best way to adapt my workflow from the PC world to the Mac world. I'm still trying to figure some stuff out and getting myself to ignore other things (I have gotten extremely used to the Home, End, Page Up, and Page Down keys on my PC laptop).

Anyhoo, I also make music! I keep all my samples and song files on an external hard drive, simply because I have so much. Of course, that external was formatted for PC use. That means Macs can only <em>read</em> from NTFS drives, not write to them. There are apps out there that can take care of the headache for you, but why pay when you can find free alternatives?

I didn't have to access the command line to do anything, just install and reboot. I have made all the files needed for this <a href="https://app.box.com/s/7kdsn3kvryhbh1yixnu6">available here</a>, in case the official links die. It's kind of important to install them in order, so it goes:

<ol>
	<li><a href="http://www.macupdate.com/app/mac/24481/ntfs-3g">NTFS-3G</a></li>
	<li><a href="http://osxfuse.github.io">Fuse</a></li>
	<li><a href="mac.softpedia.com/get/Utilities/Fuse-Wait.shtml">Fuse Wait</a></li>
	<li><a href="http://www.tuxera.com/mac/macfuse-core-10.5-2.1.9.dmg">MacFUSE Core</a></li>
</ol>

The <a href="http://www.macbreaker.com/2012/02/enable-write-for-ntfs-hard-drives-on.html#comment-925777564">original tutorial</a> I was following said I just needed the above files. Maybe something changed between Lion and Mavericks, but I also needed MacFuse. I then got a message saying MacFuse wasn't fully installed (augh!), <a href="http://stackoverflow.com/questions/11326969/macfuse-does-not-appear-to-be-installed">so I installed "MacFUSE Core"</a>. Not sure what the difference was, but hey, everything should be working for you now!
