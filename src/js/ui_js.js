(function ($) {

  // ripple
  document.querySelectorAll(`[effect="ripple"]`).forEach(el => {
    el.addEventListener('click', e => {
      e = e.touches ? e.touches[0] : e;
      const r = el.getBoundingClientRect(),
            d = Math.sqrt(Math.pow(r.width, 2) + Math.pow(r.height, 2)) * 2;
      el.style.cssText = `--s: 0; --o: 1;`;
      el.offsetTop;
      el.style.cssText = `--t: 1; --o: 0; --d: ${d}; --x:${e.clientX - r.left}; --y:${e.clientY - r.top};`;
    });
  });

  // drop layer
  $(function(){
    var input = $('.focus-btn-custom');
    var btnFix = $('.btn-fix-1');
    
    input.on('focus', function(){
      btnFix.addClass('focus');
      return false;
    });

    input.on('blur', function(){
      btnFix.removeClass('focus');
      return false;
    });
  });


})(jQuery);