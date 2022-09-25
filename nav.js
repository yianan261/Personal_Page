// fetch("nav.html")
//   .then((res) => res.text())
//   .then((text) => {
//     let oldelem = document.querySelector("script#replace_navbar");
//     let newelem = document.createElement("div");
//     newelem.innerHTML = text;
//     oldelem.parentNode.replaceChild(newelem, oldelem);
//   });

let navbar = document.querySelector("nav");

window.onscroll = function () {
  // pageYOffset or scrollY
  if (window.scrollY > 10) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
};
