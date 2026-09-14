const header = document.querySelector('.site-header');
const menuToggle = document.querySelector('.menu-toggle');
menuToggle?.addEventListener('click', () => {
  const open = header.classList.toggle('menu-open');
  menuToggle.setAttribute('aria-expanded', String(open));
});
document.querySelectorAll('.site-header nav a').forEach(link => link.addEventListener('click', () => {
  header.classList.remove('menu-open');
  menuToggle?.setAttribute('aria-expanded', 'false');
}));

const cursor = document.querySelector('.cursor-dot');
window.addEventListener('pointermove', e => {
  if (cursor) { cursor.style.left = `${e.clientX}px`; cursor.style.top = `${e.clientY}px`; }
});
document.querySelectorAll('a, button, .work-item').forEach(el => {
  el.addEventListener('mouseenter', () => { if (cursor) { cursor.style.width = '22px'; cursor.style.height = '22px'; } });
  el.addEventListener('mouseleave', () => { if (cursor) { cursor.style.width = '10px'; cursor.style.height = '10px'; } });
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
}, { threshold: 0.12 });
document.querySelectorAll('.section, .work-item, .experience-card, .education-strip').forEach(el => { el.classList.add('reveal'); observer.observe(el); });
