// Small interactivity: mobile menu, year, contact form handling
document.getElementById('year').textContent = new Date().getFullYear();

const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');
if(navToggle){
  navToggle.addEventListener('click', () => {
    mainNav.classList.toggle('show');
  });
}

function handleForm(e){
  e.preventDefault();
  const form = e.target;
  const msg = document.getElementById('formMessage');
  // This demo doesn't submit anywhere. Replace with fetch() to your endpoint or Formspree/Netlify Forms.
  msg.textContent = "Thanks — message captured locally. Replace with your backend to actually send.";
  msg.style.color = 'var(--accent)';
  form.reset();
  setTimeout(()=> msg.textContent = '', 4000);
  return false;
}