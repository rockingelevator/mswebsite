/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
exports.onRouteUpdate = ({ location }) => {
  const evt = document.createEvent('Event');
  evt.initEvent('load', false, false);
  window.dispatchEvent(evt);
};
