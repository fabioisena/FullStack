import { Injectable } from '@angular/core';
import { Livro } from '../livro';

const baseURL = 'http://localhost:3030/livros';

export interface LivroMongo {
  _id: string;
  codigo: string;
  codEditora: string;
  titulo: string;
  resumo: string;
  autores: string[];
}

@Injectable({
  providedIn: 'root',
})
export class ControleLivrosService {
  constructor() {}

  obterLivros(): Promise<Livro[]> {
    return fetch(baseURL)
      .then((response) => response.json())
      .then((data) =>
        data.data.map((livro: LivroMongo) => ({
          codigo: livro.codigo,
          codEditora: livro.codEditora,
          titulo: livro.titulo,
          resumo: livro.resumo,
          autores: livro.autores,
        }))
      );
  }

  excluir(codigo: string): Promise<boolean> {
    return fetch(`${baseURL}/${codigo}`, { method: 'DELETE' }).then(
      (response) => response.ok
    );
  }

  incluir(livro: Livro): Promise<boolean> {
    const livroMongo: LivroMongo = {
      _id: '',
      codigo: livro.codigo,
      codEditora: livro.codEditora,
      titulo: livro.titulo,
      resumo: livro.resumo,
      autores: livro.autores,
    };

    return fetch(baseURL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(livroMongo),
    }).then((response) => response.ok);
  }
}
