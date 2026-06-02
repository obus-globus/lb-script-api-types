import type { LongListIterator } from '../../../../../../com/viaversion/viaversion/libs/fastutil/longs/LongListIterator.d.ts'
import type { LongConsumer } from '../../../../../../java/util/function/LongConsumer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class LongLinkedOpenHashSet$SetIterator extends Object implements LongListIterator {
    constructor(null_: LongLinkedOpenHashSet$SetIterator)
    constructor(null_: LongLinkedOpenHashSet$SetIterator, arg1: number)
    // private curr: number;
    // private index: number;
    // private next: number;
    // private prev: number;
    add(arg0: number): void;
    add(arg0: number): void;
    // private ensureIndexKnown(): void;
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