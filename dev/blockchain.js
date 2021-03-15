const sha256 = require('sha256');

// Constructor function

function Blockchain(){
	this.chain = [];
	this.pendingTransactions = [];
}

Blockchain.prototype.createNewBlock = function(nonce , previosBlockHash , hash) {
		const newBlock = {
			index : this.chain.length + 1,
			timestamp : Date.now(),
			transactions : this.pendingTransactions,
			nonce : nonce,
			hash : hash,
			previosBlockHash : previosBlockHash
		};

		this.pendingTransactions = [];
		this.chain.push(newBlock);
		return newBlock;
};

Blockchain.prototype.getLastBlock = function() {
		return this.chain[this.chain.length-1];
}

Blockchain.prototype.createNewTransaction = function(amount , sender , reciever){
	const newTransaction = {
		amount : amount,
		sender : sender,
		reciever : reciever
	}
	this.pendingTransactions.push(newTransaction);

	return this.getLastBlock() ['index'] + 1 ; 
}

Blockchain.prototype.hashBlock = function(previosBlockHash , currentBlockData, nonce){
		const dataAsString = previosBlockHash + nonce.toString() + JSON.stringify(currentBlockData);
		const hash = sha256(dataAsString);
		return hash;

}

Blockchain.prototype.proofOfWork = function(previosBlockHash , currentBlockData){
	let nonce = 0;
	let hash = this.hashBlock(previosBlockHash,currentBlockData,nonce);
	while(hash.substring(0,4) != '0000'){
		nonce++;
		hash = this.hashBlock(previosBlockHash,currentBlockData,nonce);
	}
	return nonce;
}
module.exports = Blockchain;