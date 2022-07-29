import { Transfer } from "../../generated/Token/AzukiToken";
import { updateAzukiToken } from "../modules/token";
import { addTokenCount } from "../modules/count";

export function handleTransfer(event: Transfer): void {
  updateAzukiToken(event);
  addTokenCount();
}
