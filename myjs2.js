// JavaScript Document
$(document).ready(function()
				  {
	

		$(".s1").hover(function()
					   {
			$(".s2").slideDown(1000);
			$(".s4").hide();
			$(".s6").hide();
			$(".s8").hide();
		});
		$(".s3").hover(function()
					   {
			$(".s4").slideDown(1000);
			$(".s2").hide();
			$(".s6").hide();
			$(".s8").hide();
		});
		$(".s5").hover(function()
					   {
			$(".s6").slideDown(1000);
			$(".s4").hide();
			$(".s2").hide();
			$(".s8").hide();
		});
		$(".s7").hover(function()
					   {
			$(".s8").slideDown(1000);
			$(".s4").hide();
			$(".s6").hide();
			$(".s2").hide();
		});
	});