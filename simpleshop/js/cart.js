var cart = {}; //корзина

$.getJSON('goods.json', function (data) {
	var goods = data; //все товары в массиве
	// console.log(goods);
	checkCart();
	//console.log(cart);
	showCart(); //вывожу товары на страницу

	function showCart() {
		var out = '';
		var allPrices = 0;
		for (var key in cart) {
			out += '<div class ="column-cart__item">'
			out += '<div class ="column-cart__image">' + '<img src="' + goods[key].image + '">' + '</div>';
			out += '<div class = "column-cart__texts">'
			out += '<div class ="column-cart__title">' + goods[key].name + '</div>';
			out += '<div class ="column-cart__button"><button data-art ="' + key + '"class="minus">-</button></div>';
			out += '<div class = "column-cart__cost">' + cart[key] + '</div>';
			out += '<div class ="column-cart__button"><button  data-art ="' + key + '"class="plus">+</button></div>';
			out += cart[key] * goods[key].cost;
			out += '<div class = "column-cart__button column-cart__button_big"><button data-art ="' + key + '"class="delete">x</button></div>';
			out += '</div></div>';
			allPrices += cart[key] * goods[key].cost
		}
		$('.column-cart').html(out);
		$('.column-right__text').html(allPrices);
		$('.plus').on('click', plusGoods);
		$('.minus').on('click', minusGoods);
		$('.delete').on('click', deleteGoods);
	}
	function plusGoods() {
		var articul = $(this).attr('data-art');
		cart[articul]++;
		saveCart();
		showCart()
	}
	function minusGoods() {
		var articul = $(this).attr('data-art')
		if (cart[articul] != 1) {
			cart[articul]--;
		}
		else {
			delete cart[articul];
		}
		saveCart();
		showCart();

	}
	function deleteGoods(params) {
		var articul = $(this).attr('data-art')
		delete cart[articul];
		saveCart();
		showCart()
	}
	// function writeFile() {
	// 	var name = "cart.txt";
	// 	let val = "";
	// 	for (key in cart) {
	// 		val += goods[key].name + cart[key] * goods[key].cost + ' ';
	// 	}
	// 	var download = document.createElement("a");
	// 	download.href = "data:text/plain;content-disposition=attachment;filename=file," + val;
	// 	download.download = name;
	// 	download.style.display = "none";
	// 	download.id = "download"; document.body.appendChild(download);
	// 	document.getElementById("download").click();
	// 	document.body.removeChild(download);
	// }
	// $('#Download').on("click", writeFile)
});

function checkCart() {
	//проверяю наличие корзины в localStorage;
	if (localStorage.getItem('cart') != null) {
		cart = JSON.parse(localStorage.getItem('cart'));
	}
}
function saveCart(params) {
	localStorage.setItem('cart', JSON.stringify(cart));
}


// writeFile("9dksk239xwd.txt", "jxowsjsivneic");
