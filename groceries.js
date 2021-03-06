var products = [
	{
		name: "brocoli",
		vegetarian: true,
		glutenFree: true,
    organic: true,
		price: 1.99,
		department: "produce",
		imglink:"https://avocitrus.eu/wp-content/uploads/2017/08/brocoli-558x600.jpg"
	},
	{
		name: "bread",
		vegetarian: true,
		glutenFree: false,
    organic: false,
		price: 2.35,
		department: "bakery",
		imglink:"https://bakingamoment.com/wp-content/uploads/2020/01/IMG_7173-white-bread-2.jpg"
	},
  {
  name: "sweet onion",
  vegetarian: true,
  glutenFree: true,
  organic: false,
  price: 3.10,
	department: "produce",
	imglink:"https://static1.squarespace.com/static/5494756ae4b0edcae6dddb54/5499f279e4b081ecf7754aec/5d0bea2ec5ec3d0001d06bb6/1562151987371/815kv1Ns16L._SL1500_.jpg?format=1500w"
  },
  {
  name: "naan bread",
  vegetarian: true,
  glutenFree: false,
  organic: true,
  price: 3.50,
	department: "bakery",
	imglink:"https://www.budgetbytes.com/wp-content/uploads/2010/09/Homemade-Naan-stack-1.jpg"
  },
  {
  name: "christmas melon",
  vegetarian: true,
  glutenFree: true,
  organic: false,
  price: 4.21,
	department: "produce",
	imglink:"https://www.gardeningknowhow.com/wp-content/uploads/2018/07/christmas-melon.jpg"
  },
  {
  name: "cupcakes",
  vegetarian: true,
  glutenFree: false,
  organic: false,
  price: 4.75,
	department: "bakery",
	imglink:"https://truffle-assets.imgix.net/pxqrocxwsjcc_4mlylloieeiqmyecgk0qq8_rose%CC%81-champagne-cupcakes-landscape-no-graphic.jpg"
  },
  {
  name: "asparagus",
  vegetarian: true,
  glutenFree: true,
  organic: true,
  price: 8.00,
	department: "produce",
	imglink:"https://www.simplyrecipes.com/wp-content/uploads/2015/04/roasted-asparagus-horiz-a-1600.jpg"
  },
	{
		name: "salmon",
		vegetarian: false,
		glutenFree: true,
    organic: true,
		price: 10.50,
		department: "meat",
		imglink:"https://www.skinnytaste.com/wp-content/uploads/2018/12/Baked-Salmon-1.jpg"
	},
  {
  name: "tilapia",
  vegetarian: false,
  glutenFree: true,
  organic: false,
  price: 11.00,
	department: "meat",
	imglink:"https://i.cbc.ca/1.4456472.1513708759!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/tilapia-image.jpg"
  },
  {
  name: "flank steak",
  vegetarian: false,
  glutenFree: true,
  organic: false,
  price: 12.00,
	department: "meat",
	imglink:"https://www.simplyrecipes.com/wp-content/uploads/2015/06/grilled-marinated-flank-steak-horiz-a-1200.jpg"
  },

];



// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

/*function restrictListProducts(prods, restriction) {
	let product_names = [];
  let product_prices = [];
  //console.log(prods[i].price)
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
			product_names.push(prods[i].name);
		}
    else if ((restriction == "Organic") && (prods[i].organic == true)){
      product_names.push(prods[i].name);
    }
		else if (restriction == "None"){
			product_names.push(prods[i].name);
		}
    product_prices.push(prods[i].price);
	}
  console.log(product_prices);
	return product_names;
}*/

function restrictListProducts(department) {
	let prods=products;
	let restrictions = [];
	let product_names = [];
	let product_prices = [];
	var checks = document.getElementsByClassName('checks');
	//Going through the restrictions checkbox to see what is selected.
	for (i=0; i<checks.length;i++) {
		console.log(checks[i].checked);
		if (checks[i].checked) {
			//Populating the array of restrictions
			restrictions.push(checks[i].value);
		}
	}

  //console.log(prods[i].price)
	for (let i=0; i<prods.length; i+=1) {
		if (department!=prods[i].department) {
			//Condition used to be restrictions.length==0
			//product_names.push(prods[i].name);
		}
		else if (((restrictions.includes("Vegetarian")) && (prods[i].vegetarian == true))) {
			product_names.push(prods[i]);
		}
		else if (((restrictions.includes("GlutenFree")) && (prods[i].glutenFree == true))) {
			product_names.push(prods[i]);
		}
    else if (((restrictions.includes("Organic")) && (prods[i].organic == true))) {
      product_names.push(prods[i]);
    }
		else if (restrictions.includes("None")){
			product_names.push(prods[i]);
		}
    //product_prices.push(prods[i].price);
	}
  console.log(product_prices);
	return product_names;
}

function fetchPrice(department) {
	let prods=products;
	let restrictions = [];
	let product_names = [];
	let product_prices = [];
	var checks = document.getElementsByClassName('checks');
	//Going through the restrictions checkbox to see what is selected.
	for (i=0; i<checks.length;i++) {
		console.log(checks[i].checked);
		if (checks[i].checked) {
			//Populating the array of restrictions
			restrictions.push(checks[i].value);
		}
	}

  //console.log(prods[i].price)
	for (let i=0; i<products.length; i+=1) {
		if (department!=prods[i].department) {

			//product_prices.push(prods[i].price);
		}
		else if (((restrictions.includes("Vegetarian")) && (prods[i].vegetarian == true))) {
			product_prices.push(prods[i]);
		}
		else if (((restrictions.includes("GlutenFree")) && (prods[i].glutenFree == true))) {
			product_prices.push(prods[i]);
		}
    else if (((restrictions.includes("Organic")) && (prods[i].organic == true))) {
      product_prices.push(prods[i]);
    }
		else if (restrictions.includes("None")){
			product_names.push(prods[i]);
		}
    product_prices.push(prods[i]);
	}
  console.log(product_prices);
	return product_prices;
}



/*function fetchPrice(prods, restriction) {
	let product_names = [];
  let product_prices = [];
  console.log(restriction)
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
			//product_names.push(prods[i].name);
      product_prices.push(prods[i].price);
		}
		else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
			//product_names.push(prods[i].name);
      product_prices.push(prods[i].price);
		}
    else if ((restriction == "Organic") && (prods[i].organic == true)){
      //product_names.push(prods[i].name);
      product_prices.push(prods[i].price);
    }
		else if (restriction == "None"){
			//product_names.push(prods[i].name);
      product_prices.push(prods[i].price);
		}
	}
  console.log(product_prices);
	return product_prices;
}*/

/*function fetchPrice(product) {
  let product_prices = [];
  console.log("I have made it into fetchPrice");
  console.log(product[1].name);
  for (let i=0; i<product.length; i+=1) {
    let prodName = product[i];
    product_prices.push(i);
  }
  console.log(product_prices);
  return product_prices;
}*/

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice.toPrecision(4);
}
