var dialogFirst = null;

$("document").ready(function(){

	$(".dialog").dialog({
		modal: true,
		appendTo:"body",
		autoOpen:false,
		resizable:false
	});

	dialogFirst = $(".dialogFirst").dialog({
		title:"Cadastro"
	});

	dialogFirst.find(".div").hide();
	dialogFirst.find(".dialogFirst1").show();
	dialogFirst.dialog("open");
});