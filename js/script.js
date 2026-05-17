// MOBILE MENU

const menuBtn =
document.getElementById("menuBtn");
const navLinks = 
document.getElementById("navLinks");

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("active");
  });
}

// SCROLL ANIMATION

const cards = document.querySelectorAll(
  ".service-card, .why-card, .testimonial-card" 
);

// Initial style
cards.forEach(function(card){
  card.style.opacity = "0";
  card.style.transform = "translateY(40px)";
  card.style.transition = "all 0.6s ease";

});

// Scroll effect
window.addEventListener("scroll", function () {
  cards.forEach(function(card) {
    const cardTop =
    card.getBoundingClientRect().top;
    if (cardTop < window.innerHeight - 100) {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }
  });
});