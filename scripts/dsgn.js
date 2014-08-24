
	var $vW = $(window).width();

	$(function () {

		$(".gallery a").each(function () {

			var title = $(this).data("title");

			$(this).one("click", function () {
				$(".fluidbox-ghost", this).append("<span>" + title + "</span>");
			});

		});

		if ($vW < "1025") {
			$("#full-page-container").before('<div id="scroll-bg"></div>');
		}

		if ($vW < "321") {

			menu = "";
			menu += "<ul id=\"menu\" style=\"display: none;\">";
			menu += "<li id=\"menu-home\"><a href=\"/\">Home</a></li>";
			menu += "<li id=\"menu-me\"><a href=\"/me\">Me</a></li>";
			menu += "<li id=\"menu-thoughts\"><a href=\"/thoughts\">Thoughts</a></li>";
			menu += "<li id=\"menu-projects\"><a href=\"/projects\">Projects</a></li>";
			menu += "</ul>";

			$("#scroll-bg").after(menu);

			$("#scroll").attr("href", "#");

			$("#scroll").click(function (e) {

				$("#menu").toggle();

				if ($("#menu").css("display") == "block") {
					// $("#scroll-bg").css("border-bottom", "0");
				} else {
					// $("#scroll-bg").css("border-bottom", "1px solid rgba(25, 25, 25, 0.05)");
				}

				e.preventDefault();

			});

		}

	});

	$(window).scroll(function () {

		var value = $(this).stop().scrollTop();

		$(function () {
			setTimeout(function () {

				// Desktop
				if (value > 1 && $vW >= "1025") {

					$("#no-scroll").css({
						"opacity": "0",
						"top": "-6rem"
					});

					$("#work-availibility").css({
						"opacity": "0",
						"top": "-6rem"
					});

					$("#scroll").css({
						"opacity": "1",
						"top": "2rem",
						"z-index": "10"
					});

					$(".nav-wrapper").css({
						"width": "100%",
						"height": "auto",
						"top": "inherit",
						"left": "inherit",
						"background-color": "transparent",
						"border-bottom": "none",
						"margin": "20px 0 0 2%",
						"position": "relative",
						"z-index": "inherit"
					});

					$(".nav-wrapper nav").css({
						"top": "8rem",
						"left": "2rem",
						"font-size": "inherit"
					});

					$(".nav-wrapper nav ul:nth-child(2)").css("opacity", "1");

					$(".nav-wrapper li").css({
						"display": "inherit",
						"margin": "inherit"
					});

					$(".nav-wrapper li:last-child").css("margin", "inherit");

				}

				if (value < 1 && $vW >= "1025") {

					$("#no-scroll").css({
						"opacity": "1",
						"top": "2rem"
					});

					$("#work-availibility").css({
						"opacity": "1",
						"top": "7.4rem"
					});

					$("#scroll").css({
						"opacity": "0.001",
						"top": "-2rem",
						"z-index": "10"
					});

					$(".nav-wrapper").css({
						"width": "100%",
						"height": "auto",
						"top": "inherit",
						"left": "inherit",
						"background-color": "transparent",
						"border-bottom": "none",
						"margin": "20px 0 0 2%",
						"position": "relative",
						"z-index": "inherit"
					});

					$(".nav-wrapper nav").css({
						"top": "23.5rem",
						"left": "2rem",
						"font-size": "inherit"
					});

					$(".nav-wrapper nav ul:nth-child(2)").css("opacity", "0.001");

					$(".nav-wrapper li").css({
						"display": "inherit",
						"margin": "inherit"
					});

					$(".nav-wrapper li:last-child").css("margin", "inherit");

				}

				// Tablet
				if (value > 1 && $vW > "800" && $vW < "1025") {

					$("#no-scroll").css({
						"opacity": "0",
						"top": "-6rem"
					});

					$("#work-availibility").css({
						"opacity": "0",
						"top": "-6rem"
					});

					$("#scroll").css({
						"opacity": "1",
						"top": "2rem",
						"z-index": "10"
					});

					$("#scroll-bg").css("top", "0");

				}

				if (value < 1 && $vW > "800" && $vW < "1025") {

					$("#no-scroll").css({
						"opacity": "1",
						"top": "2rem"
					});

					$("#work-availibility").css({
						"opacity": "1",
						"top": "7.4rem"
					});

					$("#scroll").css({
						"opacity": "0.001",
						"top": "-2rem",
						"z-index": "10"
					});

					$("#scroll-bg").css("top", "-88px");

				}

				if (value > 1 && $vW < "321") {

					$("#scroll-bg").css("top", "0");

					$("#scroll .cyan, #scroll .magenta, #scroll .yellow, #scroll .key").css({
						"width": "5px",
						"height": "20px"
					});

				}

				if (value < 1 && $vW < "321") {

					$("#scroll-bg").css("top", "-88px");

					$("#scroll .cyan, #scroll .magenta, #scroll .yellow, #scroll .key").css({
						"width": "10px",
						"height": "40px"
					});

				}

				/*
				if (value > 1 && $vW < "321") {

					// $("#previous-content, #next-content").css("display", "none");

					$("footer").waypoint(function () {

						$(".nav-wrapper nav ul:nth-child(2)").css("opacity", "1");

						$("#previous-content, #next-content").css({
							"bottom": "8.5rem",
							"display": "block"
						});

					}, { offset: 105 });

				}
				*/

			}, 10);
		});

	});

	/*
	$(function () {
		if ($vW < "321") {
			setTimeout(function () {
				window.scrollTo(0, 1);
			}, 0);
		}
	});
	*/

	/*
	function browser_resize() {

		var $vW = $(window).width();

		if (($vW >= "802")) {

			$("#no-scroll").css({
				"opacity": "1",
				"top": "2rem"
			});

			$("#work-availibility").css({
				"opacity": "1",
				"top": "7.4rem"
			});

			$("#scroll").css({
				"opacity": "0.001",
				"top": "-2rem",
				"z-index": "inherit"
			});

			$(".nav-wrapper .wrapper").css({
				"width": "100%",
				"height": "auto",
				"top": "inherit",
				"left": "inherit",
				"background-color": "transparent",
				"border-bottom": "none",
				"margin": "20px 0 0 2%",
				"position": "relative",
				"z-index": "inherit"
			});

			$(".nav-wrapper nav").css({
				"top": "23.5rem",
				"left": "2rem",
				"font-size": "inherit"
			});

			$(".nav-wrapper li").css({
				"display": "inherit",
				"margin": "inherit"
			});

			$(".nav-wrapper li:last-child").css("margin", "inherit");

		}

		if (($vW < "801")) {

			$("#no-scroll").css({
				"opacity": "0",
				"top": "-6rem"
			});

			$("#work-availibility").css({
				"opacity": "0",
				"top": "-6rem"
			});

			$("#scroll").css({
				"opacity": "1",
				"top": "2rem",
				"z-index": "10"
			});

			$(".nav-wrapper .wrapper").css({
				"width": "100%",
				"height": "5.5rem",
				"top": "0",
				"left": "0",
				"background-color": "#fcfcfc",
				"border-bottom": "1px solid #333",
				"margin": "0",
				"position": "fixed",
				"z-index": "2"
			});

			$(".nav-wrapper nav").css({
				"top": "2rem",
				"left": "14rem",
				"font-size": "inherit"
			});

			$(".nav-wrapper li").css({
				"display": "inline-block",
				"margin": "0 2rem 0 0"
			});

			$(".nav-wrapper li:last-child").css("margin", "0");

		}

		if ($vW < "321") {

			$("#previous-content, #next-content").css("display", "none");

			$("footer").waypoint(function () {
				$("#previous-content, #next-content").css("display", "block");
			}, { offset: 285 });

		}

	}

	browser_resize();
	$(window).resize(browser_resize);
	*/

	// This is interfering with mobile view at the moment
	// $("header").css("background-image", "url('/images/portrait-01.jpg')");

	if (navigator.appVersion.indexOf("Win")!= -1) {
    $(".browser-preview .content-wrapper, .desktop-preview .content-wrapper").addClass("is-win");
	} else if (navigator.appVersion.indexOf("Mac")!= -1) {
    $(".browser-preview .content-wrapper, .desktop-preview .content-wrapper").addClass("is-mac");
	} else {
    $(".browser-preview .content-wrapper, .desktop-preview .content-wrapper").addClass("is-win");
	}

	$(".top").click(function (e) {

		$("html, body").animate({ scrollTop: 0 }, "slow");
		e.preventDefault();

	});
