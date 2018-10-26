var addedItem = []; //for temporarily store item if local storage is null//

// generate ramdom number//
function getRandomIndex() {
  return Math.random();
}

// get all the specific info//
$(document).on("click",".AddToCart", function() {
	var img = $(".roll-image img").attr("src");
	var rollName = $("#roll-name").text();
	var price = $(".price").text();
	var quant = $("#quant-drop :selected").text();
	var glaze = $("#glaz-drop :selected").text();
	//random id//
	var num = getRandomIndex();
	price = price.slice(1,4)*quant;
	console.log(img);
	newItem = new Product(img,rollName,price,quant,glaze,num);
	//get all the items that were already saved//
	var savedItem = JSON.parse(localStorage.getItem("addedRolls")); 
	//depending on whether sth has been saved locally or not, which array will be saved will be different//
	if (savedItem == null) {
		//add the newly created item to addedItem//
		addedItem.push(newItem); 
		//store first item//
		localStorage.setItem("addedRolls",JSON.stringify(addedItem)); 
	}
	else {
		savedItem.push(newItem);
		//store everything again//
		localStorage.setItem("addedRolls",JSON.stringify(savedItem)); 
	}
});

//object Product stores all the info got from page after click on add to cart//
function Product (img,name,price,quant,glaze,num) {
	this.img = img
	this.name = name;
	this.price = price;
	this.quant = quant;
	this.glaze = glaze;
	this.id = num;
};