/**
 * app.js — Estado global da aplicação GameDB
 *
 * Os dados ficam em um array em memória.
 * localStorage é usado para persistir entre as páginas HTML.
 */

const STORAGE_KEY = 'gamedb_games';



/**
 * Retorna o array de games armazenado.
 * @returns {Array} lista de games
 */
function getGames() {
  const raw = localStorage.getItem(STORAGE_KEY);
  return raw ? JSON.parse(raw) : [];
}

/**
 * Sobrescreve o array de games no storage.
 * @param {Array} games
 */
function saveGames(games) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(games));
}



/**
 * Adiciona um novo game à lista.
 * @param {Object} game - dados do game (sem id/createdAt)
 * @returns {Object} game salvo (com id e createdAt)
 */
function addGame(game) {
  const games = getGames();
  game.id        = Date.now();
  game.createdAt = new Date().toLocaleDateString('pt-BR');
  games.push(game);
  saveGames(games);
  return game;
}

/**
 * Remove um game pelo id.
 * @param {number} id
 */
function deleteGame(id) {
  const games = getGames().filter(g => g.id !== id);
  saveGames(games);
}



/**
 * Converte nota (0–10) em string de estrelas (0–5).
 * @param {number|string} rating
 * @returns {string} ex: "★★★★☆"
 */
function starsFromRating(rating) {
  const full = Math.round(parseFloat(rating) / 2);
  return '★'.repeat(full) + '☆'.repeat(5 - full);
}

/**
 * Escapa caracteres HTML para evitar XSS.
 * @param {string} str
 * @returns {string}
 */
function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}



/**
 * Marca o link da página atual com aria-current="page".
 * Chamado automaticamente ao carregar qualquer página.
 */
function setActiveNav() {
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-list a').forEach(link => {
    if (link.getAttribute('href') === page) {
      link.setAttribute('aria-current', 'page');
    } else {
      link.removeAttribute('aria-current');
    }
  });
}

document.addEventListener('DOMContentLoaded', setActiveNav);