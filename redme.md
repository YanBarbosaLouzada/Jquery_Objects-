https://www.youtube.com/watch?v=QY0Kdg83orY

# Mundo da Programação

Bem-vindo ao incrível mundo da programação, onde aprenderemos sobre conceitos importantes usando linguagem simples e divertida!

## Biblioteca jQuery

A biblioteca jQuery é como uma caixa de ferramentas para páginas da web, tornando fácil modificar texto, cores e criar interações divertidas.

### Seletores

- **Seletor de #id:** 
    - jQuery: `$("#meuId")`
    - JavaScript: `document.getElementById("meuId")`
- **Seletor de classe:** 
    - jQuery: `$(".minhaClasse")`
    - JavaScript: `document.getElementsByClassName("minhaClasse")`
- **Seletor de tag:** 
    - jQuery: `$("p")`
    - JavaScript: `document.getElementsByTagName("p")`
- **Combinar busca:** 
    - jQuery: `$("#minhaTabela tr")`
    - JavaScript: `document.getElementById("minhaTabela").getElementsByTagName("tr")`

### Object

Objetos são como armários com gavetas que guardam informações diferentes, como nome, sobrenome e idade.

#### Propriedades e Métodos

- **Propriedades:** São como etiquetas em gavetas, guardando informações específicas.
- **Acessando Propriedades:** `nomeObjeto.nomePropriedade` ou `nomeObjeto["nomePropriedade"]`
- **Métodos:** Ações especiais que um objeto pode fazer, como `pessoa.andar()`.
- **Palavra-chave "this":** Referência ao próprio objeto em um método, como `return this.nome + " " + this.sobrenome`.


#### Construtor

O construtor Object facilita criar objetos de forma rápida e padronizada.

```javascript
function Pessoa(_nome, _sobrenome, _idade) {
    this.nome = _nome;
    this.sobrenome = _sobrenome;
    this.idade = _idade;
}
```

var novaPessoa = new Pessoa("Zezinho", "Silva", 12);
