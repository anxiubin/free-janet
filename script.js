$(document).ready(function () {
	$("#side_bar").load("./sideBar.html")
	$("#side_button").load("./sideButton.html")

	// select options
	$(".default_option.period").click(function () {
		$(this).parent().toggleClass("active")
	})
	$(".select_ul.period li").click(function () {
		var currentele = $(this).html()
		$(".default_option.period li").html(currentele)
		$(this).parents(".select_wrap.period").removeClass("active")
	})

	$(".default_option.device").click(function () {
		$(this).parent().toggleClass("active")
	})
	$(".select_ul.device li").click(function () {
		var currentele = $(this).html()
		$(".default_option.device li").html(currentele)
		$(this).parents(".select_wrap.device").removeClass("active")
	})

	$(".default_option.price").click(function () {
		$(this).parent().toggleClass("active")
	})
	$(".select_ul.price li").click(function () {
		var currentele = $(this).html()
		$(".default_option.price li").html(currentele)
		$(this).parents(".select_wrap.price").removeClass("active")
	})

	$(".default_option.cart_options").click(function () {
		$(this).parent().toggleClass("active")
	})
	$(".select_ul.cart_options li").click(function () {
		var currentele = $(this).html()
		$(".default_option.cart_options li").html(currentele)
		$(this).parents(".select_wrap.cart_options").removeClass("active")
	})

	// datepicker
	var DatePicker = tui.DatePicker
	var container = document.getElementById("tui-date-picker-container")
	var target = document.getElementById("tui-date-picker-target")

	var instance = new DatePicker(container, {
		input: {
			element: target,
		},
	})

	instance.getDate()

	// menu css toggle
	$(".menu_container ul li").click(function () {
		$(".menu_container ul li").removeClass("active_menu")
		$(this).addClass("active_menu")
	})

	$(".sub_menu_container ul li").click(function () {
		$(".sub_menu_container ul li").removeClass("active_sub_menu")
		$(this).addClass("active_sub_menu")
	})
})

// scroll event
$(document).on("scroll", function () {
	if (
		window.pageYOffset >= 800 &&
		!Boolean($("#side_bar").hasClass("fixed_side_bar"))
	) {
		$("#side_bar").addClass("fixed_side_bar")
	} else if (
		window.pageYOffset < 800 &&
		Boolean($("#side_bar").hasClass("fixed_side_bar"))
	) {
		$("#side_bar").removeClass("fixed_side_bar")
	}

	if (
		window.pageYOffset >= 800 &&
		!Boolean($("#side_button").hasClass("fixed_side_button"))
	) {
		$("#side_button").addClass("fixed_side_button")
	} else if (
		window.pageYOffset < 800 &&
		Boolean($("#side_button").hasClass("fixed_side_button"))
	) {
		$("#side_button").removeClass("fixed_side_button")
	}
})
