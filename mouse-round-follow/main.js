const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (event) => {
    cursor.style.left = event.clientX - cursor.offsetWidth / 2 + 'px';
    cursor.style.top = event.clientY - cursor.offsetHeight / 2 + 'px';
});

const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach((link) => {
    link.addEventListener('mousemove', (event) => {
        const rect = link.getBoundingClientRect();
        cursor.style.left = rect.left + 'px';
        cursor.style.top = rect.top + 'px';
    });

    link.addEventListener('mouseleave', () => {
        cursor.style.left = '-100px';
        cursor.style.top = '-100px';
    });
});
