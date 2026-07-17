import type { Object } from '../../../java/lang/Object.d.ts'
import type { ByteString } from '../../../kotlinx/io/bytestring/ByteString.d.ts'
export class ByteStringBuilder extends Object {
    constructor(initialCapacity?: number)
    // private buffer: number[];
    readonly capacity: number;
    // private offset: number;
    readonly size: number;
    append(byte: number): void;
    append(array: number[], startIndex: number, endIndex: number): void;
    // private ensureCapacity(requiredCapacity: number): void;
    toByteString(): ByteString;
}