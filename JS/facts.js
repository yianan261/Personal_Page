const facts = [
  "I was in a reknowned artist's artwork by opportunity",
  "I grew up in Taiwan, Singapore, and China",
  "I play the piano and used to play the cello",
  "Mandarin is my native tongue",
  "I absolutely love matcha and am very particular about my matcha",
  "I bake low carb, sugar-free, low guilt desserts",
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
