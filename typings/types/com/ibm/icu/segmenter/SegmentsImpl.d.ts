import type { Segment } from '../../../../com/ibm/icu/segmenter/Segment.d.ts'
import type { Segments } from '../../../../com/ibm/icu/segmenter/Segments.d.ts'
import type { BreakIterator } from '../../../../com/ibm/icu/text/BreakIterator.d.ts'
import type { IntStream } from '../../../../java/util/stream/IntStream.d.ts'
import type { Stream } from '../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export class SegmentsImpl extends Object implements Segments {
    constructor(arg0: BreakIterator, arg1: CharSequence)
    // private breakIterPrototype: BreakIterator;
    // private source: CharSequence;
    boundaries(): IntStream;
    boundariesAfter(arg0: number): IntStream;
    boundariesBackFrom(arg0: number): IntStream;
    isBoundary(arg0: number): boolean;
    segmentAt(arg0: number): Segment;
    segments(): Stream<Segment>;
    segmentsBefore(arg0: number): Stream<Segment>;
    segmentsFrom(arg0: number): Stream<Segment>;
    subSequences(): Stream<CharSequence>;
}