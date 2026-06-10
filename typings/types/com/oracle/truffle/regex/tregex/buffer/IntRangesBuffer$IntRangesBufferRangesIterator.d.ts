import type { Range } from '../../../../../../com/oracle/truffle/regex/charset/Range.d.ts'
import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../../../java/util/Iterator.d.ts'
export class IntRangesBuffer$IntRangesBufferRangesIterator extends Object implements Iterator<Range> {
    private constructor(buf: (Object | null)[])
    // private buf: (Object | null)[];
    // private i: number;
    forEachRemaining(arg0: (param0: Range) => void): void;
    hasNext(): boolean;
    next(): Range;
}