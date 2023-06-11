const banco = require('./conexao');

const LivroSchema = new banco.Schema({
    _id: banco.Schema.Types.ObjectId,
    titulo: String,
    codEditora: Number,
    resumo: String,
    autores: [String],
  });
  
  module.exports = banco.model('livros', LivroSchema);
 
/* const Livro = banco.model("Livro", LivroSchema);
  
  module.exports = Livro;
   */