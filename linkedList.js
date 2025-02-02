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

  //add to end of linked list.
  append(value) {
    const newNode = {
      value: value,
      next: null,
    };

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  //add value to the front of list
  prepend(value) {
    const newNode = {
      value: value,
      next: null,
    };

    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  //Iterate through linked list to remove the value;
  remove(value) {
    const index = traverse(value);
    //#TODO
  }

  insert(index, value) {
    if (index >= this.length) {
      return this.append(value);
    }

    const newNode = {
      value: value,
      next: null,
    }; //#TODO
  }

  //Traverse helper function
  traverse(index) {
    //#TODO
  }

  printList() {
    let travelNode = this.head;
    let valuesArray = [];
    while (travelNode !== null) {
      valuesArray.push(travelNode.value);
      travelNode = travelNode.next;
    }
    console.log(valuesArray);
    return valuesArray;
  }
}

const myLinkedList = new LinkedList(10);

//Implement these
myLinkedList.append(5);
myLinkedList.prepend(2);
myLinkedList.remove(10);
myLinkedList.insert(1, 3);

myLinkedList.printList(); //Should print: 2, 3, 5
