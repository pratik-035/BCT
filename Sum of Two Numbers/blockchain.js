// Practical 1(A) : Creating a simple blockchain to calculate sum of two numbers.

const c = require("crypto")

class Block {
    constructor(i, t, n1, n2, ph='') {
        this.i = i;
        this.t = t;
        this.n1 = n1;
        this.n2 = n2;
        this.sum = n1 + n2;
        this.ph = ph;
        this.h = this.calHash();
    }

    calHash() {
        return c.createHash('sha256').
        update(this.i + this.t + this.sum + this.ph).digest('hex');
    }
}

class Blockchain {
    constructor() {
        this.chain = [this.createGBlock()];
    }

    createGBlock() {
        return new Block(0, new Date(), 0, 0 ,'0');
    }

    getCBlock() {
        return this.chain[this.chain.length - 1];
    }

    addBlock(nb) {
        nb.ph = this.getCBlock().h
        nb.h = nb.calHash();
        this.chain.push(nb)
    }
}

module.exports.Block = Block;
module.exports.Blockchain = Blockchain;