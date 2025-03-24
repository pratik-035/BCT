const crypto = require('crypto');

// Function to check if a number is prime
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Block class
class Block {
    constructor(index, number, previousHash = '') {
        this.index = index;
        this.number = number;
        this.isPrime = isPrime(number);
        this.timestamp = new Date().toISOString();
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
    }

    calculateHash() {
        return crypto.createHash('sha256')
            .update(this.index + this.number + this.isPrime + this.timestamp + this.previousHash)
            .digest('hex');
    }
}

// Blockchain class
class Blockchain {
    constructor() {
        this.chain = [this.createGenesisBlock()];
    }

    createGenesisBlock() {
        return new Block(0, 2, '0'); // Genesis block with 2 (a prime number)
    }

    getLatestBlock() {
        return this.chain[this.chain.length - 1];
    }

    addBlock(number) {
        const previousBlock = this.getLatestBlock();
        const newBlock = new Block(previousBlock.index + 1, number, previousBlock.hash);
        this.chain.push(newBlock);
    }

    isChainValid() {
        for (let i = 1; i < this.chain.length; i++) {
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i - 1];

            if (currentBlock.hash !== currentBlock.calculateHash()) {
                return false;
            }
            if (currentBlock.previousHash !== previousBlock.hash) {
                return false;
            }
        }
        return true;
    }
}

module.exports.Block = Block;
module.exports.Blockchain = Blockchain;
