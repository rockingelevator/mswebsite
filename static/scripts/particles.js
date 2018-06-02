console.log('particles');
window.addEventListener('load', e => {
  console.log('load event listener in particles');
  particlesJS.load('particles-js', `/scripts/particles.json`, () => {
    console.log('callback - particles.js config loaded');
  });
});
