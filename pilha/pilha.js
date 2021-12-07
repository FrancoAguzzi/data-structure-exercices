var Stack = /** @class */ (function () {
    function Stack(maxStackSize) {
        this.maxStackSize = maxStackSize;
        this.stack = [];
    }
    Stack.prototype.getStack = function () {
        return this.stack;
    };
    Stack.prototype.getStackLength = function () {
        return this.stack.length;
    };
    Stack.prototype.stackIsEmpty = function () {
        return this.stack.length === 0;
    };
    Stack.prototype.stackIsFull = function () {
        return this.stack.length === this.maxStackSize;
    };
    Stack.prototype.push = function (value) {
        if (!this.stackIsFull())
            this.stack.push(value);
        else
            throw Error('Stack is full');
    };
    Stack.prototype.pop = function () {
        if (!this.stackIsEmpty())
            return this.stack.pop();
        else
            throw Error('Stack is empty');
    };
    Stack.prototype.top = function () {
        if (!this.stackIsEmpty())
            return this.stack[this.getStackLength() - 1];
        else
            throw Error('Stack is empty');
    };
    return Stack;
}());
var stackExample = new Stack(5);
console.log(stackExample.getStackLength()); // 0
console.log(stackExample.stackIsEmpty()); // true
console.log(stackExample.stackIsFull()); // false
stackExample.push(1);
stackExample.push('banana');
console.log(stackExample.getStack()); // [1, 'banana']
console.log(stackExample.pop()); // 'banana'
console.log(stackExample.getStack()); // [1]
console.log(stackExample.top()); // 1
console.log(stackExample.pop()); // 1
console.log(stackExample.getStack()); // []
