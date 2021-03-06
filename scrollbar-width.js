(function () {
  'use strict';
  var getScrollbarWidth, scrollbarWidth;

  scrollbarWidth = null;

  getScrollbarWidth = function (recalculate, cn) {
    var div1, div2;
    if (recalculate === null) {
      recalculate = false;
    }
    if ((scrollbarWidth !== null) && !recalculate) {
      return scrollbarWidth;
    }
    if (document.readyState === 'loading') {
      return null;
    }
    div1 = document.createElement('div');
    div2 = document.createElement('div');
    div1.style.width = div2.style.width = div1.style.height = div2.style.height = '100px';
    div1.style.overflow = 'scroll';
    div2.style.overflow = 'hidden';
    if (cn) {
      div1.className = div2.className = cn;
    }
    document.body.appendChild(div1);
    document.body.appendChild(div2);
    scrollbarWidth = Math.abs(div1.scrollHeight - div2.scrollHeight);
    document.body.removeChild(div1);
    document.body.removeChild(div2);
    return scrollbarWidth;
  };

  if (typeof define === 'function' && define.amd) {
    define([], function () {
      return getScrollbarWidth;
    });
  } else if (typeof exports !== 'undefined') {
    module.exports = getScrollbarWidth;
  } else {
    this.getScrollbarWidth = getScrollbarWidth;
  }

}).call(this);
