const getElement = (id) => document.getElementById(id);

const yesBtn = getElement("yes-btn");
const noBtn = getElement("no-btn");
const tonkla = getElement("tonkla");
const imagePath = [
  "https://llxlust.github.io/ammi/assets/ton1.jpg",
  "https://llxlust.github.io/ammi/assets/ton2.jpg",
  "https://llxlust.github.io/ammi/assets/ton3.jpg",
  "https://llxlust.github.io/ammi/assets/ton4.jpg",
  "https://llxlust.github.io/ammi/assets/ton5.jpg",
  "https://llxlust.github.io/ammi/assets/ton6.jpg",
];
let imageIndex = 0;
noBtn.addEventListener("click", () => {
  imageIndex += 1;
  if (!imagePath[imageIndex]) {
    return;
  }
  tonkla.src = imagePath[imageIndex];
});
