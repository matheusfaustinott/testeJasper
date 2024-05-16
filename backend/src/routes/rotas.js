const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

const dataController = require("../controllers/controlador");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve(__dirname, "uploads"));
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage });

router.post("/data", upload.single("image"), dataController.createData);


router.get("/dados", dataController.getData);


router.get("/uploads/:imageName", (req, res) => {
  const imageName = req.params.imageName;
  const imagePath = path.resolve(__dirname, "uploads", imageName);
  res.sendFile(imagePath);
});

module.exports = router;
