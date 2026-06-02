import type { AbstractIntIterator } from '../../../../../it/unimi/dsi/fastutil/ints/AbstractIntIterator.d.ts'
import type { IntConsumer } from '../../../../../java/util/function/IntConsumer.d.ts'
export abstract class IntIterators$AbstractIndexBasedIterator extends AbstractIntIterator {
    constructor(arg0: number, arg1: number)
    // private lastReturned: number;
    // private minPos: number;
    // private pos: number;
    forEachRemaining(arg0: (param0: number) => void): void;
    get(arg0: number): number;
    getMaxPos(): number;
    hasNext(): boolean;
    nextInt(): number;
    remove(): void;
    remove(arg0: number): void;
    skip(arg0: number): number;
}