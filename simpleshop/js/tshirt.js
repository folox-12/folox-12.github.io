function loadGoods() {
	//выгрузка	 товаров на страницу
	$.getJSON("goods.json", function (data) {
		let goods = data;
		let out = '';
		//вывод товара на страницу
		for (key in data) {
			out += '<div class="catalog__column ui-widget-content" id = "' + key + '"><div class="catalog__items item-catalog"><div class="item-catalog__top catalogItem-top">'
			out += '<div class ="catalogItem-top__image">' + '<img src =" ' + data[key].image + '">' + '</div>';
			out += '<div class ="catalogItem-top__price">' + data[key]['cost'] + '</div>';
			out += '<div class="catalogItem-top__texts"><div class="catalogItem-top__button">'
			out += `<input class ="add-to-cart" type="button"  data-art = "${key}" value="купить" onClick=addToCart(id='${key}') />`
			out += '</div></div></div><div class="item-catalog__bottom"><span>' + data[key].name + '</span></div></div></div>'
		}
		$('.catalog__row').html(out);
		// $('input.add-to-cart').on('click', addToCart);
		$(".catalog__column").draggable(
			{
				cursor: "move",
				helper: "clone",
				scroll: true,
				containment: ".wrapper",
			}
		);

		$("#draggable").droppable(
			{
				accept: ".catalog__column",
				classes: {
					"ui-droppable-active": "ui-state-active",
					"ui-droppable-hover": "ui-state-hover"
				},
				drop: function (event, ui) {
					addToCart(id = ui.draggable.attr("id"))
					console.log(ui.draggable.attr("id"))
					alert("Товар добавлен в корзину")
				}

			}

		)
	});
};