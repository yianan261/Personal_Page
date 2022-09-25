const images = [
  "mars.jpg",
  "Taskmaster.jpg",
  "stego.jpg",
  "preorder.jpg",
  "pokemon.jpg",
  "milky.jpg",
];
const intro = [
  "Mars Roverland",
  "TaskMaster",
  "Steganography",
  "Preorder Website",
  "Pokemon",
  "Milky Way NFT Marketplace",
];

const descriptions = [
  "Full-stack web application that engages with NASA Mars rovers APIs",
  "React to-do list web application with history-query feature",
  "Full-stack web application that encodes secret messages in images using LSB pixel encryption",
  "React e-commerce web application",
  "Reactive programming project on Observablehq notebook",
  "Decentralized full-stack web application for users to create/mint/trade NFTs",
];

const links = [
  "https://github.com/CS5500-NEU-Group10/NASA-Mars-Rover",
  "https://github.com/yianan261/taskmaster-app",
  "https://github.com/veraxpq/graph_encryption_backend",
  "https://github.com/yianan261/Preorder-WebApp",
  "https://observablehq.com/@9cc44c8526ef498b/pokemon-pika-pika",
  "https://devpost.com/software/milky-way-g47qof",
];

const imageList = images.map((img) => `./images/${img}`);
let currImage = 0;

let next = document.getElementById("forward");
// let nextPress = document.querySelector(".move-right");
let prev = document.getElementById("backward");
let introText = document.getElementById("about-project");
let introDesc = document.getElementById("about-description");
let click = false;
let linkURL = document.getElementById("link-url");

//default carousel description
if (click === false) {
  introText.innerHTML = intro[0];
  introDesc.innerHTML = descriptions[0];
  linkURL.href = links[0];
}

/**
 * function that moves to the next slide of the carousel on click, as well as description
 */
let moveRight = () => {
  if (currImage < imageList.length - 1) {
    currImage += 1;
  } else {
    currImage = 0;
  }
  //next slide
  let newImg = document.getElementById("carousel-img");
  let nextImg = imageList.slice(currImage, currImage + 1).map((img) => img);
  newImg.src = nextImg;
  newImg.alt = "broken image";
  //next link url
  let nextLink = links.slice(currImage, currImage + 1).map((link) => link);
  linkURL.href = nextLink;
  //next text intro
  let aboutText = intro.slice(currImage, currImage + 1).map((txt) => txt);
  introText.innerHTML = aboutText;
  click = true;
  let aboutDesc = descriptions
    .slice(currImage, currImage + 1)
    .map((txt) => txt);
  introDesc.innerHTML = aboutDesc;
};

next.addEventListener("click", function () {
  moveRight();
});

/**
 * function that moves to the previous slide of the carousel on click, as well as description
 */
let moveLeft = () => {
  if (currImage > 0) {
    currImage -= 1;
  } else {
    currImage = imageList.length - 1;
  }
  //prev slide image
  let newImg = document.getElementById("carousel-img");
  let prevImg = imageList.slice(currImage, currImage + 1).map((img) => img);
  newImg.src = prevImg;
  newImg.alt = "broken image";
  //prev slide link
  let prevLink = links.slice(currImage, currImage + 1).map((link) => link);
  linkURL.href = prevLink;
  //prev slide text intro
  let aboutText = intro.slice(currImage, currImage + 1).map((txt) => txt);
  introText.innerHTML = aboutText;
  click = true;
  let aboutDesc = descriptions
    .slice(currImage, currImage + 1)
    .map((txt) => txt);
  introDesc.innerHTML = aboutDesc;
};

prev.addEventListener("click", function () {
  moveLeft();
});

// nextPress.addEventListener("keydown", (evt) => {
//   console.log(evt);
//   if (evt.keyCode === 39) {
//     moveRight();
//     console.log("MOVE LEFT");
//   }
// });
