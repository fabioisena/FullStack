export class Livro {
  codigo: string;
  codEditora: string;
  titulo: string;
  resumo: string;
  autores: string[];

  constructor() {
    this.codigo = '';
    this.codEditora = '';
    this.titulo = '';
    this.resumo = '';
    this.autores = [];
  }
}
