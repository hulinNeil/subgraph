import { Token } from '../../generated/schema';
import { AzukiToken, Transfer } from '../../generated/Token/AzukiToken';
import { addTokenCount } from './count';

const AzukiIdPrefix = 'Azuki #';
const AzukiTokenImagePrefix = 'https://ikzttp.mypinata.cloud/ipfs/QmYDvPAXtiJg7s8JdRBSLWdgSphQdac8j1YuQNNxcGE1hg/';
const AzukiAddress = '0xed5af388653567af2f388e6224dc7c4b3241c544';

export function updateAzukiToken(event: Transfer): void {
  const ID = AzukiIdPrefix + event.params.tokenId.toString();

  let token = Token.load(ID);
  if (!token) {
    token = new Token(ID);
    token.tokenId = event.params.tokenId;
    token.tokenAddress = AzukiAddress;
    token.tokenImage = AzukiTokenImagePrefix + event.params.tokenId.toString() + '.png';
    const tokenContract = AzukiToken.bind(event.address);
    token.tokenUrl = tokenContract.tokenURI(event.params.tokenId);
    addTokenCount();
  }

  token.owner = event.params.to;
  token.save();
}
