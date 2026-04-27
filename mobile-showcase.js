/* ================================================================
   MOBILE SHOWCASE — Phone Mockup Slider
   Fade-cycle between screenshots inside the phone frame.
   ================================================================ */
(function () {
  'use strict';

  var INTERVAL = 2800;

  function initShowcase(wrapper) {
    var slides = Array.prototype.slice.call(wrapper.querySelectorAll('.phone-slide'));
    var dots   = Array.prototype.slice.call(wrapper.querySelectorAll('.phone-dot'));
    var label  = wrapper.querySelector('.phone-screen-label');

    if (!slides.length) return;

    /* Single-image fallback: show first slide statically, no timer */
    if (slides.length === 1) {
      slides[0].classList.add('is-active');
      if (dots[0]) dots[0].classList.add('is-active');
      if (label) {
        var img = slides[0].querySelector('img');
        label.textContent = img ? (img.alt || '') : '';
      }
      return;
    }

    var current = 0;
    var timer;

    function activate(index) {
      slides[current].classList.remove('is-active');
      if (dots[current]) dots[current].classList.remove('is-active');

      current = ((index % slides.length) + slides.length) % slides.length;

      slides[current].classList.add('is-active');
      if (dots[current]) dots[current].classList.add('is-active');

      if (label) {
        var activeImg = slides[current].querySelector('img');
        label.textContent = activeImg ? (activeImg.alt || '') : '';
      }
    }

    function startTimer() {
      clearInterval(timer);
      timer = setInterval(function () {
        activate(current + 1);
      }, INTERVAL);
    }

    /* Dot click → jump to that slide and restart timer */
    dots.forEach(function (dot, i) {
      dot.addEventListener('click', function () {
        activate(i);
        startTimer();
      });
    });

    /* Pause on hover or keyboard focus */
    wrapper.addEventListener('mouseenter', function () { clearInterval(timer); });
    wrapper.addEventListener('mouseleave', startTimer);
    wrapper.addEventListener('focusin',    function () { clearInterval(timer); });
    wrapper.addEventListener('focusout',   startTimer);

    activate(0);
    startTimer();
  }

  function init() {
    document.querySelectorAll('.phone-showcase-wrapper').forEach(initShowcase);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
