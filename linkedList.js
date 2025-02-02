//Linked list with append, prepend, insert, remove and printList functions

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {}

  prepend(value) {}

  remove(value) {}

  insert(index, value) {}

  printList() {}
}

const myLinkedList = new LinkedList(10);

//Implement these
myLinkedList.append(5);
myLinkedList.prepend(2);
myLinkedList.remove(10);
myLinkedList.insert(1, 3);

myLinkedList.printList(); //Should print: 2, 3, 5
