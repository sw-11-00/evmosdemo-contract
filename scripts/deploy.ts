import { ethers } from "hardhat";
import {BigNumber} from "ethers";

async function main() {

  // const BellaToken = await ethers.getContractFactory("BellaToken");
  // const bellaToken = await BellaToken.deploy(BigNumber.from("10000000000000000000000000"));
  // console.log(bellaToken)
  //
  // await bellaToken.deployed();
  //
  // console.log("Deployed to:", bellaToken.address);

  const SDNFT = await ethers.getContractFactory("SDNFT");
  const sdNFT = await SDNFT.deploy("StableDiffusionNFT", "SDNFT");
  console.log(sdNFT)

  await sdNFT.deployed();

  console.log("Deployed to:", sdNFT.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
