const axios = require('axios');


//  Register to the app 
const register = document.getElementById("btnRegister");

const getEmail = document.getElementById("email");
const password = document.getElementById("password");

register.addEventListener('click', () => {
  const email = getEmail.value;
  const pass = password.value;
  axios.post('http://localhost:3000/api/user/register', {
    email: email,
    password: pass
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
});
