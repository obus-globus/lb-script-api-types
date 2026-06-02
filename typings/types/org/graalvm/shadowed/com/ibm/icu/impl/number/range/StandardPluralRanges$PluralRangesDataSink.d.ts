import type { UResource$Key } from '../../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/UResource$Key.d.ts'
import type { UResource$Sink } from '../../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/UResource$Sink.d.ts'
import type { UResource$Value } from '../../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/UResource$Value.d.ts'
import type { StandardPluralRanges } from '../../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/range/StandardPluralRanges.d.ts'
export class StandardPluralRanges$PluralRangesDataSink extends UResource$Sink {
    constructor(output: StandardPluralRanges)
    // private output: StandardPluralRanges;
    put(key: UResource$Key, value: UResource$Value, noFallback: boolean): void;
}