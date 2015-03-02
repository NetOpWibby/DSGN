// SyntaxHighlighter 3.083
// Alex Gorbatchev (http://alexgorbatchev.com/SyntaxHighlighter)
// MIT and GPL licensed

function path() {
  var args = arguments, result = [];

  for (var i = 0; i < args.length; i++) {
    result.push(args[i].replace("@", "http://localhost:4000/scripts/syntax/languages/")); // development
    // result.push(args[i].replace("@", "http://dsgn.io/scripts/syntax/languages/"));
  }

  return result;
}

SyntaxHighlighter.autoloader.apply(null, path(
  "bash shell             @shBrushBash.js",
  "cpp c                  @shBrushCPP.js",
  "c# c-sharp csharp      @shBrushCSharp.js",
  "css                    @shBrushCSS.js",
  "js jscript javascript  @shBrushJavaScript.js",
  "php                    @shBrushPHP.js",
  "text plain             @shBrushPlain.js",
  "py python              @shBrushPython.js",
  "ruby rails ror rb      @shBrushRuby.js",
  "sass scss              @shBrushSass.js",
  "xml xhtml xslt html    @shBrushXML.js"
));

SyntaxHighlighter.all();