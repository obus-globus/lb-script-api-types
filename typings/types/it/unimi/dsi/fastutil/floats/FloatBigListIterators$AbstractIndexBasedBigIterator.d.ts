import type { AbstractFloatIterator } from '../../../../../it/unimi/dsi/fastutil/floats/AbstractFloatIterator.d.ts'
import type { FloatConsumer } from '../../../../../it/unimi/dsi/fastutil/floats/FloatConsumer.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { DoubleConsumer } from '../../../../../java/util/function/DoubleConsumer.d.ts'
export abstract class FloatBigListIterators$AbstractIndexBasedBigIterator extends AbstractFloatIterator {
    constructor(arg0: number, arg1: number)
    // private lastReturned: number;
    // private minPos: number;
    // private pos: number;
    forEachRemaining(arg0: (param0: number) => void): void;
    get(arg0: number): number;
    getMaxPos(): number;
    hasNext(): boolean;
    nextFloat(): number;
    remove(): void;
    remove(arg0: number): void;
    skip(arg0: number): number;
}