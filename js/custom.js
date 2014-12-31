$(function() {
	window.scrollReveal = new scrollReveal();
	"use strict";
	
	// PreLoader
	$(window).load(function() {
		$(".loader").fadeOut(400);
	});

	// Backstretchs
	$("#header").backstretch("images/4.jpg");
	$("#services").backstretch("images/3.jpg");

	//Form Submission
	var googleForm = $(window).jqGoogleForms({"formKey": "1ixsJL-UVuQO8KHvu_K-uvQ-DgX9Etf9SplezV1dy8yA"});
	$("#subBtn").click(function(){
		var name = $("#nameTxt").val(),
		email = $("#emailTxt").val();
		if(name && email){
			googleForm.sendFormData({
			"entry.1639379427": name,
			"entry.507515778": email
		    });
		    alert("Thank you for your interest in Incentiviral! We'll keep you posted on any updates.");
		} else {
			alert("Please fill out the details before clicking 'Submit'.");
		}
	});

	
	
	// Countdown
	$('.countdown').downCount({
		date: '12/12/2014 12:00:00',
		offset: +10
	});			
    
});