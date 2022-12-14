// BURGER MENU SCRIPT
const burgerMenu = document.querySelector(".burgerMenu");
const ul = document.querySelector("ul");
const li = document.querySelectorAll("li");

const toggleMenu = () => {
  ul.classList.toggle("active");
  burgerMenu.classList.toggle("active");
  document.body.classList.toggle("block");
};

const exit = () => {
  ul.classList.remove("active");
  burgerMenu.classList.remove("active");
  document.body.classList.remove("block");
};

li.forEach((a) => {
  a.addEventListener("click", exit);
});

burgerMenu.addEventListener("click", toggleMenu);

// SCROLL TO SECTION SCRIPT

document.querySelectorAll("a[href='#']").forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    document
      .querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});
