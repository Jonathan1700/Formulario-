const users = [
    { username: "admin", password: "1234" },
    { username: "user1", password: "abcd" }
  ];

  function showMessage(message, isError = true) {
    const messageDiv = document.getElementById("message");
    messageDiv.textContent = message;
    messageDiv.style.color = isError ? "red" : "green";
  }

  function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    const user = users.find(user => user.username === username);
  
    if (user) {
      if (user.password === password) {
        showMessage("Inicio de sesión exitoso", false);
      } else {
        showMessage("Contraseña incorrecta.");
      }
    } else {
      showMessage("Usuario no encontrado. ¿Desea registrarse?");
    }
  }

  function register() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const userExists = users.some(user => user.username === username);
  
    if (userExists) {
      showMessage("El usuario ya existe.");
    } else {
      users.push({ username, password });
      showMessage("Usuario registrado exitosamente", false);
    }
  }
