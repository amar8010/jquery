// JavaScript Document
$(document).ready(function(){
  $(".blackbox").click(function(){
	$(".blackbox").fadeOut();  
    $("#pp1").fadeOut(400);
	
	$("#pp2").fadeOut(400);
	
	$("#pp3").fadeOut(400);
	
	$("#pp4").fadeOut(400);
	
  });
});

//for Images
$(document).ready(function(){
	$(".blackbox").hide();
	$("#pp1").hide();
	
	$("#pp2").hide();
	
	$("#pp3").hide();
	
	$("#pp4").hide();
	
});


$(document).ready(function(){
  $("#tt1").click(function(){
	  $(".blackbox").fadeIn(400);
    $("#pp1").fadeIn(400);
	
	$("#pp2").fadeOut(400);
	
	$("#pp3").fadeOut(400);
	
	$("#pp4").fadeOut(400);
	
  });
});
$(document).ready(function(){
  $("#tt2").click(function(){
	   $(".blackbox").fadeIn(400);
    $("#pp1").fadeOut(400);
	
	$("#pp2").fadeIn(400);
	
	$("#pp3").fadeOut(400);
	
	$("#pp4").fadeOut(400);
	
  });
});
$(document).ready(function(){
  $("#tt3").click(function(){
	   $(".blackbox").fadeIn(400);
    $("#pp1").fadeOut(400);
	
	$("#pp2").fadeOut(400);
	
	$("#pp3").fadeIn(400);
	
	$("#pp4").fadeOut(400);
	
  });
});
$(document).ready(function(){
  $("#tt4").click(function(){
	   $(".blackbox").fadeIn(400);
    $("#pp1").fadeOut(400);
	
	$("#pp2").fadeOut(400);
	
	$("#pp3").fadeOut(400);
	
	$("#pp4").fadeIn(400);
	
  });
});