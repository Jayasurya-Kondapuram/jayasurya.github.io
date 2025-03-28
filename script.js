document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Typed text effect
    const typedCursor = document.querySelector('.typed-cursor');
    const texts = ['Software Developer', 'Web Designer', 'Tech Enthusiast'];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        const currentText = texts[textIndex];
        
        if (!isDeleting) {
            typedCursor.textContent = currentText.slice(0, charIndex + 1);
            charIndex++;

            if (charIndex === currentText.length) {
                isDeleting = true;
                setTimeout(typeEffect, 2000);
            } else {
                setTimeout(typeEffect, 100);
            }
        } else {
            typedCursor.textContent = currentText.slice(0, charIndex);
            charIndex--;

            if (charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
                setTimeout(typeEffect, 500);
            } else {
                setTimeout(typeEffect, 50);
            }
        }
    }

    typeEffect();

    // Parallax effect
    window.addEventListener('mousemove', (e) => {
        const heroImage = document.querySelector('.hero-image img');
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;

        heroImage.style.transform = `translate(${-mouseX * 20}px, ${-mouseY * 20}px)`;
    });
});
