class Stack:
    def __init__(self, maxStackSize):
        self.__stack = []
        self.__maxStackSize = maxStackSize

    def getStack(self):
        return self.__stack

    def getStackLength(self):
        return len(self.__stack)

    def stackIsEmpty(self):
        return self.getStackLength() == 0

    def stackIsFull(self):
        return self.getStackLength() == self.__maxStackSize

    def push(self, element):
        if (not self.stackIsFull()):
            self.__stack.append(element)
        else:
            raise Exception('Stack is full')

    def pop(self):
        if (not self.stackIsEmpty()):
            return self.__stack.pop()
        else:
            raise Exception('Stack is empty')

    def top(self):
        if (not self.stackIsEmpty()):
            return self.__stack[self.getStackLength() - 1]
        else:
            raise Exception('Stack is empty')


stackExample = Stack(4)
# The commented code below will raise a "Stack is empty" Exception
# stackExample.top()
stackExample.push(1)
print('Executed Push with value 1')
print('Stack top: ' + str(stackExample.top()))
stackExample.push(2) 
print('Executed Push with value 2')
print('Stack top: ' + str(stackExample.top()))
stackExample.push(3) 
print('Executed Push with value 3')
print('Stack top: ' + str(stackExample.top()))
stackExample.push(4)
print('Executed Push with value 4')
print('Stack top: ' + str(stackExample.top()))
# The commented code below will raise a "Stack is full" Exception
# stackExample.push(5)
stackExample.pop()
print('Executed Pop')
print('Stack top: ' + str(stackExample.top()))
stackExample.pop()
print('Executed Pop')
print('Stack top: ' + str(stackExample.top()))
stackExample.pop()
print('Executed Pop')
print('Stack top: ' + str(stackExample.top()))
# The commented code below will raise a "Stack is empty" Exception
# stackExample.pop()