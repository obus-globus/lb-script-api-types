import type { AbstractShortIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/AbstractShortIterator.d.ts'
import type { ShortConsumer } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortConsumer.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { IntConsumer } from '../../../../../java/util/function/IntConsumer.d.ts'
export abstract class ShortIterators$AbstractIndexBasedIterator extends AbstractShortIterator {
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
    nextShort(): number;
    remove(): void;
    remove(arg0: number): void;
    skip(arg0: number): number;
}