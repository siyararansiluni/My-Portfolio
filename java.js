document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const message = document.getElementById('message');
  const formMessage = document.getElementById('form-message');

  if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
    formMessage.textContent = "All fields are required.";
    formMessage.style.color = "red";
    return;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,6}$/i;
  if (!emailPattern.test(email.value)) {
    formMessage.textContent = "Please enter a valid email address.";
    formMessage.style.color = "red";
    return;
  }

  formMessage.textContent = "Thank you for your message!";
  formMessage.style.color = "green";

 
  name.value = '';
  email.value = '';
  message.value = '';
});