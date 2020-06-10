// This function is called when any of the tab is clicked
// It is adapted from https://www.w3schools.com/howto/howto_js_tabs.asp

department="produce";

function onLoad() {
	console.log(50);
	openInfo(event, 'Products');
	restrictListProducts();
	fetchPrice();
	//document.getElementById('productsBtn').click();
}

function openInfo(evt, tabName) {

	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.className += " active";

}

function foodTypeSelection(option) {

 department=option;
 alert(department);
	populateListProductChoices("preferenceSelectionCheckbox", 'displayProduct')

}

// generate a checkbox list from a list of products
// it makes each product name as the label for the checkbos

function populateListProductChoices(slct1, slct2, slct3) {
		//console.log("21");
		//console.log(slct1);
		//console.log("hey buddy");
		//console.log(slct3);
		var checks = document.getElementsByClassName('checks');
		//alert(checks.length);
		console.log("testing here dw");
		for (i=0; i<checks.length;i++) {
			console.log(checks[i].checked);
		}

		//console.log(document.getElementById("vegetarianCheckboxs").value);
		//var checkedValue = document.querySelector('.checkbox:checked').value;
    var s1 = document.getElementById(slct1);
    var s2 = document.getElementById(slct2);
		console.log(s1.value);
		console.log(s2.value);
	// s2 represents the <div> in the Products tab, which shows the product list, so we first set it empty
    s2.innerHTML = "";

	// obtain a reduced list of products based on restrictions
	console.log(s1.value);
	console.log(checks[0].value);
    //let optionArray = restrictListProducts(products, s1.value);
    //var priceArray = fetchPrice(products, s1.value);
			let optionArray = restrictListProducts(department);
    	var priceArray = fetchPrice(department);
			//let optionArray = restrictListProducts();
    console.log(priceArray);

	// for each item in the array, create a checkbox element, each containing information such as:
	// <input type="checkbox" name="product" value="Bread">
	// <label for="Bread">Bread/label><br>


	for (i = 0; i < optionArray.length; i++) {

		var productName = optionArray[i].toString();
    var productPrice = priceArray[i];
    console.log(optionArray[1])
		var toPrint = productName+"   $"+productPrice;
		// create the checkbox and add in HTML DOM
		var checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.name = "product";
		checkbox.value = productName;
		s2.appendChild(checkbox);

		// create a label for the checkbox, and also add in HTML DOM
		var label = document.createElement('label')
		label.htmlFor = productName;
		label.appendChild(document.createTextNode(toPrint));
		s2.appendChild(label);

		// create a breakline node and add in HTML DOM
		s2.appendChild(document.createElement("br"));
	}
}

// This function is called when the "Add selected items to cart" button in clicked
// The purpose is to build the HTML to be displayed (a Paragraph)
// We build a paragraph to contain the list of selected items, and the total price

function selectedItems(){

	var ele = document.getElementsByName("product");
	var chosenProducts = [];

	var c = document.getElementById('displayCart');
	c.innerHTML = "";

	// build list of selected item
	var para = document.createElement("P");
	para.innerHTML = "You selected : ";
	para.appendChild(document.createElement("br"));
	for (i = 0; i < ele.length; i++) {
		if (ele[i].checked) {
			para.appendChild(document.createTextNode(ele[i].value));
			para.appendChild(document.createElement("br"));
			chosenProducts.push(ele[i].value);
		}
	}

	// add paragraph and total price
	c.appendChild(para);
	c.appendChild(document.createTextNode("Your total Price is $" + getTotalPrice(chosenProducts)));

}
