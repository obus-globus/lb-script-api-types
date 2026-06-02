import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
import type { Iterator } from '../../../../../java/util/Iterator.d.ts'
export class ReadOnlyHttpHeaders$ReadOnlyStringValueIterator extends Object implements Iterator<string> {
    constructor(null_: ReadOnlyHttpHeaders$ReadOnlyStringValueIterator, arg1: CharSequence)
    // private name: CharSequence;
    // private nameHash: number;
    // private nextNameIndex: number;
    // private findNextValue(): number;
    forEachRemaining(arg0: (param0: T) => void): void;
    hasNext(): boolean;
    next(): string;
    remove(): void;
}