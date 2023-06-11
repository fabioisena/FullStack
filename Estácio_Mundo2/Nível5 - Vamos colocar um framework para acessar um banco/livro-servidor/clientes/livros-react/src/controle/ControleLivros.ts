import Livro from "../modelo/Livro";

const baseURL = "http://localhost:3030/livros";

interface LivroMongo {
  codigo: string;
  codEditora: string;
  titulo: string;
  resumo: string;
  autores: string[];
}

export default class ControleLivro {
  async obterLivros(): Promise<Livro[]> {
    try {
      const response = await fetch(baseURL);
      const data = await response.json();
      const livrosMongo: LivroMongo[] = data.data;

      if (!Array.isArray(livrosMongo)) {
        throw new Error("Os dados retornados não estão no formato esperado.");
      }

      return livrosMongo.map((livroMongo) =>
        this.converterLivroMongoParaLivro(livroMongo)
      );
    } catch (error) {
      throw new Error("Erro ao obter os livros do servidor.");
    }
  }

  async excluir(codigo: string): Promise<boolean> {
    try {
      const response = await fetch(`${baseURL}/${codigo}`, {
        method: "DELETE",
      });
      return response.ok;
    } catch (error) {
      throw new Error("Erro ao excluir o livro do servidor.");
    }
  }

  async incluir(livro: Livro): Promise<boolean> {
    try {
      const livroMongo: LivroMongo = this.converterLivroParaLivroMongo(livro);
      const response = await fetch(baseURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(livroMongo),
      });
      return response.ok;
    } catch (error) {
      throw new Error("Erro ao incluir o livro no servidor.");
    }
  }

  private converterLivroMongoParaLivro(livroMongo: LivroMongo): Livro {
    return {
      codigo: livroMongo.codigo,
      codEditora: livroMongo.codEditora,
      titulo: livroMongo.titulo,
      resumo: livroMongo.resumo,
      autores: livroMongo.autores,
    };
  }

  private converterLivroParaLivroMongo(livro: Livro): LivroMongo {
    return {
      codigo: livro.codigo,
      codEditora: livro.codEditora,
      titulo: livro.titulo,
      resumo: livro.resumo,
      autores: livro.autores,
    };
  }
}
