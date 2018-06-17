var budget, nameOfShop;
budget= +prompt("Ваш бюджет:","0");
nameOfShop = prompt("Название магазина:","Магазин");
var mainList = {
myBudget: budget,
shop: nameOfShop,
shopGoods: [],
employers: {},
isOpen: false
};


// 1. let i;
// for(i = 0; i < 5; i++) {**code**}
// 2. let i = 5;
// for(; i > 0; i--) {**code**}


for(let i =0; i < 5; i++) {
	let a = prompt("Какой тип товаров будем продавать?");
	if((typeof(a)) === "string" && (typeof(a)) !== null && a != "" && a.length < 50) {
		console.log('Ok');
		mainList.shopGoods[i] = a;
	} else {
		alert("Неверный формат ввода");
		i--;
	}
}

document.write(mainList.myBudget / 30);


