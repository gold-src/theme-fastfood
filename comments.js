let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("comments-comment");
  let number = document.getElementsByClassName("comments-number");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "flex";
  number[0].innerHTML = `${slideIndex} / ${slides.length}`
}

let foodIndex = 0;

function foodRight() {
  if (foodIndex >= 2) { return }
  let slides = document.getElementsByClassName("menu-slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.left = `${(i - 1 - foodIndex) * 27 + 5}%`;
  }
  foodIndex += 1;
}

function foodLeft() {
  if (foodIndex <= 0) { return }
  foodIndex -= 1;
  let slides = document.getElementsByClassName("menu-slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.left = `${(i - foodIndex) * 27 + 5}%`;
  }
}