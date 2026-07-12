import type { Object } from '../java/lang/Object.d.ts'
import type { Buffer } from '../okio/Buffer.d.ts'
import type { ByteString } from '../okio/ByteString.d.ts'
export class Options$Companion extends Object {
    // private buildTrieRecursive(nodeOffset: number, node: Buffer, byteStringOffset: number, byteStrings: ByteString[], fromIndex: number, toIndex: number, indexes: number[]): void;
    of(...byteStrings: ByteString[]): (Object | null)[];
}