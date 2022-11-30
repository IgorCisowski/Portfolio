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

// Section scroll

document.querySelectorAll("a").forEach((el) => {
  el.addEventListener("click", () => {
    const goToSection = "#" + this.classList[0];
    if (goToSection === "#Home") {
      scroll({
        top: document.querySelector(goToSection).scrollTop,
        behavior: "smooth",
      });
      return;
    }

    document.querySelector(goToSection).scrollIntoView({ behavior: "smooth" });
  });
});
