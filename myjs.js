// JavaScript Document

		$(".s1").click(function()
					   {
			$(".s2").slideDown(1000);
			$(".s4").hide();
			$(".s6").hide();
			$(".s8").hide();
		});
		$(".s3").click(function()
					   {
			$(".s4").slideDown(1000);
			$(".s2").hide();
			$(".s6").hide();
			$(".s8").hide();
		});
		$(".s5").click(function()
					   {
			$(".s6").slideDown(1000);
			$(".s4").hide();
			$(".s2").hide();
			$(".s8").hide();
		});
		$(".s7").click(function()
					   {
			$(".s8").slideDown(1000);
			$(".s4").hide();
			$(".s6").hide();
			$(".s2").hide();
		});
	