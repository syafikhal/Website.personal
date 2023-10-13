document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.querySelector("form");
    const outputDiv = document.getElementById("outputDiv");
    const loginButton = document.getElementById("loginButton");
  
    loginForm.addEventListener("submit", function(event) {
      event.preventDefault();
      
      const usernameInput = loginForm.querySelector("#username");
      const passwordInput = loginForm.querySelector("#password");
      
      const username = usernameInput.value;
      const password = passwordInput.value;
  
      if (username === "Syafikh" && password === "AL") {
        // Simpan username dan password ke localStorage
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        
        // Jika login berhasil, tampilkan pesan selamat datang
        outputDiv.innerHTML = "<p>Welcome " + username + "!</p>";
        // Atur timeout untuk mengalihkan ke halaman utama setelah beberapa detik
        setTimeout(() => {
          window.location.href = "Home.html";
        }, 2000);
      } else {
        outputDiv.innerHTML = "<p>Incorrect username or password.</p>";
      }
    });
  });
  