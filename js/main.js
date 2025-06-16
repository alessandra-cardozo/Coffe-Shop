// Seleciona os elementos do DOM
const navBar = document.querySelector('.nav-bar');
const searchForm = document.querySelector('.search-form');
const cartItem = document.querySelector('.cart-items-container');

// Seleciona os botões de controle
const menuBtn = document.querySelector('#menu-btn');
const searchBtn = document.querySelector('#search-btn');
const cartBtn = document.querySelector('#cart-btn');

// Adiciona um evento de clique ao botão de menu
if (menuBtn) {
  menuBtn.onclick = () => {
    // Alterna a classe 'active' na barra de navegação
    if (navBar) navBar.classList.toggle('active');
    // Garante que o formulário de pesquisa e o carrinho estejam fechados
    if (searchForm) searchForm.classList.remove('active');
    if (cartItem) cartItem.classList.remove('active');
  };
}

// Adiciona um evento de clique ao botão de pesquisa
if (searchBtn) {
  searchBtn.onclick = () => {
    // Alterna a classe 'active' no formulário de pesquisa
    if (searchForm) searchForm.classList.toggle('active');
    // Garante que a barra de navegação e o carrinho estejam fechados
    if (navBar) navBar.classList.remove('active');
    if (cartItem) cartItem.classList.remove('active');
  };
}

// Adiciona um evento de clique ao botão do carrinho
if (cartBtn) {
  cartBtn.onclick = () => {
    // Alterna a classe 'active' no container do carrinho
    if (cartItem) cartItem.classList.toggle('active');
    // Garante que a barra de navegação e o formulário de pesquisa estejam fechados
    if (navBar) navBar.classList.remove('active');
    if (searchForm) searchForm.classList.remove('active');
  };
}

// Fecha todos os elementos abertos (nav, search, cart) quando a página é rolada
window.onscroll = () => {
  if (navBar) navBar.classList.remove('active');
  if (searchForm) searchForm.classList.remove('active');
  if (cartItem) cartItem.classList.remove('active');
};