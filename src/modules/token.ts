import { Token } from "../../generated/schema";
import { Transfer } from "../../generated/Token/AzukiToken";

const AzukiAddress = "0xed5af388653567af2f388e6224dc7c4b3241c544";

export function updateAzukiToken(event: Transfer): void {
  const ID = event.params.tokenId.toString() + AzukiAddress;

  let token = Token.load(ID);
  if (!token) {
    token = new Token(ID);
  }

  token.owner = event.params.to;
  token.tokenId = event.params.tokenId;
  token.tokenAddress = AzukiAddress;
  token.save();
}
