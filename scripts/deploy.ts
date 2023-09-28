import { ethers } from "hardhat";

async function main() { 

  const vs = await ethers.deployContract("VotingSystem");

  await vs.waitForDeployment();  
  console.log('vs', await vs.getAddress())
}
 
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
