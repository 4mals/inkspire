window.addEventListener('load', function() {
  const h1Element = document.querySelector('h1');
  const h2Element = document.querySelector('h2');

  function adjustH2Position() {
    const h1Height = h1Element.offsetHeight;
    h2Element.style.bottom = `${h1Height + 140}px`;
  }

  adjustH2Position();
  window.addEventListener('resize', adjustH2Position);
});
