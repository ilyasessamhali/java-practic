document.write("<H1>https://forcemipsum.com/</H1>")
const username = document.getElementById('username')
const password = document.getElementById('password')
const confirme = document.getElementById('confirme')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => { e.preventDefault(); 
  let messages = []
  if (username.value === '' || username.value == null) {
    messages.push('Name is required')
  }


  if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
  }
}) 
if(password.Value === '') {
  setErrorFor(password, 'Password cannot be blank');
} else {
  setSuccessFor(password);
}

if(confirme.value === '') {
  setErrorFor(confirme, 'Password2 cannot be blank');
} else if(password.value !== confirme) {
  setErrorFor(confirme, 'Passwords does not match');
} else{
  setSuccessFor(confirme);
}

