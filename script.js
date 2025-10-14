// Triple T Learning Center - Interactive Landing Page
// Professional and smooth user experience with engaging animations

class TripleTWebsite {
    constructor() {
        this.init();
    }

    init() {
        this.setupMobileMenu();
        this.fixBiologyCardLayout();
        this.setupScrollAnimations();
        this.setupSubjectAnimations();
        this.setupTestimonialAnimations();
        this.setupNavigationEffects();
        this.setupFloatingElements();
        this.setupSmoothScrolling();
        this.setupParallaxEffects();
        this.setupContactAnimations();
    }

    // Force Biology, Computer Science, and Psychology cards to match Chemistry layout
    fixBiologyCardLayout() {
        // Wait for DOM to be ready
        setTimeout(() => {
            // Fix Biology, Computer Science, and Psychology cards
            const cardsToFix = ['biology', 'computer-science', 'psychology'];
            
            cardsToFix.forEach(subject => {
                const section = document.querySelector(`[data-subject="${subject}"]`);
                if (section) {
                    const content = section.querySelector('.subject-content');
                    const visual = section.querySelector('.subject-visual');
                    
                    if (content && visual) {
                        // PHYSICALLY MOVE the elements to match Chemistry layout
                        section.removeChild(visual);
                        section.appendChild(visual);
                        
                        // Force inline styles as backup
                        content.style.order = '1';
                        visual.style.order = '2';
                    }
                }
            });
            
            console.log('Biology, Computer Science, and Psychology card layouts PHYSICALLY FIXED!');
        }, 100);
    }

