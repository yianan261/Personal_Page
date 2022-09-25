const facts = [
  "I have a corgi and she's the sweetest",
  "I was in a reknowned artist's artwork by opportunity",
  "I medidate daily to calm my mind",
  "I grew up in Taiwan, Singapore, and China",
  "I play the piano and used to play the cello",
  "I speak Mandarin fluently",
  "I value family and friendships",
  "I'm a huge fan of matcha",
  "I have a younger brother",
  "I like to bake",
  "I volunteered at a school in a rural village in China once and raised funds to support the children's education",
  "I have a bachelor's degree in Art History",
];

let button = document.getElementById("fact-button");
let factText = document.getElementById("fact-text");
let factDiv = document.getElementById("factsDiv");

button.addEventListener("click", function () {
  let insertText = facts[Math.floor(Math.random() * facts.length)];
  factText.innerHTML = insertText;
  if (insertText) {
    factDiv.classList.add("clicked");
  }
});
