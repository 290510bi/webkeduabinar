document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if(username === "heri" && password === "123") {

        localStorage.setItem("username", username);

        alert("Login berhasil!");

        window.location.href = "../index.html";

    } else {

        alert("Username atau password salah!");

    }
});
