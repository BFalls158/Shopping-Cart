var shoppingCart = [
{
	name: 'Cheese',
	price: 1.50,
	isTaxable: false
},
{
	name: 'Milk',
	price: 2.00,
	isTaxable: false
},
{
	name: 'Bread',
	price: 0.99,
	isTaxable: false
},
{
	name: 'Turkey',
	price: 2.99,
	isTaxable: false
},
{
	name: 'Hamburger',
	price: 5.00,
	isTaxable: false
},
{
	name: 'Chicken',
	price: 3.29,
	isTaxable: false
},
{
	name: 'Ham',
	price: 14.00,
	isTaxable: false
},
{
	name: 'Ranch',
	price: 2.49,
	isTaxable: false
},
{
	name: 'Pepsi',
	price: 4.00,
	isTaxable: false
},
{
	name: 'Cookies',
	price: 2.99,
	isTaxable: false
},
{
	name: 'Cottage Cheese',
	price: 4.09,
	isTaxable: false
},
{
	name: 'Apples',
	price: 1.72,
	isTaxable: false
},
{
	name: 'Greeting Card',
	price: 4.99,
	isTaxable: true
},
{
	name: 'VCR tapes',
	price: .05,	
	isTaxable: true
},
{
	name: 'Light Bulbs',
	price: 8.00,
	isTaxable: true
},
{
	name: 'Antiacds',
	price: 3.65,
	isTaxable: true
},
{
	name: 'Toilet Paper',
	price: 3.50,
	isTaxable: true
}
];

var total = 0;
document.write("<h1>Shopping Cart</h1>");
for (var i = 0; i < shoppingCart.length; i++) {
	document.write(shoppingCart[i].name + ": $" + shoppingCart[i].price + "<br>");
	console.log(shoppingCart[i].name + ": $" + shoppingCart[i].price);
	if (shoppingCart[i].isTaxable) {
		total += shoppingCart[i].price * 1.06;
	} else {
		total += shoppingCart[i].price;
	}
};

function money_round(tot) {
	return Math.ceil(tot * 100) / 100;
}

document.write("Total with tax: $"+money_round(total));
console.log("Total with tax: $"+money_round(total));


// // Make an array

// console.log(Math.min(-4, 2));

// function makeArray(num1, num2) {
// 	var min = Math.min(num1, num2);
// 	var max = Math.max(num1, num2);
// 	var arr = [];
// 	for (var i = min; i <= max; i++) {
// 		arr.push(i);
// 	}
// 	return arr;
// }

// console.log(makeArray(-4, 2));