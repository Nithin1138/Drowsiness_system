document.addEventListener("DOMContentLoaded", () => {
    // 1. Initialize Particles.js
    if (typeof particlesJS !== 'undefined') {
        particlesJS("particles-js", {
            "particles": {
                "number": {
                    "value": 80,
                    "density": { "enable": true, "value_area": 800 }
                },
                "color": { "value": "#4facfe" },
                "shape": { "type": "circle" },
                "opacity": {
                    "value": 0.5,
                    "random": false,
                    "anim": { "enable": false }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": { "enable": false }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#4facfe",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 2,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": { "enable": false }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": { "enable": true, "mode": "grab" },
                    "onclick": { "enable": true, "mode": "push" },
                    "resize": true
                },
                "modes": {
                    "grab": { "distance": 140, "line_linked": { "opacity": 1 } },
                    "push": { "particles_nb": 4 }
                }
            },
            "retina_detect": true
        });
    }

    // 2. Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 3. Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // 4. GSAP Animations
    if (typeof gsap !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);

        // Hero Animations
        const heroTl = gsap.timeline();
        heroTl.from(".navbar", { y: -50, opacity: 0, duration: 0.8, ease: "power3.out" })
              .from(".hero-title", { y: 30, opacity: 0, duration: 0.8, ease: "power3.out" }, "-=0.4")
              .from(".hero-subtitle", { y: 20, opacity: 0, duration: 0.8, ease: "power3.out" }, "-=0.6")
              .from(".hero-cta .btn", { y: 20, opacity: 0, duration: 0.5, stagger: 0.2, ease: "back.out(1.7)" }, "-=0.4");

        // Features Animations
        gsap.from(".section-header", {
            scrollTrigger: {
                trigger: "#features",
                start: "top 80%",
            },
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out"
        });

        gsap.from(".feature-card", {
            scrollTrigger: {
                trigger: ".features-grid",
                start: "top 80%",
            },
            y: 50,
            opacity: 0,
            duration: 0.6,
            stagger: 0.15,
            ease: "back.out(1.2)"
        });

        // CTA Animations
        const ctaTl = gsap.timeline({
            scrollTrigger: {
                trigger: "#how-it-works",
                start: "top 75%",
            }
        });

        ctaTl.from(".cta-content h2", { x: -30, opacity: 0, duration: 0.8, ease: "power2.out" })
             .from(".cta-content p", { x: -20, opacity: 0, duration: 0.6, ease: "power2.out" }, "-=0.4")
             .from(".step", { x: -20, opacity: 0, duration: 0.5, stagger: 0.15, ease: "power2.out" }, "-=0.2")
             .from(".cta-content .btn", { scale: 0.9, opacity: 0, duration: 0.5, ease: "back.out(1.5)" }, "-=0.2")
             .from(".cta-image-container", { scale: 0.9, opacity: 0, duration: 0.8, ease: "power3.out" }, "<");

        // Float animation for mockup
        gsap.to(".mockup-box", {
            y: -15,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });
    }
});