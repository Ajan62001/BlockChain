#	BlockChain Creation

1) Initialize BlockChain
2) Create A New Block Method
3) Get Last Block Method
4) Create A New Transaction Method
5) Hash Block Method
6) Proof of Work
7) Creating Genesis Block
_____________________________________________



## 1. Initialize BlockChain

* Block Chain is a group of blocks.
* Block is a group of transaction.
* So block chain has Blocks (containing transactions) and pending transactions those are not in block(will be in a Block in future). Every BlockChain will be initialized as Chain and pending Transactions.


## 2. Create A New Block Method

* A block should have some properties
	* Index
	* TimeStamp
	* Transactions (obviously :) { Insert Pending Transactions }
	* nonce
	* Hash { Hash of the Transactions }
	* previous block hash

> Input :- (nonce,previousBlockHash,hash)
* Push This Block in Chain
* Initialize Pending transactions
* Return the block

## 	3. Get Last Block Method

* Return the last block in Chain


## 4. Create A New Transaction Method

* A Transaction have some attributes
	* Sender
	* Rreciever
	* Amount

> Input :- (amount , sender , reciever)
* Add transactions to pendingTransactions
* Return Block index in which transaction will reside

## 5. Hash Block Method
> Input :- (previousBlockHash , BlockData , nonce)
- Hash Block is created with the help of SHA-256. It take an input string.
> String = previousBlockHash + Block data + nonce
- Block data is an object so it is stringify by JSON
- convert nonce in string
- Returns hash

## 6. Proof Of Work
> Input :- (previousBlockHash , CurrentBlockData)
- we found a nonce such that generated hash starts with ***0000***.
- It takes a lot of computing power.
* returns nonce

## 7. Creating Genesis Block
- It is first block of block chain.
- It doesn't have nonce, previousBlockhash or data


