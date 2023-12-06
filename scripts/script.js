// Função construtora para criar objetos Item
function Item(nomeItem, quantidade, preco) {
    this.nomeItem = nomeItem;
    this.quantidade = quantidade;
    this.preco = preco;
}

var itens = []; // Array para armazenar os itens adicionados

// Função para adicionar um novo item à lista
function adicionarItem() {
    var nomeItemNovo = $("#nomeItemId").val();
    var quantidadeNovo = $("#quantidadeId").val();
    var precoNovo = $("#precoId").val();
    var novoItem = new Item(nomeItemNovo, quantidadeNovo, precoNovo);
    itens.push(novoItem); // Adiciona o novo item ao array
    atualizaTabela(novoItem); // Atualiza a tabela na interface com o novo item
}

// Função para atualizar a tabela na interface com os itens
function atualizaTabela(item) {
    var htmlFinal = "<tr>";
    htmlFinal += "<td>" + item.nomeItem + "</td>";
    htmlFinal += "<td>" + item.quantidade + "</td>";
    htmlFinal += "<td>" + item.preco + "</td>";
    htmlFinal += "</tr>";
    $("#tabelaItensId").append(htmlFinal); // Adiciona o novo item à tabela na interface
}

// Função para fechar a compra e exibir informações sobre os itens e o total
function fecharCompra() {
    var htmlFinal = "Você comprou: ";
    var soma = 0;

    for (var i = 0; i < itens.length; i++) {
        htmlFinal += itens[i].quantidade + " " + itens[i].nomeItem + " - ";
        soma += itens[i].quantidade * itens[i].preco;
    }

    htmlFinal += " Total: R$ " + soma;
    $("#fechamentoLabelId").text(htmlFinal); // Exibe informações sobre a compra na interface
}
