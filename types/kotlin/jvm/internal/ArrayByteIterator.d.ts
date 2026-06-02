import type { ByteIterator } from '../../../kotlin/collections/ByteIterator.d.ts'
export class ArrayByteIterator extends ByteIterator {
    constructor(array: number[])
    // private array: number[];
    // private index: number;
    hasNext(): boolean;
    nextByte(): number;
}