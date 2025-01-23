// Inicie declarando uma variável do tipo array, que armazenará os nomes dos amigos inseridos.
let listaAmigos = [];
let lista = document.getElementById('listaAmigos');
let nomeInserido = document.getElementById('amigo');
let resultadoSorteio = document.getElementById('resultado');

// Desenvolva uma função que permita ao usuário inserir um nome no campo de texto e adicioná-lo à lista de amigos criada anteriormente.
function adicionarAmigo() {
    let nomeAmigo = nomeInserido.value.trim(); // função trim() é usada para remover espaços extras

    if (nomeAmigo === "") {
        alert('Por favor, informe um nome!');
        return;
    }
    listaAmigos.push(nomeAmigo);
    atualizarLista();
    nomeInserido.value = ""; // redefine o campo de texto para uma string vazia (fazendo aparecer o placeholder)
}


function atualizarLista() { // função criada para listar os nomes na tela
    lista.innerHTML = ""; // limpa a lista antes de atualizar

    listaAmigos.forEach(amigo => { // o método forEach executa a função dentro das chaves ({}) por cada elemento da array
        let itemLista = document.createElement('li') 
        itemLista.textContent = amigo;
        lista.appendChild(itemLista);
    });

}

// função usada para sortear um nome aleatório
function sortearAmigo() {
    if (listaAmigos.length == 0 < 2) {
        alert("Adicione no mínimo dois nomes para sortear.");
        return;
    }

    let nomeSorteado = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
    resultadoSorteio.innerHTML = `<li> O nome sorteado no amigo secreto é: ${nomeSorteado}</li> Para sortear novamente, aperte em "Sortear Amigo"` ;
}

// função usada para refazer sorteio com novos nomes
function refazerSorteio() {
    listaAmigos = [];
    atualizarLista();
    resultadoSorteio.innerHTML = "";

}
