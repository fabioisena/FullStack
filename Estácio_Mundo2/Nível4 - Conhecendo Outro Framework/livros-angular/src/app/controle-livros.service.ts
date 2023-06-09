//item gerado pelo sistema
import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root'
})
//item gerado pelo sistema
export class ControleLivrosService {
livros:Livro[];
  constructor() {
    this.livros = [{
      codigo: 1,
      codEditora: 1,
      titulo: "Gestão de Negócios",
      resumo:
        "O Processo de Gestão de Negócios inclui métodos, técnicas e ferramentas para suportar o projeto, gestão e analises de processos operacionais. isto pode ser considerado como uma extensão do clássico sistema de Gestão de Workflow. Entretanto a relevância prática não é muito robusta. Além disso não exite uma clara fundamentação teórica e científica. Neste livro podemos verificar abordagens que cobrem este gap, apresentando o estado estado-da-arte em tecnologia.",
      autores: ["Artur H.M. Hofstede, Mathias Weske"],
  },

  {
      codigo: 2,
      codEditora: 2,
      titulo: "O Livro dos Cinco Anéis",
      resumo:
        "Escrito em 1643 pelo famoso duelista e samurai invicto Miyamoto Musashi, a obra analisa o processo de luta e domínio sobre o conflito subjacente a todos os níveis de interação humana. Para Musashi, o caminho das artes marciais era o domínio da mente, em vez de simplesmente proeza técnica. Recentemente, a obra-prima de Musashi alcançou reputação internacional no mundo dos negócios como meio de resolver diferenças e alcançar o sucesso. Mas seu delineamento da força psicológica, do autocontrole rigoroso e da aplicação prática necessária para lidar com o conflito físico e mental também tem uma relevância mais ampla e pode ser aplicado de maneira útil em todas as esferas da vida. É esse caminho para a maestria que constitui o ensinamento central deste brilhante manifesto, escrito não apenas para artistas marciais, mas para qualquer pessoa que queira aplicar os princípios atemporais desta obra em sua jornada. ",
      autores: ["Miyamoto Musashi"],
  },

  {
      codigo: 3,
      codEditora: 3,
      titulo: "Pai Rico, Pai Pobre",
      resumo:
        "A formação proporcionada pelo sistema educacional não prepara os jovens para o mundo que encontrarão depois de formados E como os pais podem ensinar aos filhos o que a escola relega? Essa é outra das muitas perguntas que o leitor encontra em Pai Rico, Pai Pobre. Nesse sentido, a proposta do autor é facilitar a tarefa dos pais. Quem entende de contabilidade deve esquecer seus conhecimentos acadêmicos, pois muitas das teorias expostas por Robert Kiyosaki contrariam os princípios contábeis comumente aceitos, e apresentam uma valiosa e moderna percepção do modo como se realizam os investimentos.",
      autores: ["Robert T. Kiyosaki"],
    },];
   }

// metodo incluir e excluir

obterLivros = (): Livro[] => {
  return this.livros;
};

incluir = (livro: Livro): void => {
  const codigo =
    this.livros.reduce((max, livro) => Math.max(max, livro.codigo), 0) + 1;
  this.livros.push({ ...livro, codigo });
};

excluir = (codigo: number): void => {
  const indiceLivro = this.livros.findIndex(
    (livro) => livro.codigo === codigo
  );
  if (indiceLivro !== -1) {
    this.livros.splice(indiceLivro, 1);
  }
};
}