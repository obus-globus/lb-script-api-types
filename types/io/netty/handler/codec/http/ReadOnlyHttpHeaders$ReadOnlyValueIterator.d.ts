import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
import type { Iterator } from '../../../../../java/util/Iterator.d.ts'
export class ReadOnlyHttpHeaders$ReadOnlyValueIterator extends Object implements Iterator<CharSequence> {
    constructor(null_: ReadOnlyHttpHeaders$ReadOnlyValueIterator, arg1: CharSequence)
    // private name: CharSequence;
    // private nameHash: number;
    // private nextNameIndex: number;
    // private findNextValue(): number;
    forEachRemaining(arg0: (param0: T) => void): void;
    hasNext(): boolean;
    next(): CharSequence;
    remove(): void;
}