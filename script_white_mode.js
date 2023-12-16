// Função para alternar o modo claro/escuro
  function toggleLightMode() {
    const body = document.getElementById("codex_lib");
    body.classList.toggle("modo-claro"); 
  //trocar logo para modo claro/escuro
  }
  // Adicionar à escuta de eventos para o botão
  const modoClaroButton = document.getElementById("modo-claro");
  modoClaroButton.addEventListener("click", toggleLightMode);