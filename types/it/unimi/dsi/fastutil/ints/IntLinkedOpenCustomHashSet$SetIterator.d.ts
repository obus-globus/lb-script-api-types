import type { IntListIterator } from '../../../../../it/unimi/dsi/fastutil/ints/IntListIterator.d.ts'
import type { IntConsumer } from '../../../../../java/util/function/IntConsumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class IntLinkedOpenCustomHashSet$SetIterator extends Object implements IntListIterator {
    constructor(null_: IntLinkedOpenCustomHashSet$SetIterator)
    constructor(null_: IntLinkedOpenCustomHashSet$SetIterator, arg1: number)
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
    nextInt(): number;
    previous(): number;
    previousIndex(): number;
    previousInt(): number;
    remove(): void;
    remove(): void;
    set(arg0: number): void;
    set(arg0: number): void;
}