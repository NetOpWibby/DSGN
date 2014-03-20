
	var $vW = $(window).width();

	$(function () {
		$(".gallery a").each(function () {

			var title = $(this).data("title");

			$(this).one("click", function () {
				$(".fluidbox-ghost", this).append("<span>" + title + "</span>");
			});

		});
	});

	$(window).scroll(function () {

		var value = $(this).stop().scrollTop();

		$(function() {
			setTimeout(function() {

				if (value > 1 && $vW >= "801") {

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

				if (value < 1 && $vW >= "801") {

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

				/*
				if (value > 120 && $vW > "360") {

					$(".nav-wrapper nav a").css("color", "#191919");
					$(".nav-wrapper nav ul:nth-child(2)").css("opacity", "1");

				}

				if (value < 120 && $vW > "360") {

					$(".nav-wrapper nav a").css("color", "inherit");
					$(".nav-wrapper nav ul:nth-child(2)").css("opacity", "0");

				}

				if (value > 360 && $vW > "360") {

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

					$(".nav-wrapper nav").css("top", "8rem");

				}

				if (value < 360 && $vW > "360") {

					$("#no-scroll").css({
						"opacity": "1",
						"top": "2rem"
					});

					$("#work-availibility").css({
						"opacity": "1",
						"top": "7.4rem"
					});

					$("#scroll").css({
						"opacity": "0",
						"top": "-2rem"
					});

					$(".nav-wrapper nav").css({
						"font-size": "inherit",
						"top": "23.5rem"
					});

				}
				*/

				if (value > 1 && $vW < "801") {

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
						"left": "14rem"
					});

					$(".nav-wrapper li").css({
						"display": "inline-block",
						"margin": "0 2rem 0 0"
					});

					$(".nav-wrapper li:last-child").css("margin", "0");

				}

				/*
				if (value < 1 && $vW < "801") {

					$(".nav-wrapper .wrapper").css({
						"width": "100%",
						"height": "auto",
						"top": "0",
						"left": "0",
						"background-color": "transparent",
						"border-bottom": "none",
						"position": "inherit",
						"z-index": "inherit"
					});

					$(".nav-wrapper nav").css({
						"top": "23.5rem",
						"left": "2rem"
					});

					$(".nav-wrapper li").css({
						"display": "block",
						"margin": "0"
					});

				}
				*/

				/*
				if (value > 1 && $vW < "601") {

					$(".nav-wrapper nav").css("left", "10rem");
					$(".nav-wrapper li").css("margin", "0 0.5rem 0 0");
					$(".nav-wrapper li:last-child").css("margin", "0");

				}
				*/

				if (value > 1 && $vW < "321") {

					/*
					$(".nav-wrapper .wrapper").css("height", "3.5rem");

					$("#scroll").css({
						"top": "1rem",
						"left": "1rem",
						"color": "transparent",
						"font-size": "0",
						"line-height": "0"
					});

					$("#scroll .cyan, #scroll .magenta, #scroll .yellow, #scroll .key").css({
						"width": "6px",
						"height": "24px",
						"display": "inline-block"
					});

					$("#scroll .cyan").css("background-color", "#07d0eb");
					$("#scroll .magenta").css("background-color", "#eb07a8");
					$("#scroll .yellow").css("background-color", "#ebe807");
					$("#scroll .key").css("background-color", "#191919");

					$(".nav-wrapper nav").css({
						"top": "0.85rem",
						"left": "3.5rem",
						"font-size": "0.55em"
					});
					*/

					$("#previous-content, #next-content").css("display", "none");

					$("footer").waypoint(function() {

						$(".nav-wrapper nav ul:nth-child(2)").css("opacity", "1");

						$("#previous-content, #next-content").css({
							"bottom": "8.5rem",
							"display": "block"
						});

					}, { offset: 105 });

				}

			}, 10);
		});

	});

	$(document).ready(function() {
		if ($vW < "321") {
			setTimeout(function() {
				window.scrollTo(0, 1);
			}, 0);
		}
	});

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
				// "color": "#ebebeb",
				"font-size": "inherit"
			});

			$(".nav-wrapper li").css({
				"display": "inline-block",
				"margin": "0 2rem 0 0"
			});

			$(".nav-wrapper li:last-child").css("margin", "0");

		}

		if ($vW < "601") {

			/*
			$(".nav-wrapper nav").css({
				"font-size": "inherit",
				"left": "10rem"
			});

			$(".nav-wrapper li").css("margin", "0 0.5rem 0 0");
			$(".nav-wrapper li:last-child").css("margin", "0");
			*/

		}

		if ($vW < "321") {

			/*
			$(".nav-wrapper .wrapper").css("height", "3.5rem");

			$("#scroll").css({
				"top": "1rem",
				"left": "1rem",
				"color": "transparent",
				"font-size": "0",
				"line-height": "0"
			});

			$("#scroll .cyan, #scroll .magenta, #scroll .yellow, #scroll .key").css({
				"width": "6px",
				"height": "24px",
				"display": "inline-block"
			});

			$("#scroll .cyan").css("background-color", "#07d0eb");
			$("#scroll .magenta").css("background-color", "#eb07a8");
			$("#scroll .yellow").css("background-color", "#ebe807");
			$("#scroll .key").css("background-color", "#191919");

			$(".nav-wrapper nav").css({
				"top": "0.85rem",
				"left": "3.5rem",
				"font-size": "0.55em"
			});
			*/

			$("#previous-content, #next-content").css("display", "none");

			$("footer").waypoint(function() {
				$("#previous-content, #next-content").css("display", "block");
			}, { offset: 285 });

		}

	}

	browser_resize();
	$(window).resize(browser_resize);

	if (navigator.appVersion.indexOf("Win")!=-1) {
		$(".browser-preview").css("background", "url('/images/chrome-windows.jpg') no-repeat");
		$(".desktop-preview").css("background", "url('/images/taskbar-windows.jpg') no-repeat");
	} else if (navigator.appVersion.indexOf("Mac")!=-1) {
		$(".browser-preview").css("background", "url('/images/chrome-mac.png') no-repeat");
		$(".desktop-preview").css("background", "url('/images/taskbar-mac.png') no-repeat");
	} else {
		$(".browser-preview").css("background", "url('/images/chrome-windows.jpg') no-repeat");
		$(".desktop-preview").css("background", "url('/images/taskbar-windows.jpg') no-repeat");
	}

	$(".top").click(function (e) {

		$("html, body").animate({ scrollTop: 0 }, "slow");
		e.preventDefault();

	});
