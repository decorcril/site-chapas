/* =========================================================
   Decorcril – lista de chapas do catálogo

   Este é o único arquivo que precisa ser editado no dia a dia.
   Cada bloco { ... } vira um card no site, na mesma ordem.

   Para adicionar uma chapa: copie um bloco inteiro (de { até },),
   cole no final da lista e troque as informações.

   Campos:
   - nome:        nome da chapa (aparece no card e na mensagem do WhatsApp)
   - descricao:   frase curta sobre a chapa e onde ela é usada
   - imagem:      caminho da foto dentro da pasta img/produtos/
   - cores:       lista de cores; "hex" é o código da cor da bolinha
   - espessuras:  lista das espessuras disponíveis
   ========================================================= */

const PRODUTOS = [
  {
    nome: "Acrílico Cristal",
    descricao: "Transparente e de alto brilho. Ideal para displays, vitrines, proteções e mobiliário.",
    imagem: "img/produtos/chapa_cristal.png",
    cores: [
      { nome: "Incolor", hex: "#eef6f9" }
    ],
    espessuras: ["1 mm", "2 mm", "3 mm", "4 mm", "5 mm", "6 mm", "8 mm", "10 mm"]
  },
  {
    nome: "Acrílico Fumê",
    descricao: "Transparente com tom escurecido. Muito usado em tampas, divisórias e peças decorativas.",
    imagem: "img/produtos/acrilico_fume.png",
    cores: [
      { nome: "Fumê claro", hex: "#8a8f94" },
      { nome: "Fumê escuro", hex: "#4a4e52" }
    ],
    espessuras: ["2 mm", "3 mm", "4 mm"]
  },
  {
    nome: "Acrílico Colorido",
    descricao: "Cores sólidas para comunicação visual, letreiros, brindes e artesanato.",
    imagem: "img/produtos/acrilico_colorido.png",
    cores: [
      { nome: "Branco", hex: "#ffffff" },
      { nome: "Preto", hex: "#111111" },
      { nome: "Vermelho", hex: "#d62828" },
      { nome: "Amarelo", hex: "#f6c90e" },
      { nome: "Azul", hex: "#1d4ed8" },
      { nome: "Verde", hex: "#15803d" },
      { nome: "Laranja", hex: "#f97316" },
      { nome: "Rosa", hex: "#ec4899" }
    ],
    espessuras: ["2 mm", "3 mm"]
  },
  {
    nome: "Acrílico Espelhado",
    descricao: "Efeito espelho, mais leve e resistente que o vidro. Para decoração, lojas e festas.",
    imagem: "img/produtos/acrilico_espelhado.png",
    cores: [
      { nome: "Prata", hex: "#c9ced4" },
      { nome: "Dourado", hex: "#d4af37" },
      { nome: "Rosé", hex: "#e8b4a8" }
    ],
    espessuras: ["2 mm", "3 mm"]
  },
  {
    nome: "Acrílico Leitoso",
    descricao: "Branco translúcido que espalha a luz. Perfeito para luminosos, luminárias e fachadas.",
    imagem: "img/produtos/acrilico_leitoso.png",
    cores: [
      { nome: "Branco leitoso", hex: "#f3f1ec" }
    ],
    espessuras: ["2 mm", "3 mm", "4 mm"]
  },
  {
    nome: "Acrílico Jateado",
    descricao: "Acabamento fosco que dá privacidade sem bloquear a luz. Para divisórias e portas.",
    imagem: "img/produtos/acrilico_jateado.png",
    cores: [
      { nome: "Incolor jateado", hex: "#dfe6ea" }
    ],
    espessuras: ["2 mm", "3 mm"]
  }
];