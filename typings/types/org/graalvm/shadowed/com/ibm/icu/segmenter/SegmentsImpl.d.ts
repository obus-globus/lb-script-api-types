import type { IntStream } from '../../../../../../../java/util/stream/IntStream.d.ts'
import type { Stream } from '../../../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../../../java/lang/CharSequence.d.ts'
import type { Segment } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/segmenter/Segment.d.ts'
import type { Segments } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/segmenter/Segments.d.ts'
import type { BreakIterator } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/BreakIterator.d.ts'
export class SegmentsImpl extends Object implements Segments {
    constructor(breakIter: BreakIterator, source: CharSequence)
    // private breakIterPrototype: BreakIterator;
    // private source: CharSequence;
    boundaries(): IntStream;
    boundariesAfter(i: number): IntStream;
    boundariesBackFrom(i: number): IntStream;
    isBoundary(i: number): boolean;
    segmentAt(i: number): Segment;
    segments(): Stream<Segment>;
    segmentsBefore(i: number): Stream<Segment>;
    segmentsFrom(i: number): Stream<Segment>;
    subSequences(): Stream<CharSequence>;
}