import { types } from "node:util";
if (!globalThis.isArrayBufferView) {
  (globalThis as any).isArrayBufferView = types.isArrayBufferView;
}
