class List:
    def __init__(self, maxListSize):
        self.__list = [None] * maxListSize
        self.__maxListSize = maxListSize

    def getList(self):
        return self.__list

    def getListLength(self):
        return len(self.__list)

    def getElementsNumber(self):
        count = 0
        for element in self.__list:
            if (element is not None):
                count += 1
        return count

    def listIsEmpty(self):
        return self.getListLength() == 0

    def listIsFull(self):
        return self.getElementsNumber() == self.__maxListSize

    # def getFirstEmptyPosition(self):
    #     for index, element in self.__list:
    #         if (element is None):
    #             return index 

    def getElementByPosition(self, position):
        if (not self.listIsEmpty() and self.__list[position] is not None and position < self.__maxListSize):
            return self.__list[position]
        else:
            raise Exception('The position requested has no element')

    def getElementByValue(self, value):
        if (not self.listIsEmpty()):
            return self.getList().index(value) 
        else:
            raise Exception('The element requested does not exist')


    # def setElement(self, elementValue, elementPosition = self.getFirstEmptyPosition()):
    def setElement(self, value, position = 1):
        if (not self.listIsFull()):
            del self.__list[position]
            self.__list.insert(position, value)
        else:
            raise Exception('List is full')

    def removeElement(self, position):
        if (not self.listIsEmpty() and self.__list[position] is not None):
            del self.__list[position]
            self.__list.insert(position, None)
        else:
            raise Exception('The position requested has no element')



listExample = List(5)
print('Initialized list: ' + str(listExample.getList()))
# The commented code below will raise a 'The position requested has no element' Exception
# listExample.getElementByPosition(0)
listExample.setElement(0, 0)
print("Added value '0' at position '0'")
listExample.setElement(10, 1)
print("Added value '10' at position '1'")
listExample.setElement(20, 2)
print("Added value '20' at position '2'")
listExample.setElement(30, 3)
print("Added value '30 at position '3'")
listExample.setElement(40, 4)
print("Added value '40 at position '4'")
# The commented code below wil raise a 'List is full' Exception
# listExample.setElement(50, 5)
print('List elements number: ' + str(listExample.getElementsNumber()))
print('Current List: ' + str(listExample.getList()))
listExample.removeElement(0)
print("Removed element at position '0'")
listExample.removeElement(2)
print("Removed element at position '2'")
print('Current List: ' + str(listExample.getList()))
print('Get element position by value: ' + str(listExample.getElementByValue(10)))
# The commented code below will raise a "X is not in the list" Exception
# print(listExample.getElementByValue(88))