import { MintTransaction } from "../../generated/Asset/Asset";
import { addAsset } from "../modules/asset";
import { addAssetCount } from "../modules/count";

export function handleMintTransaction(event: MintTransaction): void {
  addAsset(event);
  addAssetCount();
}
