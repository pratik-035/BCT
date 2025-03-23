// Practial 5 : Create a simple blockchain to record deposit and withdrawl transactions.

const c = require('crypto')

class Block{
    constructor(i, t, op, m, b=0, ph='') {
        this.i = i;
        this.t = t;
        this.op = op;
        this.m = m;
        this.b = b;
        this.ph = ph;
        this.h = this.calHash();
   }
   
   calHash() {
    return c.createHash('sha256')
    .update(this.i + this.t + this.op + this.m + this.b + this.ph)
    .digest('hex')
   }

}

class Blockchain {
    constructor(){
        this.chain = [this.createGBlock()];
    }

    createGBlock(){
        return new Block(0, new Date(), 'D', 1000, 0, '0');
    }

    getCBlock(){
        return this.chain[this.chain.length - 1];
    }

    addBlock(nb) { 
        nb.ph = this.getCBlock().h; 
 
        if (nb.op == "D") { 
            nb.b = this.getCBlock().b + nb.m; 
        } 
        else if (nb.op == "W") { 
            if (this.getCBlock().b > nb.m) { 
                nb.b = this.getCBlock().b - nb.m; 
            } 
            else { 
                nb.b = this.getCBlock().b; 
            } 
        } 
        else { 
            console.log("Not a Valid Operation.") 
        } 
 
        nb.h = nb.calHash(); 
        this.chain.push(nb); 
    }

    validate() {

        for (let i=1; i < this.chain.length; i++) {
            let cb = this.chain[i];
            let pb = this.chain[i - 1];

            if (cb.h != cb.calHash()){
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