    // Mobile menu toggle
    setupMobileMenu() {
        const mobileToggle = document.querySelector('.mobile-menu-toggle');
        const navLinks = document.querySelector('.nav-links');
        
        if (!mobileToggle || !navLinks) return;
        
        mobileToggle.addEventListener('click', () => {
            mobileToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileToggle.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!mobileToggle.contains(e.target) && !navLinks.contains(e.target)) {
                mobileToggle.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    }

    // Smooth scrolling to sections
    setupSmoothScrolling() {
        // Override default smooth scrolling for better performance
        document.documentElement.style.scrollBehavior = 'auto';
        
        // Add smooth scrolling to all anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const href = anchor.getAttribute('href');
                
                // Special handling for home link - scroll to top
                if (href === '#home') {
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    });
                    return;
                }
                
                const target = document.querySelector(href);
                if (target) {
                    this.scrollToElement(target);
                }
            });
        });
    }

    scrollToElement(element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }

    // Intersection Observer for scroll animations
    setupScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    
                    // Trigger subject-specific animations
                    if (entry.target.classList.contains('subject-section')) {
                        this.triggerSubjectAnimation(entry.target);
                    }
                    
                    // Trigger testimonial animations
                    if (entry.target.classList.contains('testimonial-card')) {
                        this.triggerTestimonialAnimation(entry.target);
                    }
                }
            });
        }, observerOptions);

        // Ensure sections are visible by default
        document.querySelectorAll('.subject-section').forEach(section => {
            section.style.opacity = '1';
            section.style.visibility = 'visible';
            section.style.transform = 'translateX(0)';
        });

        // Observe elements for animation
        document.querySelectorAll('.subject-section, .testimonial-card, .contact-item').forEach(el => {
            observer.observe(el);
        });
    }

    // Subject-specific animations
    setupSubjectAnimations() {
        const subjects = [
            'biology', 'chemistry', 'computer-science', 
            'mathematics', 'psychology', 'physics'
        ];

        subjects.forEach(subject => {
            const section = document.querySelector(`[data-subject="${subject}"]`);
            if (section) {
                this.createSubjectAnimation(section, subject);
            }
        });
    }

    createSubjectAnimation(section, subject) {
        const visual = section.querySelector('.subject-visual');
        if (!visual) return;

        // Create animated elements based on subject
        switch (subject) {
            case 'biology':
                this.createBiologyAnimation(visual);
                break;
            case 'chemistry':
                this.createChemistryAnimation(visual);
                break;
            case 'computer-science':
                this.createCSAnimation(visual);
                break;
            case 'mathematics':
                this.createMathAnimation(visual);
                break;
            case 'psychology':
                this.createPsychologyAnimation(visual);
                break;
            case 'physics':
                this.createPhysicsAnimation(visual);
                break;
        }
    }

    createBiologyAnimation(container) {
        // Enhanced DNA helix animation
        const dnaHelix = container.querySelector('.dna-helix');
        if (dnaHelix) {
            dnaHelix.style.animation = 'helixRotate 3s linear infinite';
        }

        // Cell division effect
        const cell = container.querySelector('.cell-animation');
        if (cell) {
            setInterval(() => {
                cell.style.transform = 'translate(-50%, -50%) scale(' + (1 + Math.sin(Date.now() * 0.001) * 0.1) + ')';
            }, 16);
        }
    }

    createChemistryAnimation(container) {
        // Molecule bonding animation
        const molecules = container.querySelectorAll('.molecule-structure::before, .molecule-structure::after');
        molecules.forEach((molecule, index) => {
            molecule.style.animationDelay = `${index * 0.5}s`;
        });

        // Reaction chain effect
        const reaction = container.querySelector('.reaction-animation');
        if (reaction) {
            let isAnimating = false;
            setInterval(() => {
                if (!isAnimating) {
                    isAnimating = true;
                    reaction.style.animation = 'none';
                    setTimeout(() => {
                        reaction.style.animation = 'reactionFlow 2s ease-in-out infinite';
                        isAnimating = false;
                    }, 100);
                }
            }, 4000);
        }
    }

    createCSAnimation(container) {
        // Code typing effect
        const codeAnimation = container.querySelector('.code-animation');
        if (codeAnimation) {
            const codeSnippets = [
                'function solve() {\n  return success;\n}',
                'class Student {\n  constructor(name) {\n    this.name = name;\n  }\n}',
                'const api = {\n  getData() {\n    return fetch(url);\n  }\n}'
            ];
            
            let currentIndex = 0;
            setInterval(() => {
                codeAnimation.textContent = codeSnippets[currentIndex];
                currentIndex = (currentIndex + 1) % codeSnippets.length;
            }, 3000);
        }

        // Circuit pattern animation
        const circuit = container.querySelector('.circuit-pattern');
        if (circuit) {
            circuit.style.background = `linear-gradient(${Date.now() * 0.01}deg, transparent 49%, var(--accent-gold) 49%, var(--accent-gold) 51%, transparent 51%)`;
        }
    }

    createMathAnimation(container) {
        // Equation rotation
        const equation = container.querySelector('.equation-animation');
        if (equation) {
            const symbols = ['∫', '∑', '√', 'π', '∞'];
            let currentSymbol = 0;
            setInterval(() => {
                equation.textContent = symbols[currentSymbol];
                currentSymbol = (currentSymbol + 1) % symbols.length;
            }, 2000);
        }

        // Graph drawing effect
        const graph = container.querySelector('.graph-animation');
        if (graph) {
            graph.style.animation = 'graphDraw 2s ease-in-out infinite';
        }
    }

    createPsychologyAnimation(container) {
        // Brain wave animation
        const brain = container.querySelector('.brain-animation');
        if (brain) {
            brain.style.animation = 'brainThink 2s ease-in-out infinite';
        }

        // Thought bubble sequence
        const bubbles = container.querySelectorAll('.thought-bubbles, .thought-bubbles::before, .thought-bubbles::after');
        bubbles.forEach((bubble, index) => {
            bubble.style.animationDelay = `${index * 0.3}s`;
        });
    }

    createPhysicsAnimation(container) {
        // Atomic orbital animation
        const atom = container.querySelector('.atom-animation');
        if (atom) {
            atom.style.animation = 'atomSpin 3s linear infinite';
        }

        // Wave interference
        const wave = container.querySelector('.wave-animation');
        if (wave) {
            setInterval(() => {
                const amplitude = 20 + Math.sin(Date.now() * 0.002) * 10;
                wave.style.height = `${amplitude}px`;
            }, 16);
        }
    }

    triggerSubjectAnimation(section) {
        const subject = section.dataset.subject;
        const visual = section.querySelector('.subject-visual');
        
        if (visual) {
            // Add entrance animation
            visual.style.opacity = '0';
            visual.style.transform = 'scale(0.8)';
            
            setTimeout(() => {
                visual.style.transition = 'all 0.8s ease';
                visual.style.opacity = '1';
                visual.style.transform = 'scale(1)';
            }, 200);
        }

        // Trigger subject-specific effects
        this.animateSubjectElements(section, subject);
    }

    animateSubjectElements(section, subject) {
        const elements = section.querySelectorAll('.subject-icon, .subject-text h3, .subject-features li');
        
        elements.forEach((element, index) => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                element.style.transition = 'all 0.6s ease';
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }

    // Testimonial animations
    setupTestimonialAnimations() {
        const testimonialCards = document.querySelectorAll('.testimonial-card');
        
        testimonialCards.forEach((card, index) => {
            // Staggered entrance animation
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px) scale(0.95)';
            card.style.transition = 'all 0.6s ease';
            
            // Add hover effects
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-10px) scale(1.02)';
                this.animateRatingStars(card);
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0) scale(1)';
            });
        });
    }

    triggerTestimonialAnimation(card) {
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0) scale(1)';
            
            // Animate rating stars
            this.animateRatingStars(card);
        }, 200);
    }

    animateRatingStars(card) {
        const stars = card.querySelectorAll('.rating-stars i');
        stars.forEach((star, index) => {
            star.style.animation = 'none';
            setTimeout(() => {
                star.style.animation = 'starGlow 0.6s ease';
            }, index * 100);
        });
    }

    // Navigation effects
    setupNavigationEffects() {
        const navbar = document.querySelector('.navbar');
        if (!navbar) return; // Exit if navbar doesn't exist
        
        window.addEventListener('scroll', () => {
            const currentScrollY = window.scrollY;
            
            // Navbar background opacity based on scroll
            const opacity = Math.min(currentScrollY / 100, 0.95);
            navbar.style.background = `rgba(27, 41, 81, ${opacity})`;
            
            // Keep navbar always visible - removed auto-hide on scroll
            navbar.style.transform = 'translateY(0)';
        });

        // Active navigation link highlighting
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-links a');

        window.addEventListener('scroll', () => {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.getBoundingClientRect().top;
                if (sectionTop <= 100) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        });
    }

    // Floating elements animation
    setupFloatingElements() {
        const floatingElements = document.querySelectorAll('.floating-elements .element');
        
        floatingElements.forEach((element, index) => {
            // Random movement
            setInterval(() => {
                const randomX = (Math.random() - 0.5) * 20;
                const randomY = (Math.random() - 0.5) * 20;
                element.style.transform = `translate(${randomX}px, ${randomY}px)`;
            }, 3000 + index * 500);
        });

        // Floating social buttons
        const floatingBtns = document.querySelectorAll('.floating-btn');
        floatingBtns.forEach(btn => {
            btn.addEventListener('mouseenter', () => {
                btn.style.transform = 'scale(1.1) translateY(-5px)';
            });
            
            btn.addEventListener('mouseleave', () => {
                btn.style.transform = 'scale(1) translateY(0)';
            });
        });
    }

    // Contact methods animation
    setupContactAnimations() {
        const contactCards = document.querySelectorAll('.contact-method-card');
        
        contactCards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'all 0.6s ease';
            
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 200);
        });
    }


    // Parallax effects
    setupParallaxEffects() {
        // Disable parallax on mobile for better performance
        if (window.innerWidth <= 768) return;
        
        const hero = document.querySelector('.hero');
        const floatingElements = document.querySelectorAll('.floating-elements .element');
        
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            
            // Hero parallax
            if (hero) {
                hero.style.transform = `translateY(${scrolled * 0.5}px)`;
            }
            
            // Floating elements parallax
            floatingElements.forEach((element, index) => {
                const speed = 0.2 + (index * 0.1);
                element.style.transform = `translateY(${scrolled * speed}px)`;
            });
        });
    }

    // Utility methods
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }
}

