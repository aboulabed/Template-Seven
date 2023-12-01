let navLinks = document.querySelectorAll("nav .navbar-nav li a");
let nav = document.querySelector("nav");
let btn = document.querySelector(".button button");
window.onscroll = () => {
  if (scrollY >= 50) {
    nav.style.backgroundColor = "white";
    nav.style.boxShadow = "0px 20px 50px 0px rgba(0, 0, 0, 0.05)";
  } else {
    nav.style.backgroundColor = "transparent";
    nav.style.boxShadow = "0px 0px 0px 0px rgba(0, 0, 0, 0.05)";
  }
  if (scrollY >= 50) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
  if (scrollY >= 0 && scrollY < 900) {
    navLinks.forEach((l) => {
      l.classList.remove("active");
    });
    navLinks[0].classList.add("active");
  } else if (scrollY > 900 && scrollY < 1700) {
    navLinks.forEach((l) => {
      l.classList.remove("active");
    });
    navLinks[1].classList.add("active");
  } else if (scrollY > 1700 && scrollY < 2700) {
    navLinks.forEach((l) => {
      l.classList.remove("active");
    });
    navLinks[2].classList.add("active");
  } else if (scrollY > 2700 && scrollY < 3700) {
    navLinks.forEach((l) => {
      l.classList.remove("active");
    });
    navLinks[3].classList.add("active");
  } else if (scrollY > 3700) {
    navLinks.forEach((l) => {
      l.classList.remove("active");
    });
    navLinks[4].classList.add("active");
  }
};
window.onload = () => {
  if (scrollY >= 50) {
    nav.style.backgroundColor = "white";
    nav.style.boxShadow = "0px 20px 50px 0px rgba(0, 0, 0, 0.05)";
  } else {
    nav.style.backgroundColor = "transparent";
    nav.style.boxShadow = "0px 0px 0px 0px rgba(0, 0, 0, 0.05)";
  }
  if (scrollY >= 0 && scrollY < 900) {
    navLinks.forEach((l) => {
      l.classList.remove("active");
    });
    navLinks[0].classList.add("active");
  } else if (scrollY > 900 && scrollY < 1700) {
    navLinks.forEach((l) => {
      l.classList.remove("active");
    });
    navLinks[1].classList.add("active");
  } else if (scrollY > 1700 && scrollY < 2700) {
    navLinks.forEach((l) => {
      l.classList.remove("active");
    });
    navLinks[2].classList.add("active");
  } else if (scrollY > 2700 && scrollY < 2769) {
    navLinks.forEach((l) => {
      l.classList.remove("active");
    });
    navLinks[3].classList.add("active");
  } else if (scrollY > 2769 && scrollY < 3700) {
    navLinks.forEach((l) => {
      l.classList.remove("active");
    });
    navLinks[4].classList.add("active");
  }
};

btn.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

let sing = document.querySelectorAll(".single-fag");
let singBtn = document.querySelectorAll(".single-fag button");

singBtn.forEach((b) => {
  b.addEventListener("click", () => {
    singBtn.forEach((e) => {
      e.parentElement.classList.remove("active");
      e.classList.remove("colla");
    });
    console.log(b.parentElement);
    b.parentElement.classList.add("active");

    b.classList.add("colla");
  });
});


