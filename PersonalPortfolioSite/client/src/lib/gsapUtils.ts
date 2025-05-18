import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

// Initialize GSAP animations
export const initAnimations = () => {
  // Ensure ScrollTrigger is registered
  gsap.registerPlugin(ScrollTrigger);

  // Hero Section Animation
  gsap.from('[data-animation="hero-content"]', { 
    duration: 1, 
    y: 50, 
    opacity: 0, 
    ease: 'power3.out' 
  });
  
  gsap.from('[data-animation="hero-image"]', { 
    duration: 1, 
    x: 50, 
    opacity: 0, 
    ease: 'power3.out',
    delay: 0.3
  });
  
  // About Section Animation
  gsap.from('[data-animation="about-content"]', {
    scrollTrigger: {
      trigger: '#about',
      start: 'top 80%',
    },
    duration: 1,
    y: 50,
    opacity: 0,
    ease: 'power3.out'
  });
  
  gsap.from('[data-animation="about-image"]', {
    scrollTrigger: {
      trigger: '#about',
      start: 'top 80%',
    },
    duration: 1,
    x: 50,
    opacity: 0,
    ease: 'power3.out',
    delay: 0.3
  });
  
  // Timeline Animation
  gsap.from('.timeline-item', {
    scrollTrigger: {
      trigger: '#experience',
      start: 'top 80%',
    },
    duration: 0.8,
    y: 50,
    opacity: 0,
    stagger: 0.2,
    ease: 'power3.out'
  });
  
  // Skills Animation
  gsap.from('[data-animation="skills-card"]', {
    scrollTrigger: {
      trigger: '#skills',
      start: 'top 80%',
      onEnter: () => animateProgressBars()
    },
    duration: 0.8,
    y: 30,
    opacity: 0,
    stagger: 0.2,
    ease: 'power3.out',
  });
  
  gsap.from('[data-animation="language-card"]', {
    scrollTrigger: {
      trigger: '[data-animation="language-card"]',
      start: 'top 90%',
    },
    duration: 0.8,
    y: 30,
    opacity: 0,
    stagger: 0.2,
    ease: 'power3.out'
  });
  
  // Projects Animation
  gsap.from('[data-animation="project-card"]', {
    scrollTrigger: {
      trigger: '#projects',
      start: 'top 80%',
    },
    duration: 0.8,
    y: 30,
    opacity: 0,
    stagger: 0.2,
    ease: 'power3.out'
  });
  
  // Achievements Animation
  gsap.from('[data-animation="achievement-card"]', {
    scrollTrigger: {
      trigger: '#achievements',
      start: 'top 80%',
      onEnter: () => animateCounters()
    },
    duration: 0.8,
    y: 30,
    opacity: 0,
    stagger: 0.2,
    ease: 'power3.out',
  });
  
  gsap.from('[data-animation="achievement-testimonial"]', {
    scrollTrigger: {
      trigger: '[data-animation="achievement-testimonial"]',
      start: 'top 90%',
    },
    duration: 0.8,
    y: 30,
    opacity: 0,
    ease: 'power3.out'
  });
  
  // Contact Animation
  gsap.from('[data-animation="contact-form"]', {
    scrollTrigger: {
      trigger: '#contact',
      start: 'top 80%',
    },
    duration: 0.8,
    x: -30,
    opacity: 0,
    ease: 'power3.out'
  });
  
  gsap.from('[data-animation="contact-info"]', {
    scrollTrigger: {
      trigger: '#contact',
      start: 'top 80%',
    },
    duration: 0.8,
    x: 30,
    opacity: 0,
    ease: 'power3.out'
  });
};

// Animate progress bars
export const animateProgressBars = () => {
  const progressBars = document.querySelectorAll('.progress-bar-fill');
  
  progressBars.forEach(bar => {
    const width = (bar as HTMLElement).dataset.width || '0';
    gsap.to(bar, {
      scaleX: parseInt(width) / 100,
      duration: 1.5,
      ease: 'power3.out'
    });
  });
};

// Animate counters
export const animateCounters = () => {
  const counters = document.querySelectorAll('[data-count]');
  
  counters.forEach(counter => {
    const target = parseInt((counter as HTMLElement).dataset.count || '0');
    let count = 0;
    const duration = 2000; // 2 seconds
    const step = Math.ceil(target / (duration / 30)); // Update every 30ms
    
    const timer = setInterval(() => {
      count += step;
      if (count >= target) {
        counter.textContent = target.toString();
        clearInterval(timer);
      } else {
        counter.textContent = count.toString();
      }
    }, 30);
  });
};
