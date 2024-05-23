const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const routes = require("./routes/rotas");

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Middleware para servir arquivos estáticos da pasta uploads
app.use("/api/uploads", express.static(path.join(__dirname, "routes/uploads")));

// Usar rotas definidas no arquivo rotas.js
app.use("/api", routes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
 