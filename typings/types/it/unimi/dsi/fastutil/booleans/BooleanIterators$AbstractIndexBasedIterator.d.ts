import type { AbstractBooleanIterator } from '../../../../../it/unimi/dsi/fastutil/booleans/AbstractBooleanIterator.d.ts'
import type { BooleanConsumer } from '../../../../../it/unimi/dsi/fastutil/booleans/BooleanConsumer.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export abstract class BooleanIterators$AbstractIndexBasedIterator extends AbstractBooleanIterator {
    constructor(arg0: number, arg1: number)
    // private lastReturned: number;
    // private minPos: number;
    // private pos: number;
    forEachRemaining(arg0: (param0: boolean) => void): void;
    forEachRemaining(arg0: (param0: boolean) => void): void;
    get(arg0: number): boolean;
    getMaxPos(): number;
    hasNext(): boolean;
    nextBoolean(): boolean;
    remove(): void;
    remove(arg0: number): void;
    skip(arg0: number): number;
}