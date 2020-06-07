var products = [
	{
		name: "brocoli",
		vegetarian: true,
		glutenFree: true,
    organic: true,
		price: 1.99
	},
	{
		name: "bread",
		vegetarian: true,
		glutenFree: false,
    organic: false,
		price: 2.35
	},
  {
  name: "sweet onion",
  vegetarian: true,
  glutenFree: true,
  organic: false,
  price: 3.10
  },
  {
  name: "naan bread",
  vegetarian: true,
  glutenFree: false,
  organic: false,
  price: 3.50
  },
  {
  name: "christmas melon",
  vegetarian: true,
  glutenFree: true,
  organic: false,
  price: 4.21
  },
  {
  name: "cupcakes",
  vegetarian: true,
  glutenFree: false,
  organic: false,
  price: 4.75
  },
  {
  name: "asparagus",
  vegetarian: true,
  glutenFree: true,
  organic: true,
  price: 8.00
  },
	{
		name: "salmon",
		vegetarian: false,
		glutenFree: true,
    organic: true,
		price: 10.50
	},
  {
  name: "tilapia",
  vegetarian: false,
  glutenFree: true,
  organic: false,
  price: 11.00
  },
  {
  name: "flank steak",
  vegetarian: false,
  glutenFree: true,
  organic: false,
  price: 12.00
  },

];



// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
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
}

function fetchPrice(prods, restriction) {
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
}

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
