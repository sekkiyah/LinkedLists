class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  insertAtHead(data) {

  }

  getByIndex(idx) {
 
  }

  insertAtIndex(idx, val) {

  }

  removeHead() {

  }

  removeAtIndex(idx) {

  }
}

// DON'T TOUCH BELOW!!!!!!!!!!!

class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

LinkedList.fromValues = function (...values) {
  const ll = new LinkedList();
  for (let i = values.length - 1; i >= 0; i--) {
    ll.insertAtHead(values[i]);
  }
  return ll;
};

module.exports = LinkedList;
