const express = require("express");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 10000;
const HOST = "0.0.0.0";

app.use(express.static(path.join(__dirname)));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, HOST, () => {
  console.log(`Servidor corriendo en http://${HOST}:${PORT}`);
});
