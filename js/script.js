$(window).on("load" , function(){
	$(".loader .inner").fadeOut(500 , function(){
		$(".loader").fadeOut(500);
	});
})


$(document).ready(function(){

	$('#slides').superslides({
		animation: 'fade',
		play: 3000,
		pagination: false
	});


	var type = new Typed(".typed", {
		strings: ["Web Developer","Front-End Engineer"],
		typeSpeed: 70,
		loop: true,
		starDelay: 2000,
		showCursor: false
	});

	$('.owl-carousel').owlCarousel({
	    loop:true,
	    items: 4,
	    responsive:{
	        0:{
	            items:1
	        },
	        480:{
	            items:2
	        },
	        768:{
	            items:3
	        },
            938:{
	            items:4
	        }
	    }
	})

	

	var skillsTopOffset = $(".skillsSection").offset().top;
	var statsTopOffset = $(".statsSection").offset().top;
	var countUpFinished = false;
	$(window).scroll(function(){

		if(window.pageYOffset > skillsTopOffset - $(window).height() + 200){

			$('.chart').easyPieChart({
	            easing: 'easeInOut',
	            barColor: '#fff',
	            trackColor: false,
	            scaleColor: false,
	            lineWidth: 4,
	            size: 152,
	            onStep: function(from, to , percent){
	            	$(this.el).find('.percent').text(Math.round(percent));
	            }
	        });

		}

		if(!countUpFinished && window.pageYOffset > statsTopOffset - $(window).height() + 200){
			$(".counter").each(function(){
					var element = $(this);
					var endVal = parseInt(element.text());

					element.countup(endVal);
				});
			countUpFinished = true;
		}
		

	});


	$("[data-fancybox]").fancybox();

	$(".items").isotope({
		filter: '*',
		animationOptions:{
			duration: 1500,
			easing: 'linear',
			queue: false
		}
	
	});

	$("#filter a").click(function(){
		$("#filter .current").removeClass("current");
		$(this).addClass("current");

		var selector = $(this).attr("data-filter");
		$(".items").isotope({
			filter: selector,
			animationOptions:{
				duration: 1500,
				easing: 'linear',
				queue: false
			}
		
		});

		return false;

	})

	

	//選單跳轉畫面-slow
	$("#navigation li a").click(function(e){
		e.preventDefault();

		var targetElement = $(this).attr("href");
		var targetPosition = $(targetElement).offset().top;
		$("html, body").animate({ scrollTop: targetPosition - 50}, "slow");

	});

	$(".smooth-down").click(function(e){
		e.preventDefault();

		var targetElement = $(this).attr("href");
		var targetPosition = $(targetElement).offset().top;
		$("html, body").animate({ scrollTop: targetPosition - 50}, "slow");

	});


	//畫面向下滾動-選單置頂
	const nav = $("#navigation");
	const navTop = nav.offset().top;

	$(window).on("scroll" , stickyNavigation);

	function stickyNavigation(){

		var body = $("body");

		if($(window).scrollTop() >= navTop){
			body.css("padding-top" , nav.innerHeight() + "px");
			body.addClass("fixedNav");
			$("#navigation").css("backgroundColor" , "rgba(0,0,0,0.8)");
		}
		else{
			body.css("padding-top" , 0);
			body.removeClass("fixedNav");
			$("#navigation").css("backgroundColor" , "#e74c3c");
		}
	}

	$('.parallax-window').parallax({imageSrc: 'img/portfolio-bg.jpg'});
});