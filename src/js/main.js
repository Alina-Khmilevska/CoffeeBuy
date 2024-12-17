document.addEventListener("DOMContentLoaded", () => {
  const selectors = {
    burger: ".nav__burger",
    menu: ".nav__menu",
    links: ".nav__link",
  };

  const classes = {
    active: "active",
    menuOpen: "menu-open",
  };

  const burger = document.querySelector(selectors.burger);
  const menu = document.querySelector(selectors.menu);

  const toggleMenu = () => {
    [burger, menu].forEach((el) => el.classList.toggle(classes.active));
    document.body.classList.toggle(classes.menuOpen);
  };

  burger.addEventListener("click", toggleMenu);

  menu
    .querySelectorAll(selectors.links)
    .forEach((link) => link.addEventListener("click", toggleMenu));
});
