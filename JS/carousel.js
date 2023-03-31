const images = [
  "starts.jpg",
  "mars.jpg",
  "tutorApp.png",
  "career.png",
  "Taskmaster.jpg",
  "stego.jpg",
  "preorder.jpg",
  "pokemon.jpg",
  "milky.jpg",
];
const intro = [
  "Starts Foundation",
  "Mars Roverland",
  "Tutor Match App",
  "Career Helper App",
  "TaskMaster",
  "Steganography",
  "Preorder Website",
  "Pokemon",
  "Milky Way NFT Marketplace",
];

const descriptions = [
  "Website built for the Starts Foundation of Nepal. <br> Tech Stack : Gatsby, React <br> Languages/Tools : Javascript, Sanity, GraphQL, CSS",
  "Full-stack web application that engages with NASA Mars rovers APIs. <br> Tech Stack : Spring Boot, React, MySQL, Hibernate <br> Languages/Tools : Java, Javascript, SQL, HTML, CSS",
  "MERN stack web application that helps students match with tutors. <br> Tech Stack : React, Express.js, Node.js, MongoDB <br> Languages/Tools : Javascript, HTML, CSS",
  "Full-stack web application that helps users plan careers and track application progress <br> Tech Stack : Express.js, Node.js, MongoDB <br>  Languages/Tools : Javascript, HTML, CSS",
  "React to-do list web application with history-query feature <br> Tech Stack : React, Minimongo <br> Languages/Tools : Javascript, HTML, CSS",
  "Full-stack web application that encodes secret messages in images using LSB pixel encryption <br> Tech Stack : Spring Boot, React, MySQL, Hibernate <br> Languages/Tools : Java, Javascript, SQL, HTML, CSS",
  "React e-commerce web application <br> Tech Stack : React <br> Languages/Tools : Javascript, HTML, CSS ",
  "Reactive programming project on Observablehq notebook <br> Languages/Tools : Observable notebook, Javascript, HTML",
  "Decentralized full-stack web application for users to create/mint/trade NFTs <br> Tech Stack : React, Hardhat, Meter Sidechain, Ethereum, IPFS <br><i> Languages/Tools</i> : Solidity, Javascript, Ethers.js, HTML, CSS",
];

const links = [
  "https://github.com/yianan261/StartsFoundation",
  "https://github.com/CS5500-NEU-Group10/NASA-Mars-Rover",
  "https://github.com/yianan261/Tutor-Match-App",
  "https://github.com/yianan261/Career_Helper_App",
  "https://github.com/yianan261/taskmaster-app",
  "https://github.com/veraxpq/graph_encryption_backend",
  "https://github.com/yianan261/Preorder-WebApp",
  "https://observablehq.com/@9cc44c8526ef498b/pokemon-pika-pika",
  "https://devpost.com/software/milky-way-g47qof",
];

const imageList = images.map((img) => `./images/${img}`);
let currImage = 0;

let next = document.getElementById("forward");
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

next.addEventListener("click", () => moveRight());

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

prev.addEventListener("click", () => moveLeft());

window.addEventListener("keydown", (evt) => {
  
  if (evt.key === "ArrowLeft") {
    moveLeft();
  }
  if (evt.key === "ArrowRight") {
    moveRight();
  }
});
