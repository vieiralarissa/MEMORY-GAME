# Jogo da Memória – Componentes de Informática

Mini game desenvolvido como parte da **Atividade de Extensão – Tecnologia Aplicada à Inclusão Digital**, com foco no **Objetivo de Desenvolvimento Sustentável (ODS) da ONU: Educação de Qualidade**.

O jogo foi criado como um **recurso didático para crianças dos anos iniciais do ensino fundamental**, ajudando no aprendizado dos **principais componentes de informática** de forma lúdica e interativa.

---

# Objetivo do Projeto

O objetivo do jogo é **estimular o aprendizado e a memória**, fazendo com que o jogador associe **imagens de componentes de computador com seus respectivos nomes**.

Assim, além de trabalhar a memória, o jogo contribui para o **letramento digital**, apresentando elementos importantes do computador como:

* Mouse
* Teclado
* Monitor
* Pendrive
* HD
* SSD
* Memória RAM
* Placa-mãe
* Cartão de memória

---

# Como Funciona o Jogo

1. Ao iniciar o jogo, todas as cartas aparecem **viradas para cima por alguns segundos** para que o jogador possa memorizar suas posições.
2. Depois disso, as cartas são **viradas para baixo**.
3. O jogador deve **clicar em duas cartas por vez** para tentar encontrar o par correto.
4. Cada par é formado por:

   * **uma imagem do componente**
   * **o nome do componente**
5. Quando o jogador encontra um par correto:

   * as cartas permanecem viradas
   * um som de acerto é reproduzido
6. Quando as cartas não combinam:

   * elas voltam a ficar viradas para baixo
   * um som de erro é reproduzido
7. Quando todos os pares são encontrados, o jogo exibe a mensagem de **fim de jogo**.

---

# Recursos do Jogo

O jogo possui efeitos sonoros para melhorar a experiência do usuário:

* **flip.mp3** → som ao virar a carta
* **match.mp3** → som de acerto
* **wrong.mp3** → som de erro
* **gameover.mp3** → som ao finalizar o jogo

---

# Tecnologias Utilizadas

O projeto foi desenvolvido utilizando tecnologias web básicas:

* **HTML5** → estrutura da página
* **CSS3** → estilização e animação das cartas
* **JavaScript** → lógica do jogo

Principais conceitos utilizados:

* Manipulação do **DOM**
* **Eventos de clique**
* **Arrays e objetos**
* **Função de embaralhamento**
* Controle de estado do jogo

---

# Estrutura do Projeto

```
memory-game/
│
├── index.html
├── style.css
├── script.js
│
├── images/
│   ├── mouse-image.png
│   ├── mouse-text.png
│   ├── teclado-image.png
│   ├── teclado-text.png
│   └── ...
│
└── sounds/
    ├── flip.mp3
    ├── match.mp3
    ├── wrong.mp3
    └── gameover.mp3
```

---

# Como Executar o Projeto

1. Baixe ou clone este repositório.
2. Abra a pasta do projeto.
3. Execute o arquivo **index.html** em qualquer navegador.

Não é necessário instalar nenhuma dependência.

---

# Autoria

Projeto desenvolvido por **Larissa Vieira** como atividade acadêmica no curso de **Análise e Desenvolvimento de Sistemas**.

---

# Relação com os ODS da ONU

Este projeto está relacionado ao **ODS 4 – Educação de Qualidade**, pois utiliza tecnologia digital para apoiar o processo de ensino e aprendizagem de forma acessível e interativa.

---
