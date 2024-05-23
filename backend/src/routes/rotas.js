const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

const dataController = require("../controllers/controlador");
// storage a gente passsa as configs de onde vai armazenar
// estou utilizando o multer que é um middleware para uploads
// no caso desse storage ele vai armazenar para sempre
const storage = multer.diskStorage({
  // destination vai passar onde especificamente vai ser armazenado
  // nisso eu passo path.resolve para lidar com os caminhos absolutos, uma vez que usado junto com o __dirname que basicamente vai pegar o caminha absoluto onde eu quero por
  // indepente de onde for excultado, no caso passei a pasta uploads
  destination: function (req, file, cb) {
    cb(null, path.resolve(__dirname, "uploads"));
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + path.extname(file.originalname) // passo como o arquivo vai ser salvo
    );
  },
});

const upload = multer({ storage: storage }); // criando a instância

router.post("/data", upload.single("image"), dataController.createData); // aqui eu coloquei para aceitar os arquivos do campo image la no meu front


router.get("/dados", dataController.getData); // aqui é pra recuperar todos os dados pois não existe filtragem de pegar apenas um

// aqui eu consigo acessar a imagem por meio de localhost/api < esse / api eu to passando la no server dando um app.use para acessar o rotas por / api 
// ai fica localhost/api/uploads/nome da imagem que você quer que recupere
router.get("/uploads/:imageName", (req, res) => {
  const imageName = req.params.imageName;
  const imagePath = path.resolve(__dirname, "uploads", imageName);
  res.sendFile(imagePath);
});

module.exports = router;
