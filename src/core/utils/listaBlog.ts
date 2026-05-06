import BlogLinux from "../assets/imgs/blog-linux.jpg";
import BlogUml from "../assets/imgs/blog-uml.jpg";
import BlogVsCode from "../assets/imgs/blog-vs-code.jpg";

export const listaBlog = [
  {
    id: 1,
    titulo: "Dica de Produtividade no VS Code",
    data: "Maio 2026",
    descricao:
      "Compartilhei algumas extensões que utilizo no meu dia a dia para acelerar o desenvolvimento.",
    conteudo: `<p>As extensões que utilizo são poucas, mas são extensões bem efetivas e fazem um bom trabalho no dia a dia.</p>
    <h2>Color Highlight</h2><p>é uma extensão que utilizo bastante, ele é útil para mostrar as cores dos códigos hexadecimais do CSS. Após passar uma cor para um elemento, seja um background-color, color ou algo do tipo, ele vai mostrar a cor dele, sem precisar ver onde está a cor no círculo cromático<p/>
    <h2>Image Preview</h2><p>Uso em conjunto com o color Highlight, ele resolve um dos problemas que eu passo quando estou fazendo projetos. Quando eu vou importar imagens dentro do React, para saber se a imagem foi importada corretamente e se o caminho está correto, essa extensão salva muito, pois ele mostra a imagem previamente no canto esquerdo da linha onde a imagem foi importada, se apareceu, então funcionou</p>
    <h2>Auto Rename Tag</h2><p>o trio de extensões que mais gosto, quando você vai criar uma tag ou no React um componente, supondo que você acabou errando ao digitar o nome da tag, por exemplo um button, você escreveu buton, essa extensão corrige até o fechamento da tag</p><h2>Prettier - Code Formatter</h2>
    <p>Extensão muito famosa, ele é responsável por organizar o seu código automaticamente, ele organiza identações, código que estava esteticamente quebrado, ele reorganiza para deixar mais atraente e fácil de ler e compreender</p><h2>Live server</h2><p>Outra extensão famosa, mais usado quando quero fazer uma atividade simples de JavaScript vanilla para treinar a base, a principal funcionalidade do live server é deixar as alterações que você faz no seu site instantaneamente, sem precisar fazer reload na página manualmente</p>tem outras extensões que utilizo, mas essas são as que mais melhoram a produtividade de escrita no vscode , muito obrigado por ler, vou seguir testando novas extensões e ferramentas 👨‍💻`,
    img: BlogVsCode,
    alt: "Dica de Produtividade no VS Code",
  },
  {
    id: 2,
    titulo: "Minha experiência sobre linux durante 1 ano de uso",
    data: "Maio 2026",
    descricao:
      "Aqui falo sobre quais distribuições usei, as dificuldades que passei e as facilidades que tem no linux",
    conteudo:
      "Depois de 12 meses usando Linux como sistema principal, percebi que a curva de aprendizado vale a pena. Comecei com Ubuntu, passei pelo Fedora e hoje utilizo...",
    img: BlogLinux,
    alt: "Minha experiência sobre linux durante 1 ano de uso",
  },
  {
    id: 3,
    titulo: "Aprendendo sobre UML",
    data: "Maio 2026",
    descricao:
      "Explico sobre o que é UML e porque é importante um desenvolvedor aprender",
    conteudo:
      "UML não é apenas desenho. É a planta do seu software. Neste artigo, explico os diagramas de classe, sequência e por que eles salvam tempo de codificação...",
    img: BlogUml,
    alt: "Aprendendo sobre UML",
  },
];
