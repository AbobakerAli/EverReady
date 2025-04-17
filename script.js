document.addEventListener('DOMContentLoaded', function () {
    const pins = document.querySelectorAll('.pin');
    const infoItems = document.querySelectorAll('.info-item');
    const heroLogo = document.querySelector('.hero-logo');
    const title = document.querySelector('.title');
    const navbar = document.querySelector('.navbar');
    const isMobile = window.innerWidth <= 768;

    // Initialize GSAP
    gsap.registerPlugin(ScrollTrigger);

    // Optimize animations for mobile
    const defaultDuration = isMobile ? 0.6 : 1;
    const defaultEase = "power2.out";

    // Hero section animations
    const heroTl = gsap.timeline();
    
    heroTl
        .from(heroLogo, {
            opacity: 0,
            y: 50,
            rotation: isMobile ? 0 : 360,
            duration: defaultDuration,
            ease: "back.out(1.7)"
        })
        .from(title, {
            opacity: 0,
            y: 30,
            duration: defaultDuration,
            ease: defaultEase
        }, '-=0.3')
        .from(title.querySelector('p'), {
            opacity: 0,
            y: 20,
            duration: defaultDuration,
            ease: defaultEase
        }, '-=0.2');

    // Optimize scroll triggers for mobile
    ScrollTrigger.config({
        limitCallbacks: true,
        ignoreMobileResize: true
    });

    // Container animations with mobile optimization
    gsap.utils.toArray('.container').forEach(container => {
        gsap.from(container, {
            scrollTrigger: {
                trigger: container,
                start: "top bottom-=50",
                toggleActions: "play none none reverse"
            },
            opacity: 0,
            y: 30,
            duration: defaultDuration,
            ease: defaultEase
        });
    });

    // Info items animations optimized for mobile
    gsap.utils.toArray('.info-item').forEach((item, index) => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: "top bottom-=50",
                toggleActions: "play none none reverse"
            },
            opacity: 0,
            y: 30,
            duration: defaultDuration,
            ease: defaultEase
        });

        // Only add parallax on desktop
        if (!isMobile) {
            gsap.to(item.querySelector('img'), {
                scrollTrigger: {
                    trigger: item,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1
                },
                y: 30,
                ease: "none"
            });
        }
    });

    // Pin animations with mobile optimization
    pins.forEach((pin, index) => {
        pin.classList.remove('hidden');
        pin.style.opacity = '1';
        pin.style.transform = 'translateY(0)';
        
        // Add touch-friendly interactions
        if (!isMobile) {
            pin.addEventListener('mouseenter', () => {
                gsap.to(pin, {
                    y: -10,
                    scale: 1.02,
                    duration: 0.3,
                    ease: defaultEase
                });
                
                const pinImage = pin.querySelector('.pin-image');
                if (pinImage) {
                    gsap.to(pinImage, {
                        scale: 1.05,
                        duration: 0.3,
                        ease: defaultEase
                    });
                }
            });

            pin.addEventListener('mouseleave', () => {
                gsap.to(pin, {
                    y: 0,
                    scale: 1,
                    duration: 0.3,
                    ease: defaultEase
                });
                
                const pinImage = pin.querySelector('.pin-image');
                if (pinImage) {
                    gsap.to(pinImage, {
                        scale: 1,
                        duration: 0.3,
                        ease: defaultEase
                    });
                }
            });
        }
    });

    // Navbar scroll effect with debouncing
    let scrollTimeout;
    const handleScroll = () => {
        if (scrollTimeout) {
            window.cancelAnimationFrame(scrollTimeout);
        }

        scrollTimeout = window.requestAnimationFrame(() => {
            if (window.scrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Handle window resize with debouncing
    let resizeTimeout;
    window.addEventListener('resize', () => {
        document.body.classList.add('resize-animation-stopper');
        
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            document.body.classList.remove('resize-animation-stopper');
            
            // Update isMobile status
            const newIsMobile = window.innerWidth <= 768;
            if (newIsMobile !== isMobile) {
                window.location.reload();
            }
        }, 400);
    });

    // Initialize footer with mobile optimization
    initFooterAnimations(isMobile);
});

function initFooterAnimations(isMobile) {
    const defaultDuration = isMobile ? 0.6 : 0.8;
    const defaultEase = 'power2.out';

    gsap.utils.toArray('.footer-section').forEach((section, index) => {
        gsap.from(section, {
            scrollTrigger: {
                trigger: section,
                start: 'top bottom-=30',
                toggleActions: 'play none none reverse'
            },
            y: 30,
            opacity: 0,
            duration: defaultDuration,
            delay: isMobile ? 0 : index * 0.1,
            ease: defaultEase
        });
    });

    if (!isMobile) {
        gsap.utils.toArray('.footer-icon').forEach(icon => {
            icon.addEventListener('mouseenter', () => {
                gsap.to(icon, {
                    scale: 1.2,
                    rotate: 10,
                    duration: 0.3,
                    ease: 'back.out(1.7)'
                });
            });

            icon.addEventListener('mouseleave', () => {
                gsap.to(icon, {
                    scale: 1,
                    rotate: 0,
                    duration: 0.3,
                    ease: defaultEase
                });
            });
        });
    }

    gsap.from('.footer-bottom', {
        scrollTrigger: {
            trigger: '.footer-bottom',
            start: 'top bottom-=20',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 20,
        duration: defaultDuration,
        ease: defaultEase
    });
}
