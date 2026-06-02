import type { TruffleString } from '../../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JSSegmenter$Granularity } from '../../../../../../../com/oracle/truffle/js/runtime/builtins/intl/JSSegmenter$Granularity.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { BreakIterator } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/BreakIterator.d.ts'
export class JSSegmenter$IteratorState extends Object {
    constructor(iteratedObject: TruffleString, breakIterator: BreakIterator, granularity: JSSegmenter$Granularity)
    readonly breakIterator: BreakIterator;
    // private granularity: JSSegmenter$Granularity;
    readonly iteratedString: TruffleString;
    getBreakIterator(): BreakIterator;
    getIteratedString(): TruffleString;
    getSegmenterGranularity(): JSSegmenter$Granularity;
}