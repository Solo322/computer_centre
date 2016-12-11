$(document).ready(function() {

	$(".popup").magnificPopup({type:"image"});

	$(".top_text h1").animated("fadeInDown", "fadeOutUp");
	$(".top_text p").animated("fadeInUp", "fadeOutDown");
	$(".section_header").animated("fadeInDown", "fadeOutUp");
	$(".animated_left").animated("fadeInLeft", "fadeOutDown");
	$(".animated_right").animated("fadeInRight", "fadeOutDown");
	$(".animated_center").animated("flipInY", "flipOutY");

	if($(window).width() < 600)
		$(".toggle_menu").removeClass("fadeOutRight").addClass("fadeInRight");

	function adaptive()
	{
		var width = $(window).width();
		var top = $(document).scrollTop();
        if (top < 900 && width >= 600) $(".toggle_menu").removeClass("fadeInRight").addClass("fadeOutRight");
        else if(top >= 900 || width < 600) $(".toggle_menu").removeClass("fadeOutRight").addClass("fadeInRight");
	}

	$(window).resize(adaptive);
	$(window).scroll(adaptive);

	function heightDetect()
	{
		$(".main_head").css("height", $(window).height());
	};

	heightDetect();

	$(window).resize(function() { heightDetect(); })

	$(".toggle_menu").click(function() 
	{
  		$(".sandwich").toggleClass("active");
	});

	$(".toggle_menu").click(function()
	{
		if($(".top_menu").css("display") == "none")
		{
			$(".top_menu").fadeIn(600);
			$(".top_text").css("opacity", 0);
		}
		else
		{
			$(".top_menu").fadeOut(600);
			$(".top_text").css("opacity", 1);
		}
	});

	$(".top_menu").click(function()
	{
		$(".top_menu").fadeOut(600);
		$(".top_text").css("opacity", 1);
	});

	$(".top_menu ul li a").click(function()
	{
		$(".top_menu").fadeOut(600);
		$(".sandwich").toggleClass("active");
	});

	$(".top_menu ul a, .top_head ul a").mPageScroll2id();

	var cells = $(".c_service .col-md-6");

	for(i = 0; i < cells.size() - 1; i+=2)
		if(parseInt($(cells[i]).css("height")) < parseInt($(cells[i+1]).css("height"))) 
			$(cells[i]).css("height", parseInt($(cells[i+1]).css("height")) + 1);

	$("input, select, textarea").not("[type=submit]").jqBootstrapValidation();
});

$(window).load(function() { 
	$(".loader_inner").fadeOut(); 
	$(".loader").delay(400).fadeOut("slow"); 
});