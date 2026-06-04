import type { AbstractLongIterator } from '../../../../../it/unimi/dsi/fastutil/longs/AbstractLongIterator.d.ts'
import type { LongConsumer } from '../../../../../it/unimi/dsi/fastutil/longs/LongConsumer.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { LongConsumer as LongConsumer_2 } from '../../../../../java/util/function/LongConsumer.d.ts'
export abstract class LongIterators$AbstractIndexBasedIterator extends AbstractLongIterator {
    constructor(arg0: number, arg1: number)
    // private lastReturned: number;
    // private minPos: number;
    // private pos: number;
    forEachRemaining(arg0: (param0: number) => void): void;
    get(arg0: number): number;
    getMaxPos(): number;
    hasNext(): boolean;
    nextLong(): number;
    remove(): void;
    remove(arg0: number): void;
    skip(arg0: number): number;
}