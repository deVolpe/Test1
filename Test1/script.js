var budget, nameOfShop;
budget= +prompt("Ваш бюджет:","0");
nameOfShop = prompt("Название магазина:","Магазин1");
var mainList = {
myBudget: budget,
shop: nameOfShop,
shopGoods: [],
employers: 12,
isOpen: false
};

mainList.shopGoods[0] = prompt("Какой тип товара будем продавать?", "hods");
mainList.shopGoods[1] = prompt("Какой тип товара будем продавать?", "sunglasses");
mainList.shopGoods[2] = prompt("Какой тип товара будем продавать?", "sweets");
document.write(mainList.myBudget / 30);


