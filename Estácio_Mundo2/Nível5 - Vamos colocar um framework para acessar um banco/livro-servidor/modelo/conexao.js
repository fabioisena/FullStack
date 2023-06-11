const banco = require("mongoose");
/* Modifique a conexão do banco de dados MongoDB de acordo com a sua instalação.
*/
banco
  .connect(
    "mongodb://127.0.0.1:27017"
  )
  .then(() => {
    console.log("Conectado ao MongoDB!");
  })
  .catch((err) => console.log(err));

banco.Promise = global.Promise;

module.exports = banco;

    /* "mongodb://127.0.0.1:27017" */
    //"mongodb://desenv:fabioisena@localhost:27017/?authMechanism=DEFAULT"
    //  std ----> "mongodb://localhost:27017/?authMechanism=DEFAULT"
