// login.js

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const emailInput = form.querySelector("input[name='email']");
  const passwordInput = form.querySelector("input[name='password']");

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Sayfanın yeniden yüklenmesini engelle

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (!email || !password) {
      alert("Lütfen tüm alanları doldurun.");
      return;
    }

    // localStorage'dan kullanıcıları al
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Kullanıcıyı kontrol et
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
      // Giriş başarılı
      localStorage.setItem("currentUser", JSON.stringify(user)); // oturum verisi
      window.location.href = "../apps/apps.html";
    } else {
      alert("E-posta veya şifre hatalı.");
    }
  });
});
