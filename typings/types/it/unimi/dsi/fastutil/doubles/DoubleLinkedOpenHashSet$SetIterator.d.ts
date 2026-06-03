import type { DoubleConsumer } from '../../../../../it/unimi/dsi/fastutil/doubles/DoubleConsumer.d.ts'
import type { DoubleListIterator } from '../../../../../it/unimi/dsi/fastutil/doubles/DoubleListIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { DoubleConsumer as DoubleConsumer_2 } from '../../../../../java/util/function/DoubleConsumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DoubleLinkedOpenHashSet$SetIterator extends Object implements DoubleListIterator {
    constructor(null_: DoubleLinkedOpenHashSet$SetIterator)
    constructor(null_: DoubleLinkedOpenHashSet$SetIterator, arg1: number)
    // private curr: number;
    // private index: number;
    // private next: number;
    // private prev: number;
    add(arg0: number): void;
    add(arg0: number): void;
    // private ensureIndexKnown(): void;
    forEachRemaining(arg0: (param0: number) => void): void;
    forEachRemaining(arg0: (param0: number) => void): void;
    forEachRemaining(arg0: (param0: number) => void): void;
    hasNext(): boolean;
    hasPrevious(): boolean;
    next(): number;
    nextDouble(): number;
    nextIndex(): number;
    previous(): number;
    previousDouble(): number;
    previousIndex(): number;
    remove(): void;
    remove(): void;
    set(arg0: number): void;
    set(arg0: number): void;
}