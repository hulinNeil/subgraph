import { Transfer } from "../../generated/Token/AzukiToken";
import { updateAzukiToken } from "../modules/token";

export function handleTransfer(event: Transfer): void {
  updateAzukiToken(event);
}
