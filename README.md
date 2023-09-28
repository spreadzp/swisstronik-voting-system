# VotingSystem Smart Contract

This project contains a basic Ethereum smart contract for a voting system. It allows registered voters to cast their votes, tracks the total number of votes, and is deployed on the Swisstronik testnet. The contract also includes the ability for the contract owner to register new voters.

## Deployed contract

[Vote VotingSystem contract](https://explorer-evm.testnet.swisstronik.com/address/0xE5dE1Ce7b3bD05a429A1829Cc7D9F103AeBFf8Dd)
## Getting Started

To run and interact with the smart contract, follow the steps below.

### Prerequisites

1. Node.js: Make sure you have Node.js installed. You can download it [here](https://nodejs.org/).

2. Hardhat: This project uses Hardhat for development and deployment. Install it globally using npm:

```
   npm install -g hardhat


```

## Installation
1. Clone the repository to your local machine:

```
git clone https://github.com/your-username/VotingSystem.git
cd VotingSystem

```
2. Install the project dependencies:
```
npm install
```

## Usage
You can perform various tasks with the smart contract using Hardhat. Here are some examples:
1. Create .env and set private key:
```
cp sample.env .env
```
2. Paste your Metamask account private key to .env
3. Compile the contracts:

```
npx hardhat compile

```

4. Deploy the contract to a local development network (Hardhat Network):
```
npx hardhat node
npm run hh-deploy-local
```

5. Deploy the contract to a local development network (Swisstronik Network):
```
npm run hh-deploy-swisstronik
```
 
