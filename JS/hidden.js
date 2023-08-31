document.addEventListener("DOMContentLoaded", () => {
  let firstText = document.getElementById("headingGroup");
  let secondText = document.getElementById("aboutP");

  //   setTimeout(() => {
  //     firstText.classList.add("hidden");
  //     secondText.classList.add("visible");
  //   }, 2000);

  setTimeout(() => {
    secondText.classList.add("visible");
  }, 1000);
});
