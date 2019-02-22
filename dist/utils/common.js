// rem
!function (global) {
  var window = global || this,
    width = 720,
    docEl = window.document.documentElement,
    dpr = window.devicePixelRatio || 1,
    resizeEvt = 'resize',
    resizeCall = (function () {
      var clientWidth = docEl.clientWidth;
      if (!clientWidth) {
        docEl.style.fontSize = 100 + 'px';
      } else {
        docEl.style.fontSize = 100 * (clientWidth / width) + 'px';
      }
      return arguments.callee;
    })();

  dpr = dpr >= 3 ? 3 : dpr >= 2 ? 2 : 1;
  docEl.setAttribute('data-dpr', dpr);

  window.addEventListener && window.addEventListener(resizeEvt, resizeCall, false);
} (this);
