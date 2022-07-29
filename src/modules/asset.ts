import { MintTransaction } from "../../generated/Asset/Asset";
import { Asset } from "../../generated/schema";

export function addAsset(event: MintTransaction): void {
  const asset = new Asset(event.transaction.hash.toHex());

  asset.rarity = event.params.rarity;
  asset.owner = event.params.owner;
  asset.tokenId = event.params.tokenId;
  asset.category = event.params.category;
  asset.save();
}
