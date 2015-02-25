function path() {
	var args = arguments, result = [];

	for (var i = 0; i < args.length; i++) {
		result.push(args[i].replace("@", "http://localhost:4000/scripts/syntax/languages/"));
	}

	/*
	var baseURL = "http://dsgn.io",
			images = ["portrait-01.jpg", "portrait-01b.jpg", "portrait-01c.jpg", "portrait-02.jpg", "portrait-03.jpg"];

	$(".header").css({"background-image": "url(" + baseURL + "/images/" + images[Math.floor(Math.random() * images.length)] + ")"});
	*/

	return result;
}

SyntaxHighlighter.autoloader.apply(null, path(
	"bash shell							@shBrushBash.js",
	"cpp c									@shBrushCpp.js",
	"c# c-sharp csharp			@shBrushCSharp.js",
	"css										@shBrushCSS.js",
	"js jscript javascript	@shBrushJScript.js",
	"php										@shBrushPhp.js",
	"text plain							@shBrushPlain.js",
	"py python							@shBrushPython.js",
	"ruby rails ror rb			@shBrushRuby.js",
	"sass scss							@shBrushSass.js",
	"xml xhtml xslt html		@shBrushXml.js"
));

SyntaxHighlighter.all();