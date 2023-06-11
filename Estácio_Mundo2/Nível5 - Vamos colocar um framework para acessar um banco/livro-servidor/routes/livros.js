const express = require('express');
const router = express.Router();
const livroDao = require('../modelo/livro-dao');

const obterLivros = livroDao.obterLivros;
const incluir = livroDao.incluir;
const excluir = livroDao.excluir;

router.get('/', async (req, res) => {
  const livros = await obterLivros();
  res.json(livros);
});

router.post('/', async (req, res) => {
  const livro = req.body;
  const resultado = await incluir(livro);
  if (resultado) {
    res.json({ mensagem: 'Livro incluído com sucesso!' });
  } else {
    res.json({ mensagem: 'Falha ao incluir livro.' });
  }
});

router.delete('/:_id', async (req, res) => {
  const codigo = req.params._id;
  const resultado = await excluir(codigo);
  if (resultado.deletedCount > 0) {
    res.json({ mensagem: 'Livro excluído com sucesso!' });
  } else {
    res.json({ mensagem: 'Falha ao excluir livro.' });
  }
});

module.exports = router;