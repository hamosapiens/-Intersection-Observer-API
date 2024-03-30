// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Active Navigation Link Highlighting on Scroll
window.addEventListener('scroll', () => {
    let scrollPosition = window.scrollY;
    document.querySelectorAll('section').forEach(section => {
        if (section.offsetTop <= scrollPosition && (section.offsetTop + section.offsetHeight) > scrollPosition) {
            document.querySelectorAll('nav ul li a').forEach(a => {
                a.classList.remove('active');
                if (section.getAttribute('id') === a.getAttribute('href').substring(1)) {
                    a.classList.add('active');
                }
            });
        }
    });
});

// Mobile Navigation Toggle (Example)
document.querySelector('.mobile-nav-toggle').addEventListener('click', () => {
    document.querySelector('nav').classList.toggle('open');
});
