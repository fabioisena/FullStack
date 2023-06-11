import Editora from "../modelo/Editora";

const editoras: Array<Editora> = [
  {
    codEditora: 1,
    nome: "Editora Moderna",
  },

  {
    codEditora: 2,
    nome: "Editora Lux",
  },

  {
    codEditora: 3,
    nome: "Alta Books Editora",
  },

];

class ControleEditora {
  getNomeEditora (codEditora: number) {
    const resultados = editoras.filter(
      (editora) => editora.codEditora === codEditora
    );
    if (resultados.length === 0) return "Editora não encontrada";
    return resultados[0].nome;
  }

  getEditoras() {
    return editoras;

  }

}
export default ControleEditora

