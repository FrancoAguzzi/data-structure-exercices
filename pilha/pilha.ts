// class Stack {
//     private maxStackSize: number;
//     private stack: any[];

//     constructor(maxStackSize) {
//         this.maxStackSize = maxStackSize;
//         this.stack = [];
//     }

//     getStack(): any[] {
//         return this.stack;
//     } 

//     getStackLength(): number {
//         return this.stack.length;
//     }

//     stackIsEmpty(): Boolean {
//         return this.stack.length === 0;
//     } 

//     stackIsFull(): Boolean {
//         return this.stack.length === this.maxStackSize;
//     }

//     push(value: any) {
//         if (!this.stackIsFull()) this.stack.push(value);
//         else throw Error('Stack is full');
//     }

//     pop(): any {
//         if (!this.stackIsEmpty()) return this.stack.pop();
//         else throw Error('Stack is empty');
//     }

//     top(): any {
//         if (!this.stackIsEmpty()) return this.stack[this.getStackLength() - 1];
//         else throw Error('Stack is empty');
//     }
// }

// let stackExample = new Stack(5);

// console.log(stackExample.getStackLength()) // 0
// console.log(stackExample.stackIsEmpty()) // true
// console.log(stackExample.stackIsFull()) // false
// stackExample.push(1)
// stackExample.push('banana')
// console.log(stackExample.getStack()) // [1, 'banana']
// console.log(stackExample.pop()) // 'banana'
// console.log(stackExample.getStack()) // [1]
// console.log(stackExample.top()) // 1
// console.log(stackExample.pop()) // 1
// console.log(stackExample.getStack()) // []
