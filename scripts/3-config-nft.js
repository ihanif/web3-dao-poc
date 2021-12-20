import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x7e7c68a1e4f9f07b66f1F9922e213FD20526d2dD"
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Donner Kebab",
        description: "This NFT will give you access to KebabDAO!",
        image: readFileSync("scripts/assets/kebab.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();
