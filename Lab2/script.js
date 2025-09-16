function toggleImage() {
  let img = document.getElementById("togglePanda");
  img.style.display = (img.style.display === "none") ? "block" : "none";
}

let slideIndex = 0;
function showSlide(n) {
  let slides = document.getElementsByClassName("slide");
  let booPandaText = document.getElementById("booPanda");

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex = (n + slides.length) % slides.length;

  slides[slideIndex].style.display = "block";

  if (slides[slideIndex].src.includes("SURPRISE PANDA.jpg")) {
    booPandaText.style.display = "block"; 
  } else {
    booPandaText.style.display = "none"; 
  }
}
showSlide(slideIndex);

function changeBg() {
  const colors = ["#ffede5", "#fff7e6", "#e6f7ff", "#f9e6ff"];
  document.body.style.background = colors[Math.floor(Math.random() * colors.length)];
}

const facts = [
  "Red pandas use their tails as blankets in the cold.",
  "They are most active at dawn and dusk.",
  "Despite their name, red pandas are not closely related to giant pandas.",
  "They can rotate their ankles to climb down trees headfirst!",
  "Red pandas are excellent climbers."
];
function showFact() {
  document.getElementById("randomFact").textContent =
    facts[Math.floor(Math.random() * facts.length)];
}

let likes = 0;
function likeImage() {
  likes++;
  document.getElementById("likeCount").textContent = likes;
}
