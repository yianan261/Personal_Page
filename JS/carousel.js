const images = [
  "mars.jpg",
  "Taskmaster.jpg",
  "stego.jpg",
  "preorder.jpg",
  "pokemon.jpg",
  "milky.jpg",
];
const intro = [
  "Mars Roverland Web App",
  "TaskMaster Web App",
  "Steganography Web App",
  "Preorder App",
  "Pokemon Reactive Programming Project",
  "Milky Way Decentralized Web App",
];

const imageList = images.map((img) => `./images/${img}`);
let currImage = 0;

let next = document.getElementById("forward");
let prev = document.getElementById("backward");
let introText = document.getElementById("about-project");
let click = false;

if (click === false) {
  introText.innerHTML = "Mars Roverland Web App";
}

next.addEventListener("click", function () {
  if (currImage < imageList.length - 1) {
    currImage += 1;
  } else {
    currImage = 0;
  }
  let newImg = document.getElementById("carousel-img");
  let nextImg = imageList.slice(currImage, currImage + 1).map((img) => img);
  newImg.src = nextImg;
  newImg.alt = "broken image";
  let aboutText = intro.slice(currImage, currImage + 1).map((txt) => txt);
  introText.innerHTML = aboutText;
  click = true;
});

prev.addEventListener("click", function () {
  if (currImage > 0) {
    currImage -= 1;
  } else {
    currImage = imageList.length - 1;
  }
  let newImg = document.getElementById("carousel-img");
  let prevImg = imageList.slice(currImage, currImage + 1).map((img) => img);
  newImg.src = prevImg;
  newImg.alt = "broken image";
  let aboutText = intro.slice(currImage, currImage + 1).map((txt) => txt);
  introText.innerHTML = aboutText;
  click = true;
});
