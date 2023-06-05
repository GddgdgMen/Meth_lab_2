'use strict';

import { SinglyLinkedNode } from './src/singlyLinkedNode';

const list = new SinglyLinkedList();
const list2 = new SinglyLinkedList();

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