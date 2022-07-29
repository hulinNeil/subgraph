import { Count } from "../../generated/schema";

const DEFAULT_ID = "all";

export const addAssetCount = (): void => {
  let count = Count.load(DEFAULT_ID);
  if (!count) {
    count = new Count(DEFAULT_ID);
    count.assetTotal = 0;
    count.tokenTotal = 0;
  }
  count.assetTotal += 1;
  count.save();
};

// export function addTokenCount(): void {
//   let count = Count.load(DEFAULT_ID);
//   if (!count) {
//     count = new Count(DEFAULT_ID);
//     count.tokenTotal = 0;
//   }
//   count.tokenTotal += 1;
//   count.save();
// }
