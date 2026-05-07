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
    conteudo: `
    <p>Estou a 1 ano e 5 meses utilizando linux, e essa foi a melhor decisão que tomei durante esse tempo, Linux é um dos melhores sistemas operacionais, e para quem trabalha com TI é uma excelente escolha, e diria que até para quem não é de TI, mas por que? vou explicar. </p><h2>Mas primeiro, o que é Linux?</h2><p>Linux é um Kernel, ou Núcleo, que dá base para criação de sistemas operacionais, ele é usado por todos os computadores do mundo praticamente, 100% dos 500 supercomputadores mais rápidos do mundo utilizam Linux, por exemplo o El Capitan (EUA), Frontier (EUA) e Aurora (EUA) todos eles usam Linux ou adaptações de linux para aquela máquina, Todos os servidores do mundo utilizam Linux, o seu celular também utiliza linux, com o Android, sistema também baseado em Linux e usado em vários smartphones<p/><h2>O que são Distros?</h2><p>Ou também chamados de distribuições são sistemas operacionais que utilizam o kernel do linux como base do sistema, as distros eu diria que deixam o linux "usável" para pessoas que não são entusiastas de tecnologia, como no Windows. Se não fossem as distros, estaria utilizando somente o linux via terminal, só que sem recursos a mais, recursos estes, que as distros oferecem, como interface gráfica (GUI), drivers e aplicativos pré-instalados</p><h2>Quais são as distros?</h2><p>eu recomendaria estes para quem quer instalar e usar</p><ul><li>Ubuntu</li><li>Arch Linux</li><li>Fedora</li><li>Linux Mint</li><li>Zorin OS</li><li>Pop!_OS</li><li>Cachy OS </li><li>Bazzite</li></ul><p>Cachy OS e Bazzite recomendo para quem gosta de jogar no PC, Ubuntu, Arch Linux e Fedora para quem é entusiasta em tecnologia e quer aprender sobre Linux, e a tríade Linux Mint, Zorin OS e Pop OS para quem é iniciante ou usuário comum</p><h2>O que são pacotes de instalação</h2><p>assim como no Windows, que temos os executáveis, os .exe, No Linux temos algo parecido, os pacotes de instalação, eles são arquivos compactados que contêm todos os componentes necessários para instalar um software, quando você vai instalar algum programa no Linux, você baixa arquivos de programas com as <strong>extensões .deb ou .rpm</strong>, tem outros formatos, porém esses dois são os mais conhecidos e utilizados, .deb são usados em distros baseados em Debian/Ubuntu, e .rpm em distros baseados no Fedora</p><h2>O que são Interfaces gráficas do Linux</h2><p>Linux é diverso até em interface gráfica, as interfaces gráficas do Linux é totalmente independente do núcleo do sistema, a comunidade Linux criou diversas interfaces, mas os principais são</p><ul><li>GNOME: A interface padrão da maioria das Distros Linux, ela foca na simplicidade e minimalista em suas funcionalidades</li><li>KDE Plasma: conhecida pela sua personalização e aparência moderna, sendo amigável para usuários windows</li><li>Cinnamon: interface específica para o Linux Mint, também amigável para usuários que vem do windows</li><li>XFCE: interface mais simples e leve para computadores mais fracos</li></ul><h2>Quais as distros que usei até então e qual uso atualmente?</h2><p>A primeira distro que foi a porta de entrada foi Linux Mint, é uma distro muito boa, personalizável, você consegue personalizar tudo, desde ícones, estilo de barra de tarefas, janelas, animações, tudo!</p><p>depois disto fui para o ubuntu aprender a utilizar a interface gnome, é uma distro muito boa, estável, porém a única coisa que me incomoda é os pacotes snaps, que são pacotes que a empresa por trás do Ubuntu,  a Canonical, obriga os usuários a utilizar os pacotes fornecidos por eles, o que gerou bastante polêmica na comunidade linux, mas fora isso, é uma distro muito boa e importante, sendo base para outras distros.</p><p>depois fui para o Zorin OS, distro baseado no ubuntu, queria procurar algo um pouco mais parecido com o Windows, e que fosse mais fácil que o ubuntu, e ele é uma das melhores opções para quem vem do windows, o que acho interessante é a preocupação dos desenvolvedores dessa distro, que é evitar ao máximo o usuário usar o terminal, tudo tem algo via interface gráfica, é uma distro focado para iniciantes e usuários que vem do windows.</p><p>mas queria algo um pouco mais "ousado" diria, algo mais moderno e que tivesse as tecnologias mais atuais, e a distro que leva a vanguarda do linux é o Fedora, e que distro! Já estou utilizando ela a uns 4 meses neste momento, e é uma distro muito boa, e atualmente utilizo o Fedora com a interface KDE plasma, e a equipe do Fedora está cada vez mais inovando nas funcionalidades nesta interface, tem uma boa performance na minha máquina e acho que ficarei um bom tempo no Fedora</p>
    `,
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
