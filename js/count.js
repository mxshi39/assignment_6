$(document).ready( function() {
	var productArry = JSON.parse(localStorage.getItem("addedRolls"));
	var len = productArry.length;
	$("#number").text(len);
	console.log(len);
});