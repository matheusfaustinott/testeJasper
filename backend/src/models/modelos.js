const pool = require("../config/config");

const Data = {
  // dentro desse data eu crio dois metodos para lidar com meu postgresql
  // create para criar o dado lá dentro e GetAll para recuperar eles
  create: async (name, email, dataDeNascimento, image, imageURL) => {
    const query =
      "INSERT INTO teste (nome, email, data, image, imageURL) VALUES ($1, $2, $3, $4, $5)"; // aqui eu vou inserir no banco de dados na tabela teste, onde tem tabelas nome, email, data, imagem e imagemURL, e depois eu passo os valores
    const values = [name, email, dataDeNascimento, image, imageURL]; // passo aqueles values para esse value para conseguir passar na minha query
    try {
      await pool.query(query, values); // chamo os valores com minha query e tento inserir
    } catch (error) {
      console.error("Erro ao inserir dados:", error);
      throw error;
    }
  },
  getAll: async () => {
    const query = "SELECT * FROM teste"; // selec tudo na tabela teste
    try {
      const result = await pool.query(query);
      return result.rows;
    } catch (error) {
      console.error("Erro ao recuperar dados:", error);
      throw error;
    }
  },
};

module.exports = Data;
