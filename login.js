function login() {
    const userName = document.querySelector("#username");
    const password = document.querySelector("#password");
    localStorage.setItem("userName", userName.value);
    localStorage.setItem("password", password.value);
    window.location.href = "dance.html";
}