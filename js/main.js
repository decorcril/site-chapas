/* =========================================================
   Decorcril – funcionamento do site
   ========================================================= */

/* ---------- Configurações (edite aqui) ---------- */

// Número com código do país (55) e DDD, só números
const WHATSAPP_NUMERO = "5511900000000";

// Mensagem usada nos botões gerais de orçamento
const MENSAGEM_PADRAO = "Olá! Vim pelo site e gostaria de um orçamento de chapas de acrílico.";


/* ---------- Funções auxiliares ---------- */

// Monta o link do WhatsApp já com a mensagem escrita
function linkWhatsApp(mensagem) {
  return "https://wa.me/" + WHATSAPP_NUMERO + "?text=" + encodeURIComponent(mensagem);
}

// Evita que textos da lista de produtos quebrem o HTML
function escaparHTML(texto) {
  const div = document.createElement("div");
  div.textContent = texto;
  return div.innerHTML;
}

// Mensagem do WhatsApp específica de cada chapa
function mensagemProduto(produto) {
  return (
    "Olá! Vim pelo site e gostaria de um orçamento da chapa " + produto.nome + ".\n" +
    "Cor: \n" +
    "Espessura: \n" +
    "Medida / quantidade: "
  );
}


/* ---------- Catálogo ---------- */

function criarCard(produto) {
  const nome = escaparHTML(produto.nome);

  const cores = (produto.cores || [])
    .map(function (cor) {
      const nomeCor = escaparHTML(cor.nome);
      return '<span class="cor" style="background:' + escaparHTML(cor.hex) + '" ' +
             'title="' + nomeCor + '" role="img" aria-label="' + nomeCor + '"></span>';
    })
    .join("");

  const espessuras = (produto.espessuras || [])
    .map(function (e) {
      return '<span class="espessura">' + escaparHTML(e) + "</span>";
    })
    .join("");

  const coluna = document.createElement("div");
  coluna.className = "col-sm-6 col-lg-4";
  coluna.innerHTML =
    '<article class="produto-card">' +
      '<img class="produto-img" src="' + escaparHTML(produto.imagem) + '" alt="' + nome + '" loading="lazy">' +
      '<div class="produto-corpo">' +
        '<h3 class="produto-nome">' + nome + "</h3>" +
        '<p class="produto-descricao">' + escaparHTML(produto.descricao || "") + "</p>" +
        (cores
          ? '<div><span class="produto-rotulo">Cores</span><div class="produto-cores">' + cores + "</div></div>"
          : "") +
        (espessuras
          ? '<div><span class="produto-rotulo">Espessuras</span><div class="produto-espessuras">' + espessuras + "</div></div>"
          : "") +
        '<a class="btn btn-primary" href="' + linkWhatsApp(mensagemProduto(produto)) + '" target="_blank" rel="noopener">' +
          '<i class="bi bi-whatsapp me-1" aria-hidden="true"></i> Pedir orçamento' +
        "</a>" +
      "</div>" +
    "</article>";

  // Se a foto ainda não existir, mostra um espaço reservado em vez da imagem quebrada
  const img = coluna.querySelector(".produto-img");
  img.addEventListener("error", function () {
    const vazio = document.createElement("div");
    vazio.className = "produto-img produto-img-vazia";
    vazio.innerHTML = '<i class="bi bi-image" aria-hidden="true"></i>';
    img.replaceWith(vazio);
  });

  return coluna;
}

function montarCatalogo() {
  const lista = document.getElementById("lista-produtos");
  if (!lista) return;

  if (typeof PRODUTOS === "undefined" || PRODUTOS.length === 0) {
    lista.innerHTML =
      '<p class="text-body-secondary">Catálogo em atualização. Fale com a gente pelo WhatsApp.</p>';
    return;
  }

  PRODUTOS.forEach(function (produto) {
    lista.appendChild(criarCard(produto));
  });
}


/* ---------- Links gerais de WhatsApp ---------- */

function preencherLinksWhatsApp() {
  document.querySelectorAll(".js-whatsapp").forEach(function (link) {
    link.href = linkWhatsApp(MENSAGEM_PADRAO);
  });
}


/* ---------- Menu no celular ---------- */

// Fecha o menu recolhido ao clicar em um item
function fecharMenuAoNavegar() {
  const menu = document.getElementById("menu");
  if (!menu || typeof bootstrap === "undefined") return;

  menu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      if (menu.classList.contains("show")) {
        bootstrap.Collapse.getOrCreateInstance(menu).hide();
      }
    });
  });
}


/* ---------- Início ---------- */

document.addEventListener("DOMContentLoaded", function () {
  montarCatalogo();
  preencherLinksWhatsApp();
  fecharMenuAoNavegar();

  const ano = document.getElementById("ano");
  if (ano) ano.textContent = new Date().getFullYear();
});