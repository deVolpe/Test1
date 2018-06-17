var budget, nameOfShop;
budget= +prompt("Ваш бюджет:","0");
nameOfShop = prompt("Название магазина:","Магазин");
var mainList = {
myBudget: budget,
shop: nameOfShop,
shopGoods: [],
employers: 12,
isOpen: false
};

mainList.shopGoods[0] = prompt("Какой вид товара будем продавать?", "hods");
mainList.shopGoods[1] = prompt("Какой вид товара будем продавать?", "sunglasses");
mainList.shopGoods[2] = prompt("Какой вид товара будем продавать?", "sweets");
document.write(mainList.myBudget / 30);


