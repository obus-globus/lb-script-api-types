import type { Segment } from '../../../../com/ibm/icu/segmenter/Segment.d.ts'
import type { Segments$IterationDirection } from '../../../../com/ibm/icu/segmenter/Segments$IterationDirection.d.ts'
import type { BreakIterator } from '../../../../com/ibm/icu/text/BreakIterator.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export class SegmentIterator extends Object implements Iterator<Segment> {
    constructor(arg0: BreakIterator, arg1: Segments$IterationDirection, arg2: number, arg3: CharSequence)
    // private breakIter: BreakIterator;
    // private direction: Segments$IterationDirection;
    // private limit: number;
    // private source: CharSequence;
    // private start: number;
    forEachRemaining(arg0: (param0: Segment) => void): void;
    hasNext(): boolean;
    next(): Segment;
}