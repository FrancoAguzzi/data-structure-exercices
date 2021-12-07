class Elemento {
    private valor: any;
    private prioridade: int;
    private proximo: Elemento;

    constructor(valor) {
        this.valor = valor;
        this.prioridade = prioridade;
        this.proximo = null;
    }

    getValor(): any {
        return this.valor;
    }

    getPrioridade(): int {
        return this.prioridade;
    }

    getProximo(): Elemento | null {
        return this.proximo;
    }

    setProximo(proximo: Elemento): void {
        this.proximo = proximo;
    }
}

class FilaComPrioridade {
    private tamanhoMaximo: number;
    private fila: Elemento[];
    private inicio: Elemento | null;
    private fim: Elemento | null;

    constructor(tamanhoMaximo) {
        this.tamanhoMaximo = tamanhoMaximo;
        this.fila = [];
        this.inicio = null;
        this.fim = null;
    }

    getFila(): Elemento[] {
        return this.fila;
    }

    getInicio(): Elemento | null {
        if (this.estaVazia()) {
            throw new Error('Fila está vazia');
        } else {
            return this.inicio;
        }
    }

    setInicio(valor): void {
        this.inicio = valor;
    }

    getFim(): Elemento | null {
        if (this.estaVazia()) {
            throw new Error('Fila está vazia');
        } else {
            return this.fim;
        }
    }

    setFim(valor): void {
        this.fim = valor;
    }

    estaVazia(): Boolean {
        return this.fila.length === 0;
    }

    estaCheia(): Boolean {
        return this.fila.length === this.tamanhoMaximo;
    }

    entrarNaFila(value, prioridade): void {
        if (this.estaCheia()) {
            throw new Error('Fila está cheia')
        } else {
            let novoElemento = new Elemento(value, prioridade)
            if (this.estaVazia()) {
                novoElemento.setProximo(null)
                this.fila.push(novoElemento)
                this.inicio = this.fila[0]
                this.fim = this.fila[0]
                return
            }
            let temp = this.fim
            let contador = 1
            while (temp.prioridade > prioridade) {
                temp = this.fim.getProximo()
                contador++
            }
            antigoProximo = temp.getProximo()
            temp.setProximo(novoElemento)
            novoElemento.setProximo(antigoProximo)
            this.lista.splice(this.fila.length[this.fila.length - contador], 0, novoElemento);
            if (contador === 1) {
                this.setFim(novoElemento)
            } else if (contador === this.fila.length) {
                this.setInicio(contador)
            }
        }
    }

    sairDaFila(): Elemento {
        if (this.estaVazia()) {
            throw new Error('Fila está vazia');
        } else {
            let seraRemovido = this.fila[0]; 
            this.fila.shift();
            
            if (!this.estaVazia()) {
                let anterior = this.fila[0];
                anterior.setProximo(null);
                this.setInicio(anterior);
            }
            return seraRemovido;
        }
    }
}

let fila = new Fila(5);

// O código abaixo retorna o erro 'Pilha está vazia'
// fila.getInicio();

console.log(fila.getFila());

fila.push(1);
console.log(fila.getFila());
fila.push(2);
console.log(fila.getFila());
fila.push(3);
console.log(fila.getFila());
fila.push(4);
console.log(fila.getFila());
fila.push(5);
console.log(fila.getFila());

// O código abaixo retorna o erro 'Pilha está cheia'
// fila.push(6);

console.log(fila.getInicio())
console.log(fila.getFim());

fila.pop();
console.log(fila.getFila());
fila.pop();
console.log(fila.getFila());
fila.push(6);
fila.pop();
console.log(fila.getFila());
fila.pop();
console.log(fila.getFila());
fila.pop();
console.log(fila.getFila());
fila.pop();
console.log(fila.getFila());

// O código abaixo retorna o erro 'Pilha está vazia'
// fila.pop();
