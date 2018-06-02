window.addEventListener('load', e => {
  console.log('load event');
  particlesJS.load('particles-js', `/scripts/particles.json`, () => {
    console.log('callback - particles.js config loaded');
  });
});
