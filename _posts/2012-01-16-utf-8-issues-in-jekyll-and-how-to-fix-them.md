---
layout: post
title:  "UTF-8 issues in Jekyll (and how to fix them)"
date:   2012-01-16
category: post
---

Any good web developer worth his/her salt knows that UTF-8 is superior to ANSI, and will normally encode files as such. However, those of us coding on Windows-based machines have to deal with this annoying thing called "BOM", which can sometimes break programs. Here is what Wikipedia has to say about it:

> The UTF-8 representation of the BOM is the byte sequence 0xEF,0xBB,0xBF. A text editor or web browser interpreting the text as ISO-8859–1 or CP1252 will display the characters ï»¿ for this. Many Windows programs (including Windows Notepad) add BOMs to UTF-8 files by default.

Jekyll has a problem with files encoded in UTF-8 with BOM, but Notepad++ (a free text/sourcecode editor for Windows) has a solution for that. Go into `Settings` > `Preferences` > and select `UTF-8 without BOM`.

*Ahhhhh*. What a relief.