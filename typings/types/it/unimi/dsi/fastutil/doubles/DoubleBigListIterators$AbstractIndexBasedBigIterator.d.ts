import type { AbstractDoubleIterator } from '../../../../../it/unimi/dsi/fastutil/doubles/AbstractDoubleIterator.d.ts'
import type { DoubleConsumer } from '../../../../../it/unimi/dsi/fastutil/doubles/DoubleConsumer.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { DoubleConsumer as DoubleConsumer_2 } from '../../../../../java/util/function/DoubleConsumer.d.ts'
export abstract class DoubleBigListIterators$AbstractIndexBasedBigIterator extends AbstractDoubleIterator {
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
    nextDouble(): number;
    remove(): void;
    remove(arg0: number): void;
    skip(arg0: number): number;
    skip(arg0: number): number;
}