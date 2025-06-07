document.addEventListener('DOMContentLoaded', () => {
    const f1 = document.getElementById('f1-loader');
    if (f1 == null) {
      return;
    }
    requestAnimationFrame(() => {
      f1.classList.add('drive');
    });
    window.addEventListener('load', () => {
      setTimeout(() => {
        f1.style.opacity = '0';
      }, 3100);
      setTimeout(() => {
        f1.style.display = 'none';
      }, 3600);
    });
});