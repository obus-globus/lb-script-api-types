import type { ByteIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteIterator.d.ts'
import type { LongConsumer } from '../../../../../it/unimi/dsi/fastutil/longs/LongConsumer.d.ts'
import type { LongIterator } from '../../../../../it/unimi/dsi/fastutil/longs/LongIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { LongConsumer } from '../../../../../java/util/function/LongConsumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class LongIterators$ByteIteratorWrapper extends Object implements LongIterator {
    constructor(arg0: ByteIterator)
    // private iterator: ByteIterator;
    forEachRemaining(arg0: (param0: number) => void): void;
    forEachRemaining(arg0: (param0: number) => void): void;
    forEachRemaining(arg0: (param0: number) => void): void;
    hasNext(): boolean;
    next(): number;
    next(): number;
    nextLong(): number;
    remove(): void;
    skip(arg0: number): number;
    skip(arg0: number): number;
}