import type { UnicodeSet$CodePointIteratorInt } from '../../../../com/ibm/icu/text/UnicodeSet$CodePointIteratorInt.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export class UnicodeSet$CodePointIterator extends Object implements Iterator<number> {
    constructor(null_: UnicodeSet$CodePointIterator, arg1: string[])
    // private cpi: UnicodeSet$CodePointIteratorInt;
    forEachRemaining(arg0: (param0: T) => void): void;
    hasNext(): boolean;
    next(): number;
    remove(): void;
}