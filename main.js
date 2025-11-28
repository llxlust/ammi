const getElement = (id) => document.getElementById(id);

const yesBtn = getElement("yes-btn");
const noBtn = getElement("no-btn");
const tonkla = getElement("tonkla");
const imagePath = [
  "/assets/ton1.jpg",
  "/assets/ton2.jpg",
  "/assets/ton3.jpg",
  "/assets/ton4.jpg",
  "/assets/ton5.jpg",
  "/assets/ton6.jpg",
];
let imageIndex = 0;
noBtn.addEventListener("click", () => {
  imageIndex += 1;
  if (!imagePath[imageIndex]) {
    return;
  }
  tonkla.src = imagePath[imageIndex];
});
