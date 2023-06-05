'use strict';

const isChar = (element) => {
  if (typeof element !== 'string' || element.length !== 1) {
    throw new Error('Plese input a character');
  }
  return true;
};

const validateIndex = (index, length) => {
    if (typeof index !== 'number') {
        throw new Error('PLease choose valid index number');  
     }
    if (index < 0 || index >= length) {
    return false;
  }
  return true;
};

export default { isChar, validateIndex };