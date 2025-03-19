//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar o nome do amigo à lista
function adicionarAmigo() {
    // Capturar o valor do campo de entrada
    const nome = document.getElementById("amigo").value.trim();

    // Validar se o campo não está vazio
    if (nome === "") {
        // Exibir um alerta se o campo estiver vazio
        alert("Por favor, insira um nome.");
        return;
    }

    // Adicionar o nome ao array de amigos
    amigos.push(nome);

    // Limpar o campo de entrada após adicionar
    document.getElementById("amigo").value = "";

    // Atualizar a lista na tela
    atualizarListaAmigos();
}

// Função para atualizar a lista de amigos exibida na página
function atualizarListaAmigos() {
    // Obter o elemento <ul> onde a lista será exibida
    const listaAmigos = document.getElementById("listaAmigos");

    // Limpar a lista antes de adicionar os novos nomes
    listaAmigos.innerHTML = "";

    // Adicionar cada amigo à lista
    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Função para sortear o amigo secreto (exemplo simples)
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Não há amigos para sortear. Adicione pelo menos um amigo.");
        return;
    }

    // Sorteio simples de um amigo aleatório
    const sorteado = amigos[Math.floor(Math.random() * amigos.length)];

    // Exibir o nome do amigo sorteado
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>O amigo secreto sorteado é: <strong>${sorteado}</strong></li>`;
}




