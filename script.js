
// Wedding date: 5 December 2026, 7:00 PM
const weddingDate = new Date(2026, 11, 3, 19, 0, 0);

// Countdown
function updateCountdown() {
  const diff = Math.max(0, weddingDate.getTime() - Date.now());

  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const minutes = Math.floor((diff % 3600000) / 60000);
  const seconds = Math.floor((diff % 60000) / 1000);

  document.getElementById('days').textContent = String(days).padStart(2, '0');
  document.getElementById('hours').textContent = String(hours).padStart(2, '0');
  document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
  document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

updateCountdown();
setInterval(updateCountdown, 1000);


// Mobile Menu (only if menu exists)
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
    toggle.textContent = isOpen ? '✕' : '☰';
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.textContent = '☰';
    });
  });
}


// Fireworks Celebration
function launchFireworks() {
  const colors = ['#8d78a8', '#e6b85c', '#f5a6b8', '#ffffff', '#b9a5cc'];

  for (let burst = 0; burst < 5; burst++) {
    const originX = 10 + Math.random() * 80;
    const originY = 15 + Math.random() * 45;

    for (let i = 0; i < 30; i++) {
      const particle = document.createElement('span');

      particle.className = 'firework-particle';

      const angle = (Math.PI * 2 * i) / 30;
      const distance = 60 + Math.random() * 110;

      particle.style.left = originX + 'vw';
      particle.style.top = originY + 'vh';

      particle.style.background =
        colors[Math.floor(Math.random() * colors.length)];

      particle.style.setProperty('--tx', Math.cos(angle) * distance + 'px');
      particle.style.setProperty('--ty', Math.sin(angle) * distance + 'px');
      particle.style.animationDelay = burst * 180 + 'ms';

      document.body.appendChild(particle);

      setTimeout(() => particle.remove(), 2500);
    }
  }
}


// RSVP Form
const rsvpForm = document.getElementById('rsvpForm');

if (rsvpForm) {
  rsvpForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const data = new FormData(rsvpForm);
    const name = data.get('name');
    const attendance = data.get('attendance');

    document.getElementById('formNote').textContent =
      `Thank you, ${name}! Your response (${attendance}) has been received. ❤️`;

    launchFireworks();

    rsvpForm.reset();
  });
}
