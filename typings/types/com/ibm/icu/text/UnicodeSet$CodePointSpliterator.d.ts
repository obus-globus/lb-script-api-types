import type { UnicodeSet$CodePointIteratorInt } from '../../../../com/ibm/icu/text/UnicodeSet$CodePointIteratorInt.d.ts'
import type { Spliterator$OfInt } from '../../../../java/util/Spliterator$OfInt.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { IntConsumer } from '../../../../java/util/function/IntConsumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class UnicodeSet$CodePointSpliterator extends Object implements Spliterator$OfInt {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor(arg0: string[])
    // private cpi: UnicodeSet$CodePointIteratorInt;
    // private unicodeSet: string[];
    characteristics(): number;
    estimateSize(): number;
    forEachRemaining(arg0: (param0: number) => void): void;
    forEachRemaining(arg0: (param0: number) => void): void;
    tryAdvance(arg0: (param0: number) => void): boolean;
    tryAdvance(arg0: (param0: number) => void): boolean;
    tryAdvance(arg0: (param0: number) => void): boolean;
    trySplit(): Spliterator$OfInt;
}