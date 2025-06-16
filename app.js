const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

// Static dosyaları tanıt (CSS, resimler vs.)
app.use("/home", express.static(path.join(__dirname, "home")));
app.use("/accounts", express.static(path.join(__dirname, "accounts")));

// Ana sayfa
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "home", "home.html"));
});

// Diğer sayfalar (isteğe bağlı ama okunabilirlik için güzel olur)
app.get("/login", (req, res) => {
  res.redirect("/accounts/login.html");
});
app.get("/signup", (req, res) => {
  res.redirect("/accounts/signup.html");
});
app.get("/seller-login", (req, res) => {
  res.redirect("/accounts/seller-login.html");
});
app.get("/seller-signup", (req, res) => {
  res.redirect("/accounts/seller-signup.html");
});

// Sunucuyu başlat
app.listen(PORT, () => {
  console.log(`🚀 Sunucu çalışıyor: http://localhost:${PORT}`);
});
