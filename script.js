function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    menu.classList.toggle("open");
  }

  // script.js

document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');
  
  const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target);
          }
      });
  }, options);

  sections.forEach(section => {
      section.classList.add('hidden'); // Add hidden class initially
      observer.observe(section);
  });
});
