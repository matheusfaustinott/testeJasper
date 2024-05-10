const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');



const dataController = require('../controllers/controlador');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve(__dirname, '../routes/uploads'));
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + '.png');
  }
});

const upload = multer({ storage: storage });

router.post('/data', upload.single('image'), dataController.createData);
router.get('/dados', dataController.getData);
router.use('/uploads', express.static(path.resolve(__dirname, '../routes/uploads')));

module.exports = router;
