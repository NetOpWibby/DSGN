---
layout: post
title:  "Bringing back Opera classic"
date:   2014-04-07
category: post
---

In my last <a href="/thoughts/my-design-development-toolkit">post</a>, I mentioned making Opera feel like Opera 12.16. That particular version of Opera is what I will refer to as Opera Classic. It used Opera's proprietary rendering engine, Presto. After Opera Classic, Opera decided to ditch its own engine to use Chromium (like Google's Chrome). In the near future, Chromium will be replaced with Blink.

A lot of people (read: Opera fans) were displeased when this change happened, myself included. To reiterate something I said in my last post, Opera pioneered a lot of cool features that are now defaults in the other popular browsers. In addition to being the most standards-compliant browser, I felt like Opera was compromising themselves by changing their codebase to use Chromium in place on Presto.

Anyhoo, enough with my rambling, on with the tutorial!

<div class="hr">
	<span>&middot;</span>
	<span>&middot;</span>
	<span>&middot;</span>
	<span>&middot;</span>
</div>

When Opera moved away from Presto, the first thing I noticed was that I no longer had a built-in RSS reader in my browser. They spun it off into its own app and after using it for a month, I was unsatisfied. <a href="http://blog.martinkadlec.eu/post/501-smart-rss-final-v10">Martin Kadlec</a> to the rescue! This is the guy that brought the RSS reader back to Opera. Because Opera's new extension API doesn't allow adding buttons to both next to and inside the URL field, two extensions had to be created (they communicate with each other).

### Smart RSS <a href="https://addons.opera.com/en/extensions/details/smart-rss" style="color: #07d0eb">*</a>

<figure>
	<a href="/images/thoughts/bboc/01.png"><img src="/images/thoughts/bboc/01.png" alt=""/></a>
	<figcaption>Smart RSS in action</figcaption>
</figure>

### RSS Detector <a href="https://addons.opera.com/en/extensions/details/rss-detector" style="color: #07d0eb">*</a>

<figure>
	<a href="/images/thoughts/bboc/02.png"><img src="/images/thoughts/bboc/02.png" alt=""/></a>
	<figcaption>RSS Detector in action</figcaption>
</figure>

This post is definitely incomplete, but it's a start. I discovered a way to remove some of the unsightly new additions to the Speed Dial page, but it would require an extension. If anyone knows how to modify the Speed Dial page via an extension, <a href="http://twitter.com/netopwibby">please let me know</a>.
