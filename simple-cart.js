const shoppingCart = [
  { name: "shoe", price: 1200, quantity: 2 },
  { name: "shirt", price: 2200, quantity: 5 },
  { name: "pant", price: 3700, quantity: 4 },
  { name: "shoe", price: 600, quantity: 3 },
];

function totalCost(products) {
  let sum = 0;
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const productPrice = product.price * product.quantity;
    sum += productPrice;
  }
  return sum;
}
console.log("Total expense today:", totalCost(shoppingCart));
