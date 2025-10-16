/* PayFast inline loader (kept local for reliability) */
(function(){
  var s = document.createElement('script');
  s.src = 'https://www.payfast.co.za/onsite/engine.js';
  s.async = true;
  s.id = 'payfast-onsite-js';
  document.head.appendChild(s);
})();
