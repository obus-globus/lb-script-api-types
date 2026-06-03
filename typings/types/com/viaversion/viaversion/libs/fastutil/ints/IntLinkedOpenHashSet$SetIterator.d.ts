import type { IntConsumer } from '../../../../../../com/viaversion/viaversion/libs/fastutil/ints/IntConsumer.d.ts'
import type { IntListIterator } from '../../../../../../com/viaversion/viaversion/libs/fastutil/ints/IntListIterator.d.ts'
import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { IntConsumer as IntConsumer_2 } from '../../../../../../java/util/function/IntConsumer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class IntLinkedOpenHashSet$SetIterator extends Object implements IntListIterator {
    constructor(null_: IntLinkedOpenHashSet$SetIterator)
    constructor(null_: IntLinkedOpenHashSet$SetIterator, arg1: number)
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
    nextInt(): number;
    previous(): number;
    previousIndex(): number;
    previousInt(): number;
    remove(): void;
    remove(): void;
    set(arg0: number): void;
    set(arg0: number): void;
}