const pool = require('../config/config');

const Data = {
  create: async (name,
                email,
                dataDeNascimento,
                image) => {
    const query = 'INSERT INTO teste (nome, email, data, image) VALUES ($1, $2, $3, $4)';
    const values = [name, email, dataDeNascimento, image];
    try {
      await pool.query(query, values);
    } catch (error) {
      console.error('Erro ao inserir dados:', error);
      throw error;
    }
  },
  getAll: async () => {
    const query = 'SELECT * FROM teste';
    try {
      const result = await pool.query(query);
      return result.rows;
    } catch (error) {
      console.error('Erro ao recuperar dados:', error);
      throw error;
    }
  }

};

module.exports = Data;
