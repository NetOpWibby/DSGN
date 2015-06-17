---
layout:   post-thought
title:    "How to use Brackets Sass"
date:     2015-04-29
category: post
---

In a post about [my Brackets setup](/thoughts/post/my-brackets-setup), I mentioned being informed about a plugin called, "Brackets Sass". I usually use Terminal to compile my Sass but once you start organizing folders and files differently, you tend to get confused about how to use parameters. Actually, this issue is probably just mine alone...anyhoo, you probably know that Brackets is a text-editor that has an integrated plugin system. To install Brackets Sass, just search for it in the Extensions Manager.

The `README` on the [GitHub page](https://github.com/jasonsanjose/brackets-sass) had links to two examples, one of which included a bunch of Sass boilerplate stuff I don't need, and the other was simpler. I went with that one. Before I continue, you must know that in order to use Brackets Sass properly, you have to include a `.brackets.json` file at the base of your project folder.

The `.` at the beginning of the file will render it invisible to your system when you download/create it, just FYI. This JSON file is where you will adjust the Sass compilation parameters.

Here is my code for a sample project, adapted from the [original example code](https://github.com/jasonsanjose/brackets-sass/wiki/Foundation):

<pre><code>
  {
    "path": {
      "css/style.scss": {
        "sass.enabled": true,
        "sass.options": {
          "outputDir": "../css/",
          "imagePath": null,
          "sourceComments": "map",
          "outputStyle": "compressed"
        }
      }
    }
  }
</code></pre>

I suppose I should post the contents of my `style.scss` file too:

<pre><code>
  @charset "utf-8";

  @import
    "../sass/fonts",
    "../sass/colours",
    "../sass/base",
    "../sass/forms",
    "../sass/header",
    "../sass/icons",
    "../sass/layout",
    "../sass/sidebar"
  ;
</code></pre>

Looking at the section of code from my `.brackets.json` file, you can see that I am telling Brackets to watch my `style.scss` file, and push the compiled CSS to my `css/` folder. Every time you make a change to any of your Sass files, Brackets will recompile the CSS. **Sweet**.

<small>I am not sure why the `../` is needed since the JSON is at the base of the project folder, but it doesn't work without it.</small>

Output style can only take two parameters at the moment, `nested` and `compressed`. The other two, `expanded` and `compact` will become supported at a later date.

Annnnnd, that should do it! If the initial setup doesn't seem like it's working, restart Brackets and everything should work. Should.