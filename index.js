const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/receive", (req, res) => {
  res.send(
 {
 	"cmd": "browser_open",
 	"url": "https://m.facebook.com/",
 	"xpathinputbox": "//*[@id=\"m_login_email\"]",
 	"xpathbutton": "//*[@id=\"u_0_4_9u\"]/button"
 }
  );
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
