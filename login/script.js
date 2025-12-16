document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  const msg = document.getElementById("message");

  // akun default
  const validUser = "admin";
  const validPass = "admin";

  if (user === validUser && pass === validPass) {
    msg.style.color = "lightgreen";
    msg.textContent = "Login berhasil...";

    setTimeout(() => {
      window.location.href = "halaman/halaman.html";
    }, 1500);

  } else {
    msg.style.color = "red";
    msg.textContent = "Username atau password salah!";
  }
});

