import type { Segments$IterationDirection } from '../../../../com/ibm/icu/segmenter/Segments$IterationDirection.d.ts'
import type { BreakIterator } from '../../../../com/ibm/icu/text/BreakIterator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export class BoundaryIteratorOfInts extends Object {
    constructor(arg0: BreakIterator, arg1: CharSequence, arg2: Segments$IterationDirection, arg3: number)
    // private breakIter: BreakIterator;
    // private currIdx: number;
    // private direction: Segments$IterationDirection;
    hasNext(): boolean;
    next(): number;
}