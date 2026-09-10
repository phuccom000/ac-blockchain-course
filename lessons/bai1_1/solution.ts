import crypto from "crypto";

export type Block = {
  index: number;
  timestamp: string;
  transactions: any[];
  previous_hash: string;
  current_hash: string;
};

// ✍️ TODO: Viết hàm tại đây
export function isValidBlock(block: Block): boolean {
  if (!block || typeof block !== "object") return false;

  const value =
    block.index +
    block.timestamp +
    JSON.stringify(block.transactions) +
    block.previous_hash;

  const expected = crypto.createHash("sha256").update(value).digest("hex");
  return expected === block.current_hash;
}
