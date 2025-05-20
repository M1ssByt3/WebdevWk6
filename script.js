// Tab switching
const tabs = document.querySelectorAll('.tab');
const sections = document.querySelectorAll('.dogs-container');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    sections.forEach(section => section.classList.add('hidden'));
    document.getElementById(tab.dataset.tab).classList.remove('hidden');
  });
});

// Adopt button interaction
const adoptButtons = document.querySelectorAll('.adopt-btn');
adoptButtons.forEach(button => {
  button.addEventListener('click', () => {
    button.textContent = 'Thanks for Adopting!';
    button.style.backgroundColor = '#ccc';
    button.disabled = true;
  });
});

// Keypress detection
document.addEventListener('keypress', (e) => {
  if (e.key.toLowerCase() === 'd') {
    alert('You pressed D for Dog! 🐕');
  }
});

// Secret double-click
document.body.addEventListener('dblclick', () => {
  alert('Secret Dog Trick Activated! 🐾✨');
});

// Form validation
const form = document.getElementById('adoptionForm');
const feedback = document.getElementById('form-feedback');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const password = document.getElementById('password');

  if (!name.value || !email.value || !password.value) {
    feedback.textContent = 'Please fill out all fields.';
    feedback.style.color = 'red';
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email.value)) {
    feedback.textContent = 'Please enter a valid email.';
    feedback.style.color = 'red';
    return;
  }

  if (password.value.length < 8) {
    feedback.textContent = 'Password must be at least 8 characters.';
    feedback.style.color = 'red';
    return;
  }

  feedback.textContent = 'Form submitted successfully!';
  feedback.style.color = 'green';
});

// Real-time feedback
const passwordInput = document.getElementById('password');
passwordInput.addEventListener('input', () => {
  if (passwordInput.value.length < 8) {
    feedback.textContent = 'Password too short';
    feedback.style.color = 'orange';
  } else {
    feedback.textContent = 'Password looks good!';
    feedback.style.color = 'green';
  }
});

// Image slider
const images = [
  'https://placedog.net/600?id=10',
  'https://placedog.net/600?id=20',
  'https://placedog.net/600?id=30'
];
let currentImage = 0;
const sliderImage = document.getElementById('slider-image');

document.getElementById('next').addEventListener('click', () => {
  currentImage = (currentImage + 1) % images.length;
  sliderImage.src = images[currentImage];
});

document.getElementById('prev').addEventListener('click', () => {
  currentImage = (currentImage - 1 + images.length) % images.length;
  sliderImage.src = images[currentImage];
});

// Secret long-press
let pressTimer;

document.body.addEventListener('mousedown', () => {
  pressTimer = setTimeout(() => {
    alert('Secret Long Press Activated! 🐾🔒');
  }, 1500); // 1.5 seconds
});

document.body.addEventListener('mouseup', () => {
  clearTimeout(pressTimer);
});

document.body.addEventListener('mouseleave', () => {
  clearTimeout(pressTimer);
});

// For mobile (touch support)
document.body.addEventListener('touchstart', () => {
  pressTimer = setTimeout(() => {
    alert('Secret Long Press Activated! 🐾🔒');
  }, 1500);
});

document.body.addEventListener('touchend', () => {
  clearTimeout(pressTimer);
});