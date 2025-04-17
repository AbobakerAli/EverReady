document.addEventListener('DOMContentLoaded', function () {
    // Initialize GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Hero section animations
    gsap.from('.showcase-title', {
        y: -50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    });

    // Product items animations
    gsap.utils.toArray('.product-item').forEach((item, index) => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: 'top bottom-=100',
                toggleActions: 'play none none reverse'
            },
            y: 100,
            opacity: 0,
            duration: 0.8,
            delay: index * 0.2,
            ease: 'power3.out'
        });
    });

    // Info section animations
    gsap.from('.info-text', {
        scrollTrigger: {
            trigger: '.info-text',
            start: 'top bottom-=100',
            toggleActions: 'play none none reverse'
        },
        x: -100,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
    });

    gsap.from('.info-image', {
        scrollTrigger: {
            trigger: '.info-image',
            start: 'top bottom-=100',
            toggleActions: 'play none none reverse'
        },
        x: 100,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
    });

    // Stats animations
    gsap.utils.toArray('.stat-box').forEach((stat, index) => {
        gsap.from(stat, {
            scrollTrigger: {
                trigger: stat,
                start: 'top bottom-=100',
                toggleActions: 'play none none reverse'
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            delay: index * 0.2,
            ease: 'power3.out'
        });
    });

    // Add footer animations
    initFooterAnimations();
}); 