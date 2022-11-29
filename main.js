const burgerMenu = document.querySelector(".burgerMenu");
const ul = document.querySelector("ul");
const li = document.querySelectorAll("li");

const toggleMenu = () => {
  ul.classList.toggle("active");
  burgerMenu.classList.toggle("active");
};

const exit = () => {
  ul.classList.remove("active");
  burgerMenu.classList.remove("active");
};

li.forEach((a) => {
  a.addEventListener("click", exit);
});

burgerMenu.addEventListener("click", toggleMenu);
