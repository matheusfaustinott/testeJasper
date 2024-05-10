const Data = require("../models/modelos");

const dataController = {
  createData: async (req, res) => {
    const { name, email, dataDeNascimento, image } = req.body;
    try {
      await Data.create(name, email, dataDeNascimento, image);
      res.status(201).json({ message: "Dados salvos com sucesso!" });
    } catch (error) {
      console.error("Erro no controlador:", error);
      res.status(500).json({ message: "Erro ao salvar os dados." });
    }
  },

  getData: async (req, res) => {
    try {
      const data = await Data.getAll();
      res.json(data);
    } catch (error) {
      console.error("Erro no controlador:", error);
      res.status(500).json({ message: "Erro ao recuperar os dados." });
    }
  },
};

module.exports = dataController;
