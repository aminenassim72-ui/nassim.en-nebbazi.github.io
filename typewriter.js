const phrases = [
  "PhD student in Mathematics",
  "Université de Pau et des Pays de l'Adour"
];

const el = document.getElementById('typed');

if (el && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  let p = 0;
  let i = phrases[0].length;
  let deleting = true;

  function tick() {
    const full = phrases[p];
    i += deleting ? -1 : 1;
    el.textContent = full.slice(0, i);

    let delay = deleting ? 40 : 80;

    if (!deleting && i === full.length) {
      delay = 2000;
      deleting = true;
    } else if (deleting && i === 0) {
      deleting = false;
      p = (p + 1) % phrases.length;
      delay = 400;
    }
    setTimeout(tick, delay);
  }

  setTimeout(tick, 2000);
}
