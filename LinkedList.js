class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  insertAtHead(data) {
    const node = new Node(data);
    node.next = this.head;
    this.head = node;
    this.length++;
  }

  getByIndex(idx) {
    if (idx < 0) {
      return null;
    }
    let currentNode = this.head;
    let count = 0;
    while (count < idx) {
      if (currentNode.next) {
        currentNode = currentNode.next;
        count++;
      } else {
        return null;
      }
    }
    return currentNode;
  }

  insertAtIndex(idx, val) {
    if (idx > this.length || idx < 0) {
      return null;
    } else if (idx === 0) {
      this.insertAtHead(val);
    } else {
      const node = new Node(val);
      node.next = this.getByIndex(idx);
      this.getByIndex(idx - 1).next = node;
      this.length++;
    }
  }

  removeHead() {
    this.head = this.head.next;
    this.length--;
  }

  removeAtIndex(idx) {
    if (idx > this.length || idx < 0) {
      return null;
    } else if (idx === 0) {
      this.removeHead();
    } else {
      this.getByIndex(idx - 1).next = this.getByIndex(idx).next;
      this.length--;
    }
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
