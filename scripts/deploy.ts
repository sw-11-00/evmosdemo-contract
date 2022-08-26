import { ethers } from "hardhat";

async function main() {
  const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
  const unlockTime = currentTimestampInSeconds + ONE_YEAR_IN_SECS;

  const Lock = await ethers.getContractFactory("Lock");
  const lock = await Lock.deploy(unlockTime);
  console.log(lock)

  await lock.deployed();

  console.log("Lock with 1 ETH deployed to:", lock.address);

  let tx = await lock.write();
  const receipt = await tx.wait();
  console.log(receipt.logs)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
