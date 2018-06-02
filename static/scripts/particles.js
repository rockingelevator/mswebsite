window.addEventListener('load', e => {
  particlesJS.load('particles-js', `/scripts/particles.json`, () => {
    console.log('callback - particles.js config loaded');
  });
});
