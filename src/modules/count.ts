import { Count } from "../../generated/schema";

const DEFAULT_ID = "all";

export const addTokenCount = (): void => {
  let count = Count.load(DEFAULT_ID);
  if (!count) {
    count = new Count(DEFAULT_ID);
    count.tokenTotal = 0;
  }
  count.tokenTotal += 1;
  count.save();
};
