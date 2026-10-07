/* YaKon — navigation + lightweight reveal animations */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    const open = navLinks.classList.toggle("active");
    menuBtn.setAttribute("aria-expanded", String(open));
    menuBtn.innerHTML = open
      ? '<i class="fa-solid fa-xmark"></i>'
      : '<i class="fa-solid fa-bars"></i>';
  });

  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      menuBtn.setAttribute("aria-expanded", "false");
      menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    });
  });
}

/* Add reveal class to major cards */
const revealTargets = document.querySelectorAll(
  ".solution-card, .benefits > div, .project-card, .mini-card, .stat"
);

revealTargets.forEach((element, index) => {
  element.classList.add("reveal");
  element.style.transitionDelay = `${Math.min(index * 45, 250)}ms`;
});

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));
