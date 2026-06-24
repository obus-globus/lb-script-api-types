import type { CharConsumer } from '../../../../../it/unimi/dsi/fastutil/chars/CharConsumer.d.ts'
import type { CharListIterator } from '../../../../../it/unimi/dsi/fastutil/chars/CharListIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { IntConsumer } from '../../../../../java/util/function/IntConsumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class CharLinkedOpenCustomHashSet$SetIterator extends Object implements CharListIterator {
    constructor(null_: (Object | null)[])
    constructor(null_: (Object | null)[], arg1: string)
    // private curr: number;
    // private index: number;
    // private next: number;
    // private prev: number;
    add(arg0: string): void;
    // private ensureIndexKnown(): void;
    forEachRemaining(arg0: (param0: string) => void): void;
    forEachRemaining(arg0: (param0: number) => void): void;
    hasNext(): boolean;
    hasPrevious(): boolean;
    next(): string;
    nextChar(): string;
    nextIndex(): number;
    previous(): string;
    previousChar(): string;
    previousIndex(): number;
    remove(): void;
    set(arg0: string): void;
}