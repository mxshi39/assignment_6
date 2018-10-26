$(document).ready( function() {
	var i;
	var productArry = JSON.parse(localStorage.getItem("addedRolls"));
	var len = productArry.length;
	var totalPrice = 0;
	for (i = 0; i<len; i++) {
		var product = productArry[i];
		var img = product.img;
		var pname = product.name;
		var pglaze = product.glaze;
		var pprice = product.price;
		var pquant = product.quant;
		var pid = product.id;
		//format quant
		pquant = 'x'.concat(pquant);
		//format price//
		pprice = '$'.concat(pprice);
		//insert all info to table
		const template = '<tr class="table-roll"><td class="name"><img class="row-image" src="'+ img + '" />'+pname+'</td><td>'+pglaze+'</td><td class = "quant">'+pquant+'<br/><p localid="'+pid+'" class="delete-item">Delete</p></td><td>'+pprice+'</td></tr>';
		console.log(template);
		$(".summary-details tr:last").after(template);
		// add prices together
		totalPrice += product.price;
		console.log(totalPrice);
	}
	var total = "Total: $".concat(totalPrice);
	$("#total").text(total);
})


//remove item
$(document).on("click", ".delete-item", function() {
    $(this).parent().parent().remove();
    var pid = $(this).attr('localid');
    console.log(pid);
    var productArry = JSON.parse(localStorage.getItem("addedRolls"));
    //delete object from array
    for (i=0; i<productArry.length;i++){
    	var id = productArry[i].id;
    	if (id == pid) {
    		productArry.splice(i,1);
    	}
    }
    console.log(productArry);
    //update local storage
    localStorage.setItem("addedRolls",JSON.stringify(productArry));

 	// update total price//
 	var len = productArry.length;
	var totalPrice = 0;
	var i = 0;
	for (i = 0; i<len; i++) {
		var product = productArry[i];
		var pprice = product.price;
		totalPrice += pprice;
		console.log(totalPrice);
	}
	var total = "Total: $".concat(totalPrice);
	$("#total").text(total);
});
