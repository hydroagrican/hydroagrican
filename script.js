const form = document.getElementById('contactForm');
form.addEventListener('submit', function(e) {
  e.preventDefault();
  const data = new FormData(form);
  const name = data.get('name');
  const email = data.get('email');
  const message = data.get('message');
  const mailtoLink = `mailto:crad.contact@gmail.com?subject=HydroAgriCan Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(message + "\n\nEmail: " + email)}`;
  window.location.href = mailtoLink;
  document.getElementById('thanks').style.display = 'block';
});
