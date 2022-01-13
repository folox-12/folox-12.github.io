let cart = {};
$('document').ready(function () {
	loadGoods();
	checkCart();

});


function addToCart(id) {
	//добавляем товар в корзину
	if (cart[id] != undefined) {
		cart[id]++;
	}
	else {
		cart[id] = 1;
	}
	// console.log(id)
	localStorage.setItem('cart', JSON.stringify(cart));
}

function checkCart() {
	//проверяю наличие корзины в localStorage;
	if (localStorage.getItem('cart') != null) {
		cart = JSON.parse(localStorage.getItem('cart'));
	}
}

function delMiniCart() {
	localStorage.clear();
	addToMiniCart();
}
var lastResFind = ""; // последний удачный результат
var copy_page = ""; // копия страницы в ихсодном виде
function TrimStr(s) {
	s = s.replace(/^\s+/g, '');
	return s.replace(/\s+$/g, '');
}
function FindOnPage(inputId) {//ищет текст на странице, в параметр передается ID поля для ввода
	var obj = window.document.getElementById(inputId);
	var textToFind;

	if (obj) {
		textToFind = TrimStr(obj.value);//обрезаем пробелы
	} else {
		alert("Введенная фраза не найдена");
		return;
	}
	if (textToFind == "") {
		alert("Вы ничего не ввели");
		return;
	}
	if (textToFind == "class" && textToFind == "href") {
		alert("Неверный формат ввода");
		return;
	}
	if (textToFind.length <= 3) {
		alert("Неверный формат ввода");
		return;
	}
	if (document.body.innerHTML.indexOf(textToFind) == "-1")
		alert("Ничего не найдено, проверьте правильность ввода!");

	if (copy_page.length > 0)
		document.body.innerHTML = copy_page;
	else copy_page = document.body.innerHTML;


	document.body.innerHTML = document.body.innerHTML.replace(eval("/name=" + lastResFind + "/gi"), " ");//стираем предыдущие якори для скрола
	document.body.innerHTML = document.body.innerHTML.replace(eval("/" + textToFind + "/gi"), "<a name=" + textToFind + " style='background:#F4CA16'>" + textToFind + "</a>"); //Заменяем найденный текст ссылками с якорем;
	lastResFind = textToFind; // сохраняем фразу для поиска, чтобы в дальнейшем по ней стереть все ссылки
	window.location = '#' + textToFind;//перемещаем скрол к последнему найденному совпадению
}