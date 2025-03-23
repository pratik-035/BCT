// Practical 4 : Create a simple blockchain to store only automorphic number also secure your automorphic number by DES Algorithm and validate the block before adding it to the blockchain.

const c = require('crypto')  
  
class Block {  
    constructor(i, t, n, ph = '') {  
        this.i = i;  
        this.t = t;  
        this.n = this.enc(n);  
        this.automorphic = this.morph();  
        this.ph = ph;  
        this.h = this.calHash();  
  
    }  
  
    morph() {  
        let n1 = this.dec(this.n);  
        let squared = n1 * n1;  
  
        let numStr = n1.toString();  
        let squaredStr = squared.toString();  
  
        let result = squaredStr.endsWith(numStr);  
  
        if (result == true) {  
            return "Automorphic Number"  
        }  
        else {  
            return "Not an Automorphic Number"  
        }  
    }  
 
    enc(text) {  
        const key = c.scryptSync('password', 'salt', 32);  
        const iv = c.randomBytes(16);  
        const cipher = c.createCipheriv('aes-256-cbc', key, iv);  
        const encrypted = cipher.update(text.toString(), 'utf8', 'hex') +  cipher.final('hex');  
        return iv.toString('hex') + ':' + encrypted;  
    }

    dec(encryptedText) {  
        const key = c.scryptSync('password', 'salt', 32);  
        const [ivHex, encrypted] = encryptedText.split(':');  
        const iv = Buffer.from(ivHex, 'hex');  
        const decipher = c.createDecipheriv('aes-256-cbc', key, iv);  
        const decrypted = decipher.update(encrypted, 'hex', 'utf8') +  decipher.final('utf8');  
        return parseInt(decrypted, 10);  
    } 
    calHash() {  
        return c.createHash('sha256').
        update(this.i + this.t + this.automorphic +  this.ph).digest('hex');  
    }  
}  

class Blockchain {
    constructor() {  
        this.chain = [this.createGBlock()];  
    }  

    createGBlock() {  
        return new Block(0, new Date(), 0, '0');  
    } 

    getCBlock() { 
        return this.chain[this.chain.length - 1];  
    } 

    addBlock(nb) {  
        if (nb.morph() == "Automorphic Number") {  
            nb.ph = this.getCBlock().h;  
            nb.h = nb.calHash();      
            this.chain.push(nb); 
        }
  
    }  

    validate() {  
        for (let i = 1; i < this.chain.length; i++) {  
            let cb = this.chain[i]  
            let pb = this.chain[i - 1]  
  
            if (cb.h != cb.calHash()) {  
                return false;  
            }  
  
            if (pb.h != cb.ph) {  
                return false;  
            }  
        }  
  
        return true;  
    }  

}

module.exports.Block = Block;
module.exports.Blockchain = Blockchain;