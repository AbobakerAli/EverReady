document.addEventListener('DOMContentLoaded', function () {
    // Initialize GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Hero section animations
    const heroTl = gsap.timeline({
        scrollTrigger: {
            trigger: '.about-hero',
            start: 'top center',
            end: 'bottom center',
            toggleActions: 'play none none reverse'
        }
    });

    heroTl
        .from('.about-title', {
            y: 100,
            opacity: 0,
            duration: 1.2,
            ease: 'power3.out'
        })
        .from('.team-image', {
            x: -100,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
        }, '-=0.5')
        .from('.about-content', {
            x: 100,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
        }, '-=0.8');

    // Stats counter animation
    const stats = document.querySelectorAll('.stat-item h3');
    stats.forEach(stat => {
        const value = stat.innerText;
        const endValue = parseInt(value);
        
        gsap.to(stat, {
            scrollTrigger: {
                trigger: stat,
                start: 'top bottom-=100',
                toggleActions: 'play none none reverse'
            },
            innerText: endValue,
            duration: 2,
            snap: { innerText: 1 },
            ease: 'power2.out'
        });
    });

    // Mission cards animation
    gsap.utils.toArray('.mission-card').forEach((card, index) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top bottom-=100',
                toggleActions: 'play none none reverse'
            },
            x: index % 2 === 0 ? -100 : 100,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
        });
    });

    // History section timeline animation
    const timeline = document.querySelector('.history-section .timeline');
    if (timeline) {
        // Animate timeline items
        const timelineItems = gsap.utils.toArray('.timeline-item');
        timelineItems.forEach((item, index) => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: item,
                    start: 'top bottom-=100',
                    end: 'center center',
                    toggleActions: 'play none none reverse'
                }
            });

            const content = item.querySelector('.content');
            const year = item.querySelector('.year');

            // Create animation sequence
            tl.from(content, {
                y: 50,
                duration: 0.6,
                ease: 'power2.out'
            })
            .from(year, {
                y: -20,
                duration: 0.4,
                ease: 'back.out(1.7)'
            }, '-=0.3');

            // Add hover animations
            item.addEventListener('mouseenter', () => {
                gsap.to(content, {
                    y: -5,
                    duration: 0.3,
                    ease: 'power2.out'
                });
                gsap.to(year, {
                    scale: 1.1,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            });

            item.addEventListener('mouseleave', () => {
                gsap.to(content, {
                    y: 0,
                    duration: 0.3,
                    ease: 'power2.out'
                });
                gsap.to(year, {
                    scale: 1,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            });
        });
    }

    // Capability cards animation
    gsap.utils.toArray('.capability-card').forEach((card, index) => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: card,
                start: 'top bottom-=100',
                toggleActions: 'play none none reverse'
            }
        });

        tl.from(card, {
            y: 100,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out'
        })
        .from(card.querySelector('.capability-image'), {
            scale: 0.8,
            opacity: 0,
            duration: 0.6,
            ease: 'back.out(1.7)'
        }, '-=0.4')
        .from(card.querySelector('h3'), {
            y: 20,
            opacity: 0,
            duration: 0.4
        }, '-=0.2');
    });

    // Certification items animation
    gsap.utils.toArray('.cert-item').forEach((item, index) => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: item,
                start: 'top bottom-=100',
                toggleActions: 'play none none reverse'
            }
        });

        tl.from(item, {
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out'
        })
        .from(item.querySelector('.cert-icon'), {
            scale: 0,
            rotation: 180,
            duration: 0.6,
            ease: 'back.out(1.7)'
        }, '-=0.4');
    });

    // Parallax effect for background shapes
    gsap.utils.toArray('.shape').forEach((shape, index) => {
        gsap.to(shape, {
            scrollTrigger: {
                trigger: '.about-hero',
                start: 'top top',
                end: 'bottom top',
                scrub: 1
            },
            y: (index + 1) * 100,
            ease: 'none'
        });
    });

    // Mouse move effect for cards
    document.querySelectorAll('.mission-card, .capability-card, .cert-item').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const xPercent = (x / rect.width - 0.5) * 20;
            const yPercent = (y / rect.height - 0.5) * 20;
            
            gsap.to(card, {
                rotationY: xPercent,
                rotationX: -yPercent,
                duration: 0.5,
                ease: 'power2.out'
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                rotationY: 0,
                rotationX: 0,
                duration: 0.5,
                ease: 'power2.out'
            });
        });
    });

    // Add footer animations
    initFooterAnimations();
});
