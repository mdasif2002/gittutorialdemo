const form = document.getElementById('myForm');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
  
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
  }