var Elemento = /** @class */ (function () {
    function Elemento(valor) {
        this.valor = valor;
        this.proximo = null;
    }
    Elemento.prototype.getValor = function () {
        return this.valor;
    };
    Elemento.prototype.getProximo = function () {
        return this.proximo;
    };
    Elemento.prototype.setProximo = function (proximo) {
        this.proximo = proximo;
    };
    return Elemento;
}());
var Fila = /** @class */ (function () {
    function Fila(tamanhoMaximo) {
        this.tamanhoMaximo = tamanhoMaximo;
        this.fila = [];
        this.inicio = null;
        this.fim = null;
    }
    Fila.prototype.getFila = function () {
        return this.fila;
    };
    Fila.prototype.getInicio = function () {
        if (this.estaVazia()) {
            throw new Error('Pilha está vazia');
        }
        else {
            return this.inicio;
        }
    };
    Fila.prototype.setInicio = function (valor) {
        this.inicio = valor;
    };
    Fila.prototype.getFim = function () {
        if (this.estaVazia()) {
            throw new Error('Pilha está vazia');
        }
        else {
            return this.fim;
        }
    };
    Fila.prototype.setFim = function (valor) {
        this.fim = valor;
    };
    Fila.prototype.estaVazia = function () {
        return this.fila.length === 0;
    };
    Fila.prototype.estaCheia = function () {
        return this.fila.length === this.tamanhoMaximo;
    };
    Fila.prototype.push = function (value) {
        if (this.estaCheia()) {
            throw new Error('Fila está cheia');
        }
        else {
            var anterior = this.fila.length ? this.fila[this.fila.length - 1] : null;
            var novoElemento = new Elemento(value);
            this.fila.push(novoElemento);
            this.setFim(novoElemento);
            this.setInicio(novoElemento);
            if (this.fila.length > 1) {
                anterior.setProximo(novoElemento);
                this.setInicio(this.fila[0]);
            }
        }
    };
    Fila.prototype.pop = function () {
        if (this.estaVazia()) {
            throw new Error('Pilha está vazia');
        }
        else {
            var seraRemovido = this.fila[this.fila.length - 1];
            this.fila.pop();
            if (!this.estaVazia()) {
                var anterior = this.fila[this.fila.length - 1];
                anterior.setProximo(null);
                this.setFim(anterior);
            }
            return seraRemovido;
        }
    };
    return Fila;
}());
var fila = new Fila(5);
// O código abaixo retorna o erro 'Pilha está vazia'
// fila.getInicio();
// console.log(fila.getFila());
fila.push(1);
// console.log(fila.getFila());
fila.push(2);
// console.log(fila.getFila());
fila.push(3);
// console.log(fila.getFila());
// fila.push(4);
// console.log(fila.getFila());
// fila.push(5);
// console.log(fila.getFila());
// O código abaixo retorna o erro 'Pilha está cheia'
// fila.push(6);
// console.log(fila.getInicio())
// console.log(fila.getFim());
// fila.pop();
// console.log(fila.getFila());
// fila.pop();
// console.log(fila.getFila());
// fila.push(6);
// fila.pop();
// console.log(fila.getFila());
// fila.pop();
// console.log(fila.getFila());
// fila.pop();
// console.log(fila.getFila());
// fila.pop();
// console.log(fila.getFila());
// O código abaixo retorna o erro 'Pilha está vazia'
// fila.pop();
console.log(fila.getInicio());
