/*============================================================
* Template Name    : Vini - Tour & Travels One Page Html Template
* Author           : Vishal Lad
* Version          : 1.0
* Created          : 21/May/2020;
* File Description : Main JS file of the template
===========================================================*/

/*====================== TABLE 
	1.PRELOADER
	2.STICKY ADD
	3.SCROLL DOWN SPEED
	4.MENU-BAR TOGGLE
	5.SCROLL TOP SHOW
	6.SCROLL TOP CLICK EVENT
	7.BANNER CAROUSEL
	8.TESTIMONIAL CAROUSEL
 ========================*/

// Отправка данных на сервер
function send(event, php) {
	console.log("Отправка запроса");
	event.preventDefault ? event.preventDefault() : event.returnValue = false;
	var req = new XMLHttpRequest();
	req.open('POST', php, true);
	req.onload = function () {
		if (req.status >= 200 && req.status < 400) {
			json = JSON.parse(this.response); // Ебанный internet explorer 11
			console.log(json);

			// ЗДЕСЬ УКАЗЫВАЕМ ДЕЙСТВИЯ В СЛУЧАЕ УСПЕХА ИЛИ НЕУДАЧИ
			if (json.result == "success") {
				// Если сообщение отправлено


				$.fancybox.open('<div class="message"><h2>Спасибо за заявку!</h2><p>Мы свяжемся с вами в ближайшее время</p></div>');

				function closePopup() {
					$.fancybox.close()
					$.fancybox.close()
				}

				setTimeout(closePopup, 3000);



			} else {
				// Если произошла ошибка
				alert("Ошибка. Сообщение не отправлено");
			}
			// Если не удалось связаться с php файлом
		} else { alert("Ошибка сервера. Номер: " + req.status); }
	};

	// Если не удалось отправить запрос. Стоит блок на хостинге
	req.onerror = function () { alert("Ошибка отправки запроса"); };
	req.send(new FormData(event.target));
}



(function ($) {
	"use strict"; // Start of use strict

	// PRELOADER
	$(window).on('load', function () {
		$('#preloader').delay(3000).fadeOut('slow');
	});

	// STICKY ADD
	window.onscroll = function () { myFunction() };
	var header = document.getElementById("navigation");
	var sticky = header.offsetTop;
	function myFunction() {
		if (window.pageYOffset > sticky) {
			header.classList.add("sticky");
		} else {
			header.classList.remove("sticky");
		}
	}

	// A SCROLL DOWN SPEED
	$('a.page-scroll , .icon_animate a').click(function (e) {
		var targetHref = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(targetHref).offset().top - 50
		}, 1250, 'easeInOutExpo');
		e.preventDefault();
	});

	// MENU-BAR TOGGLE
	$('.bar-toggler').on('click', function () {
		$('.menu-bar').toggleClass('active');
		$('.bar-toggler').toggleClass('change');
	});

	// SCROLL TOP SHOW
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});

	//SCROLL TOP CLICK EVENT
	$('.scrollToTop').click(function () {
		$('html, body').animate({
			scrollTop: 0
		}, 800);
		return false;
	});

	//  HOME CAROUSEL
	$('.home-inner').owlCarousel({
		loop: true,
		margin: -1,
		autoplay: true,
		dots: true,
		autoplayTimeout: 7000,
		smartSpeed: 1200,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 1
			},
			1170: {
				items: 1
			}
		}
	});

	//  TESTIMONIAL CAROUSEL
	$('.inner-testimonial').owlCarousel({
		loop: true,
		margin: 0,
		autoplay: true,
		dots: false,
		nav: true,
		autoplayTimeout: 15000,
		smartSpeed: 1500,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 1
			},
			1170: {
				items: 1
			}
		}
	});

})(jQuery);