// Initialize the website when DOM is loaded
let websiteInstance;
document.addEventListener('DOMContentLoaded', () => {
    try {
        // Inject additional CSS styles
        const additionalStyles = `
            @keyframes starGlow {
                0%, 100% { transform: scale(1); color: var(--accent-gold); }
                50% { transform: scale(1.2); color: #FFD700; text-shadow: 0 0 10px #FFD700; }
            }

            .nav-links a.active {
                color: var(--accent-gold);
            }

            .nav-links a.active::after {
                width: 100%;
            }

            .form-group.focused input,
            .form-group.focused select,
            .form-group.focused textarea {
                border-color: var(--accent-gold);
                box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.1);
            }

            .error-message {
                color: #dc3545;
                font-size: 0.875rem;
                margin-top: 5px;
                animation: fadeIn 0.3s ease;
            }

            @keyframes fadeIn {
                from { opacity: 0; transform: translateY(-5px); }
                to { opacity: 1; transform: translateY(0); }
            }
        `;
        
        const styleSheet = document.createElement('style');
        styleSheet.textContent = additionalStyles;
        document.head.appendChild(styleSheet);
        
        // Initialize the website
        websiteInstance = new TripleTWebsite();
        
        // Add loading animation
        document.body.style.opacity = '0';
        setTimeout(() => {
            document.body.style.transition = 'opacity 0.5s ease';
            document.body.style.opacity = '1';
        }, 100);
        
        console.log('Triple T Website initialized successfully!');
    } catch (error) {
        console.error('Error initializing website:', error);
        // Make sure page is visible even if there's an error
        document.body.style.opacity = '1';
    }
});

// Handle page visibility for performance
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        // Pause animations when page is not visible
        document.querySelectorAll('.subject-visual, .floating-elements .element').forEach(el => {
            el.style.animationPlayState = 'paused';
        });
    } else {
        // Resume animations when page becomes visible
        document.querySelectorAll('.subject-visual, .floating-elements .element').forEach(el => {
            el.style.animationPlayState = 'running';
        });
    }
});

// Preload critical resources
const preloadResources = () => {
    const criticalImages = [
        'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"%3E%3Ccircle cx="100" cy="100" r="95" fill="%231B2951" stroke="%23D4AF37" stroke-width="4"/%3E%3Ctext x="100" y="50" text-anchor="middle" fill="%23D4AF37" font-family="serif" font-size="12" font-weight="bold"%3ETRIPLE T LEARNING CENTER%3C/text%3E%3Ctext x="100" y="120" text-anchor="middle" fill="%23D4AF37" font-family="serif" font-size="8"%3ETTLC%3C/text%3E%3Crect x="85" y="130" width="30" height="20" fill="%23D4AF37" rx="2"/%3E%3Ctext x="100" y="142" text-anchor="middle" fill="%231B2951" font-family="serif" font-size="6" font-weight="bold"%3EEXCELLENCE%3C/text%3E%3C/svg%3E'
    ];
    
    criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
};

preloadResources();
