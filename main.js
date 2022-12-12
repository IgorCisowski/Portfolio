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

document.querySelectorAll("a[href='#']").forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    document
      .querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// ddd
// let form = document.getElementById("my-form");

// const sentMessage = (e) => {
//   e.preventDefault();
// };

// form.addEventListener("sumbit", sentMessage);

// const sent = document.querySelector(".sent");
// const complete = document.querySelector(".complete");
// const input = document.querySelectorAll("input");
// const textarea = document.querySelector("textarea");

// const showMessage = () => {
//   console.log("click");

//   complete.style.visibility = "visible";

//   input.forEach((i) => (i.style.visibility = "hidden"));
//   textarea.style.visibility = "hidden";
//   sent.style.visibility = "hidden";
// };

// sent.addEventListener("click", showMessage);
