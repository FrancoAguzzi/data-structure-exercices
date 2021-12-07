var Elemento = /** @class */ (function () {
    function Elemento(valor) {
        this.valor = valor;
        this.anterior;
    }
    Elemento.prototype.getValor = function () {
        return this.valor;
    };
    Elemento.prototype.getAnterior = function () {
        return this.anterior;
    };
    Elemento.prototype.setAnterior = function (anterior) {
        this.anterior = anterior;
    };
    return Elemento;
}());
var Pilha = /** @class */ (function () {
    function Pilha(tamanhoMaximo) {
        this.tamanhoMaximo = tamanhoMaximo;
        this.pilha = [];
        this.topo = null;
    }
    Pilha.prototype.getPilha = function () {
        return this.pilha;
    };
    Pilha.prototype.estaVazia = function () {
        return this.pilha.length === 0;
    };
    Pilha.prototype.estaCheia = function () {
        return this.pilha.length === this.tamanhoMaximo;
    };
    Pilha.prototype.top = function () {
        if (this.estaVazia()) {
            throw new Error('Pilha está vazia');
        }
        else {
            return this.topo;
        }
    };
    Pilha.prototype.push = function (value) {
        if (this.estaCheia()) {
            throw new Error('Pilha está cheia');
        }
        else {
            var anteriorMomentaneo = this.pilha.length ? this.top() : null;
            var novoElemento = new Elemento(value);
            this.topo = novoElemento;
            novoElemento.setAnterior(anteriorMomentaneo);
            this.pilha.push(novoElemento);
        }
    };
    Pilha.prototype.pop = function () {
        if (this.estaVazia()) {
            throw new Error('Pilha está vazia');
        }
        else {
            var seraRemovido = this.pilha[this.pilha.length - 1];
            this.pilha.pop();
            this.topo = this.pilha[this.pilha.length - 1];
            return seraRemovido;
        }
    };
    return Pilha;
}());
var pilha = new Pilha(5);
console.log(pilha.getPilha());
// O código abaixo retorna o erro 'Pilha está vazia'
// console.log(pilha.top())
pilha.push(1);
console.log(pilha.getPilha());
pilha.push('dois');
console.log(pilha.getPilha());
pilha.push(3.0);
console.log(pilha.getPilha());
pilha.push(true);
console.log(pilha.getPilha());
pilha.push([5]);
console.log(pilha.getPilha());
console.log(pilha.top());
// O código abaixo retorna o erro 'Pilha está cheia'
// pilha.push(6)
pilha.pop();
console.log(pilha.getPilha());
pilha.pop();
console.log(pilha.getPilha());
pilha.pop();
console.log(pilha.getPilha());
pilha.pop();
console.log(pilha.getPilha());
pilha.pop();
console.log(pilha.getPilha());
// O código abaixo retorna o erro 'Pilha está vazia'
// pilha.pop()
