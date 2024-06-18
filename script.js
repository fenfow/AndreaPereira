function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    menu.classList.toggle("open");
  }

document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('section, nav, footer, .btn-container, .icon, .section_text_p1, .title, .progress-bar-container, .contact-info-container, .nav-links-container, .programing-language-list, .text-modification, .details-container');

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

    elements.forEach(element => {
        element.classList.add('hidden');
        observer.observe(element);
    });
});
