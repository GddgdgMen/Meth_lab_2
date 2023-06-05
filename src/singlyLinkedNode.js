'use strict';

class SinglyLinkedNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

module.exports = { SinglyLinkedNode };