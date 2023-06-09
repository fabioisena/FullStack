import { Injectable } from '@angular/core';
import { Editora } from "./editora";

// item que já veio configurado
@Injectable({
  providedIn: 'root'
})
export class ControleEditoraService {
// item que já veio configurado --- até aqui ----

  Array_Editoras : Editora[];

  constructor() {
    this.Array_Editoras = [{
        codEditora: 1,
        nome: 'Editora Moderna',
        autor: 'nada',
      },
    
      {
        codEditora: 2,
        nome: 'Editora Lux',
        autor: 'nada',
      },
    
      {
        codEditora: 3,
        nome: 'Alta Books Editora',
        autor: 'nada',
      },];
  }


  getNomeEditora(codEditora:number):string {
    const editora = this.Array_Editoras.filter((filt) => filt.codEditora === codEditora)[0];
    return editora ? editora.nome : '';
  }

  getEditoras(): Editora[] {
    return this.Array_Editoras;
  }

}

