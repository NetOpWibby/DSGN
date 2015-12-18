---
layout:   post-project
title:    "OfflineDetector"
date:     2015-12-18
category: project

project:  self
laptop:  "/images/projects/od/desktop-02.jpg"
---

<div class="laptop-wrap">
  <img src="{{ page.laptop }}" class="image" alt="{{ page.title }}, on a laptop"/>

  <svg viewbox="0 0 600 600" class="laptop">
    <path fill="#191919" d="M310, 401.5H131.5v-226c0-3.9, 3.2-7, 7-7H310"/>
    <path fill="#191919" d="M290, 168.5h171.5c3.8, 0, 7, 3.1, 7, 7v226H290"/>
    <path fill="#ddd" d="M487, 409v15.5c0, 3.8-3.2, 7.5-7, 7.5H120c-3.8, 0-7-3.7-7-7.5V409H487z"/>
    <polygon fill="#a4acbb" points="326.7, 421.8 273.3, 421.8 268.3, 414.2 331.7, 414.2"/>
  </svg>
</div>

A lot of the projects I work on require Internet connectivity, so I thought it would be useful to let the end user know when they lose access. And then, I figured this code should live on GitHub.

There are two flavors — raw JavaScript and, jQuery. The JavaScript version doesn't automatically dismiss the offline notication once the end user regains connectivity, or center exactly on the page, but those are the only things it has over the jQuery version.

Here's what it looks like!

<figure>
  ![](/images/projects/od/desktop-02.jpg)
  <figcaption>Hey, where did my wifi go?!</figcaption>
</figure>

You can find [OfflineDetector on GitHub](https://github.com/NetOperatorWibby/OfflineDetector "OfflineDetector sourcecode, on GitHub).