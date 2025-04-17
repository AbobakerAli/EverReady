document.addEventListener('DOMContentLoaded', function () {
    // Initialize GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Contact hero section animations
    gsap.from('.contact-hero h1', {
        y: -50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    });

    // Contact info card animation
    gsap.from('.contact-info-card', {
        x: -100,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: 'power3.out'
    });

    // Contact form card animation
    gsap.from('.contact-form-card', {
        x: 100,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: 'power3.out'
    });

    // Form fields animation
    gsap.utils.toArray('.form-group').forEach((field, index) => {
        gsap.from(field, {
            y: 30,
            opacity: 0,
            duration: 0.5,
            delay: 0.5 + (index * 0.1),
            ease: 'power3.out'
        });
    });

    // Form validation and submission animation
    const form = document.querySelector('.contact-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Animate submit button
            gsap.to('.submit-btn', {
                scale: 0.95,
                duration: 0.1,
                yoyo: true,
                repeat: 1
            });

            // Add your form submission logic here
        });
    }

    // Info items hover animation
    gsap.utils.toArray('.info-item').forEach(item => {
        item.addEventListener('mouseenter', () => {
            gsap.to(item, {
                scale: 1.02,
                duration: 0.3,
                ease: 'power2.out'
            });
        });

        item.addEventListener('mouseleave', () => {
            gsap.to(item, {
                scale: 1,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });

    // Add footer animations
    initFooterAnimations();
});
