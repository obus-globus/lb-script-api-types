import type { Spliterator$OfInt } from '../../../../../../../java/util/Spliterator$OfInt.d.ts'
import type { Consumer } from '../../../../../../../java/util/function/Consumer.d.ts'
import type { IntConsumer } from '../../../../../../../java/util/function/IntConsumer.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../../../java/lang/CharSequence.d.ts'
import type { BoundaryIteratorOfInts } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/segmenter/BoundaryIteratorOfInts.d.ts'
import type { Segments$IterationDirection } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/segmenter/Segments$IterationDirection.d.ts'
import type { BreakIterator } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/BreakIterator.d.ts'
export class BoundarySpliterator extends Object implements Spliterator$OfInt {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor(breakIter: BreakIterator, sourceSequence: CharSequence, direction: Segments$IterationDirection, startIdx: number)
    // private iter: BoundaryIteratorOfInts;
    characteristics(): number;
    estimateSize(): number;
    forEachRemaining(arg0: (param0: number) => void): void;
    tryAdvance(arg0: (param0: number) => void): boolean;
    tryAdvance(action: (param0: number) => void): boolean;
    trySplit(): Spliterator$OfInt;
}