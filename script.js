function debounce(callback, delay, immediate = false) {
  let timeoutId;

  return function (...args) {
    const executeCallback = () => {
      callback.apply(this, args);
    };

    clearTimeout(timeoutId);

    if (immediate && !timeoutId) {
      executeCallback();
    }

    timeoutId = setTimeout(executeCallback, delay);
  }
  
  module.exports = debounce;
