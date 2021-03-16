const sha256 = require('sha256');
//creating a Block Chain for practice

// Initialize Function

function BlockChain(){
	this.chain = [];
	this.pendingTransactions = [];
}

/*	
-> A block should have some properties
	. Index
	. TimeStamp
	. Transactions (obviously :) { Insert Pending Transactions }
	. nonce
	. Hash { Hash of the Transactions }
	. previous block hash
-> Input :- (nonce,previousBlockHash,hash)
-> Push This Block in Chain
-> Initialize Pending transactions
-> Return the block
*/
BlockChain.prototype.createNewBlock = function(nonce,previousBlockHash,hash) {
	const newBlock = {
		index : this.chain.length + 1,
		timeStamp : Date.now(),
		transactions : this.pendingTransactions,
		nonce : nonce,
		hash : hash,
		previousBlockHash : previousBlockHash
	};
	this.pendingTransactions = [];
	this.chain.push(newBlock);

	return newBlock;
};


/*
3)			Get Last Block Method
<<-------------------------------------------->>
-> Return the last block in Chain
*/

BlockChain.prototype.getLastBlock = function(){
	return this.chain[this.chain.length - 1];
}



/*

4)			Create A New Transaction Method
<<---------------------------------------------------->>

-> A Transaction have some attributes
	. Sender
	. Rreciever
	. Amount
-> Input :- (amount , sender , reciever)
-> Add transactions to pendingTransactions
-> Return Block index in which transaction will reside
*/


BlockChain.prototype.createNewTransaction = function(amount , sender , reciever){
	const newTransaction = {
			amount : amount,
			sender : sender,
			reciever : reciever
	}
	this.pendingTransactions.push(newTransaction);
	return this.getLastBlock()['index'] + 1;
}

/* ## 5. Hash Block Method

Hash Block is created with the help of SHA-256. It take an input string.
String = previousBlockHash + Block data + nonce
Block data is an object so it is stringify by JSON
convert nonce in string
*/

BlockChain.prototype.hashBlock = function(previousBlockHash , blockData , nonce){
		const	dataAsString = previousBlockHash + JSON.stringify(blockData) + nonce.toString();
		const	hash 	= 	sha256(dataAsString);
		return 	hash;
}

/*
## 6. Proof Of Work
> Input :- (previousBlockHash , CurrentBlockData)
we found a nonce such that generated hash starts with 0000.
It takes a lot of computing power.
* returns nonce
*/

BlockChain.prototype.proofOfWork = function(previousBlockHash, currentBlockData ){
		let	nonce = 0;
		let hash = this.hashBlock(previousBlockHash, currentBlockData, nonce);
		while(hash.substring(0,4) != '0000'){
			nonce++;
			hash = this.hashBlock(previousBlockHash, currentBlockData, nonce);
		}
		return nonce;
}

module.exports = BlockChain;