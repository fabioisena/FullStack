const banco = require('mongoose'); //mongoose

const uri = 'mongodb://127.0.0.1:27017/';
const dbName = 'livraria';

banco.connect(uri + dbName, {        //mongoose
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const livroSchema = new banco.Schema({ //mongoose
  codigo: Number,
  codEditora: Number,
  titulo: String,
  resumo: String,
  autores: [String]
});

const Livro = banco.model('Livro', livroSchema); //mongoose

const obterLivros = async () => {
  const livros = await Livro.find();
  return { data: livros };
};

const incluir = async (livro) => {
  const novoLivro = new Livro(livro);
  const resultado = await novoLivro.save();
  return resultado;
};

const excluir = async (codigo) => {
  const resultado = await Livro.deleteOne({ _id: codigo });
  return resultado;
};

module.exports = {
  Livro,
  obterLivros,
  incluir,
  excluir
};
