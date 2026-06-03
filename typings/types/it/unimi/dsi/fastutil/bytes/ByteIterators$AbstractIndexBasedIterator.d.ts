import type { AbstractByteIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/AbstractByteIterator.d.ts'
import type { ByteConsumer } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteConsumer.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { IntConsumer } from '../../../../../java/util/function/IntConsumer.d.ts'
export abstract class ByteIterators$AbstractIndexBasedIterator extends AbstractByteIterator {
    constructor(arg0: number, arg1: number)
    // private lastReturned: number;
    // private minPos: number;
    // private pos: number;
    forEachRemaining(arg0: (param0: number) => void): void;
    forEachRemaining(arg0: (param0: number) => void): void;
    forEachRemaining(arg0: (param0: number) => void): void;
    get(arg0: number): number;
    getMaxPos(): number;
    hasNext(): boolean;
    nextByte(): number;
    remove(): void;
    remove(arg0: number): void;
    skip(arg0: number): number;
}