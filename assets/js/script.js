$(function () {//JS開頭

	var WINDOW = $(window).width();//視窗寬度
	var WINDOWH = $(window).height();//視窗高度

	//字級大小
	$(".js-top-function button").click(function () {
		if ($(this).hasClass("js-font-sm")) {
			$("html").addClass("sm");
		} else if ($(this).hasClass("js-font-md")) {
			$("html").removeClass("sm").removeClass("lg");
		} else if ($(this).hasClass("js-font-lg")) {
			$("html").addClass("lg");
		}
		$(this).addClass("active");
		return false;
	})

	//點擊切換active樣式
	$(".js-toggle-btn").click(function (){
		$(this).toggleClass("active");
	})
	//驗證碼切換
	$(".js-otp").click(function () {
		$(this).addClass("d-none");
		$(".js-verify").removeClass("d-none");
		$(".js-verify-con").addClass("d-none");
		$(".js-otp-con").removeClass("d-none");
	})
	$(".js-verify").click(function () {
		$(this).addClass("d-none");
		$(".js-otp").removeClass("d-none");
		$(".js-otp-con").addClass("d-none");
		$(".js-verify-con").removeClass("d-none");
	})
	//banner滑鼠滑動
	$('.carousel-inner').on('mousedown', function (e) {
		var startX = e.pageX || e.touches[0].pageX;
		$(this).on('mousemove touchmove', function (e) {
			var endX = e.pageX || e.touches[0].pageX;
			if (startX - endX > 50) {
				$('.carousel').carousel('next');
				$(this).off('mousemove touchmove');
			} else if (endX - startX > 50) {
				$('.carousel').carousel('prev');
				$(this).off('mousemove touchmove');
			}
		});
	}).on('mouseup touchend', function () {
		$(this).off('mousemove touchmove');
	});

	
	$(".js-dropdown-menu").find("a").click(function () {
		$(this).toggleClass("active");
		$(".js-dropdown-menu").find("a").not(this).removeClass("active");
	})
	
})//JS尾端	
