'use strict';

const { isChar, validateIndex } = require('./validations');

class List {
  constructor() {
    this.list = [];
  }

  length() {
    return this.list.length;
  }

  append(element) {
    isChar(element);
    this.list.push(element);
  }

  insert(element, index) {
    isChar(element);
    validateIndex(index, this.length());
    this.list.splice(index, 0, element);
  }

  delete(index) {
    validateIndex(index, this.length());
    const deletedItem = this.list[index];
    this.list.splice(index, 1);
    return deletedItem;
  }

  deleteAll(element) {
    isChar(element);
    this.list = this.list.filter((node) => node !== element);
  }

  get(index) {
    validateIndex(index, this.length());
    return this.list[index];
  }

  clone() {
    const newList = new List();
    for (let i = 0; i < this.list.length; i++) {
      newList.append(this.list[i]);
    }
    return newList;
  }

  reverse() {
    this.list.reverse();
  }

  findFirst(element) {
    isChar(element);
    for (let i = 0; i < this.list.length; i++) {
      if (this.list[i] === element) return i;
    }
    return -1;
  }

  findLast(element) {
    isChar(element);
    for (let i = this.list.length - 1; i >= 0; i--) {
      if (this.list[i] === element) return i;
    }
    return -1;
  }

  clear() {
    this.list = [];
  }

  extend(elements) {
    for (let i = 0; i < elements.length(); i++) {
      this.list.push(elements.get(i));
    }
  }
}

export default {List}