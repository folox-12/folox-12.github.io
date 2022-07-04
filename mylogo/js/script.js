window.onload = () => {
  document.querySelector(".wrapper.hidden").classList.remove("hidden");
};
const navigateTo = (Link) => {
  addValue = Link.querySelector("a").getAttribute("href").replace("#", "");
  let objectTo = document.querySelector(`.${addValue}`);
  objectTo.scrollIntoView({
    behavior: "smooth",
    block: "center",
  });
};
const toggleMenu = () => {
  if (document.querySelector(".header-mobile.active")) {
    document.body.removeAttribute("style");
  } else {
    document.body.style.overflow = "hidden";
  }
  const burger = document.querySelector(".header-mobile");
  burger.classList.toggle("active");
};
let headerLinks = document.querySelectorAll(".scroll-to");
headerLinks.forEach((Link) => {
  Link.addEventListener("click", (e) => {
    e.preventDefault();
    if (document.querySelector(".header-mobile.active")) {
      toggleMenu();
    }
    navigateTo(Link);
  });
});
document.querySelectorAll(".header__button").forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    toggleMenu();
  });
});
