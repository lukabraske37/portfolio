// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add active state to navigation links based on scroll position
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

const highlightNav = () => {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
};

window.addEventListener('scroll', highlightNav);

// Add parallax effect to hero background
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});

// Animate elements on scroll
const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            fadeInObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

// Observe all cards and sections
document.querySelectorAll('.skill-card, .project-card, .timeline-item').forEach(el => {
    fadeInObserver.observe(el);
});

// Add cursor effect for interactive elements
const createCursorEffect = () => {
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    document.querySelectorAll('a, button, .project-card, .skill-card').forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('cursor-hover'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('cursor-hover'));
    });
};

// Add stagger animation to project cards
const staggerElements = document.querySelectorAll('.project-card');
staggerElements.forEach((el, index) => {
    el.style.animationDelay = `${index * 0.1}s`;
});

// Console easter egg
console.log('%cHey there! 👋', 'font-size: 20px; font-weight: bold; color: #3B82F6;');
console.log('%cInterested in how this was built? Check out the code!', 'font-size: 14px; color: #9BA8AB;');
console.log('%cGitHub: https://github.com/lukabraske37', 'font-size: 12px; color: #6D28D9;');

// Mobile menu toggle (if needed in future)
const createMobileMenu = () => {
    const menuButton = document.createElement('button');
    menuButton.classList.add('mobile-menu-button');
    menuButton.innerHTML = '☰';

    const nav = document.querySelector('.nav');
    if (nav && window.innerWidth <= 768) {
        nav.appendChild(menuButton);

        menuButton.addEventListener('click', () => {
            const navLinks = document.querySelector('.nav-links');
            navLinks.classList.toggle('mobile-menu-open');
        });
    }
};

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // Add fade-in class to initial elements
    document.body.classList.add('loaded');

    // Optional: Initialize mobile menu on small screens
    if (window.innerWidth <= 768) {
        // createMobileMenu();
    }
});

// Performance optimization: Debounce scroll events
const debounce = (func, wait = 10) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

// Apply debounce to scroll handlers
window.addEventListener('scroll', debounce(highlightNav, 10));
