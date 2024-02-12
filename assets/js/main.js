const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
  reset: true
});
sr.reveal('.home-title', {});
sr.reveal('.home-link', { delay: 200 });
sr.reveal('.home-img', { delay: 400 });
sr.reveal('.home-social-link', { interval: 200 });
sr.reveal('.section-title', { delay: 200 });
sr.reveal('.about-img', {});
sr.reveal('.about-text', { delay: 400 });
sr.reveal('.education-img', {});
sr.reveal('.education-subtitle', {});
sr.reveal('.education-text', { delay: 400 });
sr.reveal('.skills-list', { delay: 400 });
sr.reveal('.work-img', { interval: 200 });
sr.reveal('.work-subtitle', {});
sr.reveal('.work-text', { delay: 400 });
sr.reveal('.portfolio-img', { interval: 200 });
sr.reveal('.portfolio-subtitle', {});
sr.reveal('.portfolio-text', { delay: 400 });
sr.reveal('.contact-container', { interval: 200 });

document.addEventListener("DOMContentLoaded", function() {
  const navToggle = document.getElementById("nav-toggle");
  const navMenu = document.getElementById("nav-menu");

  navToggle.addEventListener("click", function() {
    navMenu.classList.toggle("active");
  });
});
