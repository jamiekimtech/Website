// Toggle Menu

// ScrollTrigger

gsap.registerPlugin(ScrollTrigger);

const dc_behinds = gsap.utils.toArray('#dc-behind');

dc_behinds.forEach((dc_behind) => {
  gsap.to(dc_behind, {
    scale: 1.2,
    opacity: 0.68,
    scrollTrigger: {
      trigger: '#dc-behind',
      id: '#dc-behind',
      toggleActions: 'restart none none reverse',
      start: '-30 60',
      end: '0 30',
      scrub: 0.9,
    },
  });
});

gsap.to('.blackScreen', {
  opacity: 0.9,
  scrollTrigger: {
    trigger: '.scroll',
    id: '#dc-behind-1',
    toggleActions: 'restart none none reverse',
    start: '0 200',
    end: '0 250',
    scrub: 3,
  },
});

gsap.to('.dc-behind-1', {
  scale: 1.1,
  y: 10,
  scrollTrigger: {
    trigger: '#dc-behind-1',
    id: '#dc-behind-1',
    toggleActions: 'restart none none reverse',
    start: '-30 60',
    end: '0 30',
    scrub: true,
  },
});

gsap.to('.dc-front-2-container', {
  scale: 1.3,
  y: 120,
  scrollTrigger: {
    trigger: '#dc-front-2',
    id: '#dc-behind',
    toggleActions: 'restart none none reverse',
    start: '-30 60',
    end: '0 30',
    scrub: true,
  },
});

gsap.to('.dc-front-1-container', {
  scale: 1.25,
  y: 100,
  scrollTrigger: {
    trigger: '#dc-front-1',
    id: '#dc-behind',
    toggleActions: 'restart none none reverse',
    start: '-30 45',
    end: '0 30',
    scrub: true,
  },
});
