import type { FloatConsumer } from '../../../../../it/unimi/dsi/fastutil/floats/FloatConsumer.d.ts'
import type { FloatListIterator } from '../../../../../it/unimi/dsi/fastutil/floats/FloatListIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { DoubleConsumer } from '../../../../../java/util/function/DoubleConsumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class FloatLinkedOpenHashSet$SetIterator extends Object implements FloatListIterator {
    constructor(null_: FloatLinkedOpenHashSet$SetIterator)
    constructor(null_: FloatLinkedOpenHashSet$SetIterator, arg1: number)
    // private curr: number;
    // private index: number;
    // private next: number;
    // private prev: number;
    add(arg0: number): void;
    // private ensureIndexKnown(): void;
    forEachRemaining(arg0: (param0: number) => void): void;
    hasNext(): boolean;
    hasPrevious(): boolean;
    next(): number;
    nextFloat(): number;
    nextIndex(): number;
    previous(): number;
    previousFloat(): number;
    previousIndex(): number;
    remove(): void;
    set(arg0: number): void;
}