document.addEventListener('DOMContentLoaded', function () {
    const pins = document.querySelectorAll('.pin');
    const infoItems = document.querySelectorAll('.info-item');

    function revealOnScroll() {
        const windowHeight = window.innerHeight;
        infoItems.forEach(item => {
            const itemTop = item.getBoundingClientRect().top;
            if (itemTop < windowHeight - 150) {
                gsap.to(item, {
                    opacity: 1,
                    x: 0,
                    duration: 1,
                    ease: 'power2.out',
                    delay: 0.3
                });
            }
        });
        
        pins.forEach(pin => {
            const pinTop = pin.getBoundingClientRect().top;
            if (pinTop < windowHeight - 150) {
                gsap.to(pin, {
                    opacity: 1,
                    scale: 1,
                    duration: 1,
                    ease: 'power2.out',
                    delay: 0.3
                });
            }
        });
    }

    // Initial animation setup
    gsap.set(infoItems, {
        opacity: 0,
        x: -100
    });

    gsap.set(pins, {
        opacity: 0,
        scale: 0.9
    });

    revealOnScroll();
    window.addEventListener('scroll', revealOnScroll);

    // GSAP hover animations - KO Pins Collection
    gsap.utils.toArray('.pin').forEach(pin => {
        pin.addEventListener('mouseenter', () => {
            gsap.to(pin, {
                scale: 1.1,
                rotation: 5,
                boxShadow: '0 10px 20px rgba(0, 0, 0, 0.4)',
                duration: 0.3,
                ease: 'power2.out'
            });
        });

        pin.addEventListener('mouseleave', () => {
            gsap.to(pin, {
                scale: 1,
                rotation: 0,
                boxShadow: '0 5px 10px rgba(0, 0, 0, 0.2)',
                duration: 0.3,
                ease: 'power2.in'
            });
        });
    });
});
