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

// li.forEach((a) => {
//   a.addEventListener("click", exit);
// });

burgerMenu.addEventListener("click", toggleMenu);

// SCROLL TO SECTION SCRIPT

document.querySelectorAll(".liLink").forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    exit();
    console.log(el.getAttribute("href"));

    document.querySelector(el.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

//

const wrapper = document.querySelector(".cards");

let pressed = false;
let startX = 0;

wrapper.addEventListener("mousedown", function (e) {
  pressed = true;
  startX = e.clientX;
  this.style.cursor = "grabbing";
});

wrapper.addEventListener("mouseleave", function (e) {
  pressed = false;
});

window.addEventListener("mouseup", function (e) {
  pressed = false;
  wrapper.style.cursor = "grab";
});

wrapper.addEventListener("mousemove", function (e) {
  if (!pressed) {
    return;
  }

  this.scrollLeft += startX - e.clientX;
});

// li
function isSmallScreen() {
  let matchResult = window.matchMedia("(max-width: 1019px)");
  const allLink = document.querySelectorAll(".liLink");

  if (matchResult.matches) {
    allLink.forEach((li) => {
      li.addEventListener("mouseover", () => {
        addStyle();
        li.classList.remove("shrink");
      });
    });

    const addStyle = () => {
      allLink.forEach((li) => {
        li.classList.add("shrink");
      });
    };
    const removeStyle = () => {
      allLink.forEach((li) => {
        li.classList.remove("shrink");
      });
    };

    allLink.forEach((li) => {
      li.addEventListener("mouseleave", () => {
        removeStyle();
      });
    });
  } else if (window.matchMedia("(min-width: 1020px)")) {
    allLink.forEach((li) => {
      li.addEventListener("mouseover", () => {
        allLink.forEach((li) => {
          li.classList.remove("shrink");
        });
      });
    });
  }
}

onload = isSmallScreen;
onresize = isSmallScreen;
