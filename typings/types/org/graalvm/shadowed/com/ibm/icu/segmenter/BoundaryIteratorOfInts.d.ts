import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../../../java/lang/CharSequence.d.ts'
import type { Segments$IterationDirection } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/segmenter/Segments$IterationDirection.d.ts'
import type { BreakIterator } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/BreakIterator.d.ts'
export class BoundaryIteratorOfInts extends Object {
    constructor(breakIter: BreakIterator, sourceSequence: CharSequence, direction: Segments$IterationDirection, startIdx: number)
    // private breakIter: BreakIterator;
    // private currIdx: number;
    // private direction: Segments$IterationDirection;
    hasNext(): boolean;
    next(): number;
}