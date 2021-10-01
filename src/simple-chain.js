import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {
  chain: [],

  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    if (arguments.length < 1) {
      this.chain.push('( )');
    } else {
      this.chain.push(value);
    }
    return this;
  },

  removeLink(position) {
    if (typeof position !== 'number' || position <= 0 || position > this.chain.length - 1) {
      this.chain = [];
      throw new Error(`You can't remove incorrect link!`);
    }
    this.chain.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain() {
    let res = this.chain.map(el => el !== ' ' ? '( ' + el + ' )' : '( )').join('~~');
    this.chain = [];
    return res;
  }
};
