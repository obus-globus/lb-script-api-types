import type { ShortConsumer } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortConsumer.d.ts'
import type { ShortListIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ShortLinkedOpenHashSet$SetIterator extends Object implements ShortListIterator {
    constructor(null_: ShortLinkedOpenHashSet$SetIterator)
    constructor(null_: ShortLinkedOpenHashSet$SetIterator, arg1: number)
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
    nextShort(): number;
    previous(): number;
    previousIndex(): number;
    previousShort(): number;
    remove(): void;
    remove(): void;
    set(arg0: number): void;
    set(arg0: number): void;
}