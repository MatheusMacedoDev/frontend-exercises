function Product(name, price) {
    this.name = name;
    this.price = price;
}
  
function Food(name, price) {
    Product.call(this, name, price);
    this.category = 'food';
}

console.log(new Food('cheese', 5).name);
console.log(Food.toString());
// Expected output: "cheese"