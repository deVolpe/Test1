var budget, nameOfShop;
budget= +prompt("��� ������:","0");
nameOfShop = prompt("�������� ��������:","�������1");
var mainList = {
myBudget: budget,
shop: nameOfShop,
shopGoods: [],
employers: 12,
isOpen: false
};

mainList.shopGoods[0] = prompt("����� ��� ������ ����� ���������?", "hods");
mainList.shopGoods[1] = prompt("����� ��� ������ ����� ���������?", "sunglasses");
mainList.shopGoods[2] = prompt("����� ��� ������ ����� ���������?", "sweets");
document.write(mainList.myBudget / 30);


