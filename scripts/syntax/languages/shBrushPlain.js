// SyntaxHighlighter 3.083
// Alex Gorbatchev (http://alexgorbatchev.com/SyntaxHighlighter)
// MIT and GPL licensed

(function() {

  // CommonJS
  typeof(require) != "undefined" ? SyntaxHighlighter = require("shCore").SyntaxHighlighter: null;

  function Brush() {}

  Brush.prototype = new SyntaxHighlighter.Highlighter();
  Brush.aliases = ["text", "plain"];

  SyntaxHighlighter.brushes.Plain = Brush;

  // CommonJS
  typeof(exports) != "undefined" ? exports.Brush = Brush: null;

})();