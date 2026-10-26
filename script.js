// Bella's Spice Kitchen — site menu drawer (native <dialog>; no animation until motion is approved).
(function () {
  var drawer = document.getElementById('site-drawer');
  var openers = document.querySelectorAll('[data-drawer-open]');
  if (!drawer || typeof drawer.showModal !== 'function') return;

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  function setExpanded(value) {
    openers.forEach(function (btn) { btn.setAttribute('aria-expanded', String(value)); });
  }

  openers.forEach(function (btn) {
    btn.addEventListener('click', function () {
      drawer.showModal();
      setExpanded(true);
    });
  });

  drawer.addEventListener('close', function () { setExpanded(false); });

  drawer.addEventListener('click', function (event) {
    var link = event.target.closest('a[href^="#"]');
    if (link) {
      // In-page link: close first, then move focus and scroll to the section.
      event.preventDefault();
      drawer.close();
      var id = link.getAttribute('href');
      var target = document.querySelector(id);
      if (target) {
        target.focus({ preventScroll: true });
        target.scrollIntoView({ behavior: reduceMotion.matches ? 'auto' : 'smooth', block: 'start' });
        history.replaceState(null, '', id);
      }
      return;
    }
    // Backdrop clicks land on the <dialog> itself; the inner panel fills the visible drawer.
    if (event.target === drawer || event.target.closest('[data-drawer-close]') || event.target.closest('a[target="_blank"]')) {
      drawer.close();
    }
  });
})();
