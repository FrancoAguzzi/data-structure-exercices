class Queue: 

    def __init__(self, maxQueueSize):
        self.__maxQueueSize = maxQueueSize
        self.__queue = []

    def getQueue():
        return self.__queue

    def getQueueSize():
        return len(self.getQueue())

    def queueIsEmpty() {
        return self.getQueueSize() == 0
    }

    def queueIsFull() {
        return self.getQueueSize() == self.__maxQueueSize
    }

    def getFirstElement() {
        return self.getQueue()[self.getQueueSize() - 1]
    }

    def getLastElement() {
        return self.getQueue()[0]
    }

    def push(value) {
        if (not self.queueIsFull()) {
            self.__stack.push(value)
        } else {
            raise Exception('Queue is full')
        }
    }

    def pop() {
        if (not self.queueIsEmpty()) {
            return self.__queue.pop()
        } else {
            raise Exception('Queue is empty')
        }
    }

queueExample = Queue()
