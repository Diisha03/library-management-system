const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const users = [
  { username: "admin", password: "admin123", role: "ADMIN" },
  { username: "user", password: "user123", role: "USER" }
];

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  const user = users.find(
    u => u.username === username && u.password === password
  );

  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  res.json({ role: user.role });
});

app.listen(3000, () => {
  console.log("✅ Backend running at http://localhost:3000");
});
