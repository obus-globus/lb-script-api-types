import type { ByteConsumer } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteConsumer.d.ts'
import type { ByteListIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ByteLinkedOpenCustomHashSet$SetIterator extends Object implements ByteListIterator {
    constructor(null_: ByteLinkedOpenCustomHashSet$SetIterator)
    constructor(null_: ByteLinkedOpenCustomHashSet$SetIterator, arg1: number)
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
    nextByte(): number;
    nextIndex(): number;
    previous(): number;
    previousByte(): number;
    previousIndex(): number;
    remove(): void;
    remove(): void;
    set(arg0: number): void;
    set(arg0: number): void;
}