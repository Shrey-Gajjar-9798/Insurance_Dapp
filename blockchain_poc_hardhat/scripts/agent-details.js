const hre = require("hardhat");

async function main() {
  
  const AgentDetails = await hre.ethers.getContractFactory("AgentDetails");
  const agentdetails = await AgentDetails.deploy();

  await agentdetails.deployed();

  console.log("AgentDetails deployed to:", agentdetails.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});