import type { UnicodeSet$EntryRange } from '../../../../com/ibm/icu/text/UnicodeSet$EntryRange.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export class UnicodeSet$EntryRangeIterator extends Object implements Iterator<UnicodeSet$EntryRange> {
    private constructor(null_: UnicodeSet$EntryRangeIterator)
    // private pos: number;
    // private result: UnicodeSet$EntryRange;
    forEachRemaining(arg0: (param0: T) => void): void;
    hasNext(): boolean;
    next(): UnicodeSet$EntryRange;
    remove(): void;
}