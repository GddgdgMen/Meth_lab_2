'use strict';

const { SinglyLinkedList } = require('./src/singlyLinkedList.js');
const { List } = require('../src/list.js');

const list = new SinglyLinkedList();


list.append('d');
console.log(list.length());
list.append('k');
console.log(list.length());
console.log(list.get(1));
list2.append('d');
list2.append('o');
list2.append('n');
list2.append('k');
list2.append('e');
list2.append('y');
list2.append('k');
list2.append('o');
list2.append('n');
list2.append('g');
list2.extend(list);
console.log(list2.get(2));
console.log(list.length());
console.log(list2.length());
console.log(`${list2.get(0)}, ${list2.get(1)}, ${list2.get(2)}, ${list2.get(3)}, ${list2.get(4)}, ${list2.get(5)}`);

const list2 = new List();
list3.append('a');
list3.append('a');
list3.append('b');
list3.append('a');
console.log('list3 with second implementation', list1.get(0), list1.get(1), list1.get(2), list1.get(3));
console.log('index of first "a":', list3.findFirst('a'));
console.log('index of last "a":', list3.findLast('a'));

list3.deleteAll('a');
console.log('list3 after calling deleteAll("a"):', list3.get(0));

list3.clear();
console.log('list3 length after clearing:', list3.length());