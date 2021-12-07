class Elemento {
    private valor: any;
    private anterior: any;

    constructor(valor) {
        this.valor = valor;
        this.anterior;
    }

    getValor(): any {
        return this.valor;
    }

    getAnterior(): Elemento | null {
        return this.anterior;
    }

    setAnterior(anterior): void {
        this.anterior = anterior;
    }
}

class Pilha {
    private tamanhoMaximo: number;
    private pilha: Elemento[];
    private topo: Elemento;

    constructor(tamanhoMaximo) {
        this.tamanhoMaximo = tamanhoMaximo;
        this.pilha = [];
        this.topo = null;
    }

    getPilha(): Elemento[] {
        return this.pilha;
    }

    estaVazia(): Boolean {
        return this.pilha.length === 0;
    }

    estaCheia(): Boolean {
        return this.pilha.length === this.tamanhoMaximo;
    }

    top(): Elemento {
        if (this.estaVazia()) {
            throw new Error('Pilha está vazia');
        } else {
            return this.topo;
        }
    }

    push(value: any): void {
        if (this.estaCheia()) {
            throw new Error('Pilha está cheia');
        } else {
            let anteriorMomentaneo = this.pilha.length ? this.top() : null;
            let novoElemento = new Elemento(value);
            this.topo = novoElemento;
            novoElemento.setAnterior(anteriorMomentaneo);
            this.pilha.push(novoElemento);
        }
    }

    pop(): Elemento {
        if (this.estaVazia()) {
            throw new Error('Pilha está vazia');
        } else {
            let seraRemovido = this.pilha[this.pilha.length - 1];
            this.pilha.pop();
            this.topo = this.pilha[this.pilha.length - 1];
            return seraRemovido;
        }
    }
}

let pilha = new Pilha(5);

console.log(pilha.getPilha())

// O código abaixo retorna o erro 'Pilha está vazia'
// console.log(pilha.top())

pilha.push(1)
console.log(pilha.getPilha())

pilha.push('dois')
console.log(pilha.getPilha())

pilha.push(3.0)
console.log(pilha.getPilha())

pilha.push(true)
console.log(pilha.getPilha())

pilha.push([5])
console.log(pilha.getPilha())

console.log(pilha.top())

// O código abaixo retorna o erro 'Pilha está cheia'
// pilha.push(6)

pilha.pop()
console.log(pilha.getPilha())

pilha.pop()
console.log(pilha.getPilha())

pilha.pop()
console.log(pilha.getPilha())

pilha.pop()
console.log(pilha.getPilha())

pilha.pop()
console.log(pilha.getPilha())

// O código abaixo retorna o erro 'Pilha está vazia'
// pilha.pop()