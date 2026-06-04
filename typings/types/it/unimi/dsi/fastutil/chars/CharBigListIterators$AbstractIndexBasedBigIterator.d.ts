import type { AbstractCharIterator } from '../../../../../it/unimi/dsi/fastutil/chars/AbstractCharIterator.d.ts'
import type { CharConsumer } from '../../../../../it/unimi/dsi/fastutil/chars/CharConsumer.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { IntConsumer } from '../../../../../java/util/function/IntConsumer.d.ts'
export abstract class CharBigListIterators$AbstractIndexBasedBigIterator extends AbstractCharIterator {
    constructor(arg0: number, arg1: number)
    // private lastReturned: number;
    // private minPos: number;
    // private pos: number;
    forEachRemaining(arg0: (param0: string) => void): void;
    forEachRemaining(arg0: (param0: number) => void): void;
    get(arg0: number): string;
    getMaxPos(): number;
    hasNext(): boolean;
    nextChar(): string;
    remove(): void;
    remove(arg0: number): void;
    skip(arg0: number): number;
}