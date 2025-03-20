if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || !('querySelector' in document && 'localStorage' in window && 'addEventListener' in window)) {
  window.location = "../outdated-browser.html";
}