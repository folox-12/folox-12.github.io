data = [
  {
    title: "YourLogo",
    description: "landing page",
    img: "img/YourLogo.png",
    link: "mylogo/index.html",
  },
  {
    title: "Simple shop",
    description: "JS, localStorage, Jquery, Jquery UI, Json",
    img: "img/ShopJs.png",
    link: "simpleshop/index.html",
  },
];
const template = (data) => {
  return data
    .map(({ title, description, img, link }) => {
      return `
		 <div class="gallery__item gallery-item">
				<div class="gallery-item__image">
					<a href ="${link}" target = "_blank">
						<img src="${img}" alt="#">
					</a>
				</div>
				<div class="gallery-item__hidden gallery-item-hidden">
					<div class="gallery-item-hidden__body">
						<div class="gallery-item-hidden__title">
							${title}	
						</div>
						<div class="gallery-item-hidden__texts">
							${description}
						</div>
					</div>
				</div>
			</div>;`;
    })
    .join("");
};
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".gallery__row").innerHTML = template(data);
});
