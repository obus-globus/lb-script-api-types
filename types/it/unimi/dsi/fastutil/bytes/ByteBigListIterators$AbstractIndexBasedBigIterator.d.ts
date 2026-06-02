import type { AbstractByteIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/AbstractByteIterator.d.ts'
import type { ByteConsumer } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteConsumer.d.ts'
export abstract class ByteBigListIterators$AbstractIndexBasedBigIterator extends AbstractByteIterator {
    constructor(arg0: number, arg1: number)
    // private lastReturned: number;
    // private minPos: number;
    // private pos: number;
    forEachRemaining(arg0: (param0: number) => void): void;
    get(arg0: number): number;
    getMaxPos(): number;
    hasNext(): boolean;
    nextByte(): number;
    remove(): void;
    remove(arg0: number): void;
    skip(arg0: number): number;
    skip(arg0: number): number;
}