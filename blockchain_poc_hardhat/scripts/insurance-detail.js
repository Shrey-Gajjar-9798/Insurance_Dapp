const hre = require("hardhat");

async function main() {
  
  const InsuranceCoverageDetails = await hre.ethers.getContractFactory("InsuranceCoverageDetails");
  const insuranceCoverageDetails = await InsuranceCoverageDetails.deploy();

  await insuranceCoverageDetails.deployed();

  console.log("insuranceCoverageDetails deployed to:", insuranceCoverageDetails.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});