$(document).ready(function(){
	
	$("#botao01").click(function(){
		$(".botao").css("color","red");
	})
	
	$(".botao").click(function(){
		$("#content").html("<p>Novo Item</p>");
	})
	
	/*$("#botao01").click(function(){
		$("#content").fadeToggle();
	});*/
	$("button").last().click(function(){
		$("#content").fadeToggle();
	})
})
