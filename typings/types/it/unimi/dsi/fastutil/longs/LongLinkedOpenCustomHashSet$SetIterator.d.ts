import type { LongConsumer } from '../../../../../it/unimi/dsi/fastutil/longs/LongConsumer.d.ts'
import type { LongListIterator } from '../../../../../it/unimi/dsi/fastutil/longs/LongListIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { LongConsumer as LongConsumer_2 } from '../../../../../java/util/function/LongConsumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class LongLinkedOpenCustomHashSet$SetIterator extends Object implements LongListIterator {
    constructor(null_: LongLinkedOpenCustomHashSet$SetIterator)
    constructor(null_: LongLinkedOpenCustomHashSet$SetIterator, arg1: number)
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
    nextIndex(): number;
    nextLong(): number;
    previous(): number;
    previousIndex(): number;
    previousLong(): number;
    remove(): void;
    remove(): void;
    set(arg0: number): void;
    set(arg0: number): void;
}