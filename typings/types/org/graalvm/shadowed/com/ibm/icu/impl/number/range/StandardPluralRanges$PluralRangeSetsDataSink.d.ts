import type { UResource$Key } from '../../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/UResource$Key.d.ts'
import type { UResource$Sink } from '../../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/UResource$Sink.d.ts'
import type { UResource$Value } from '../../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/UResource$Value.d.ts'
export class StandardPluralRanges$PluralRangeSetsDataSink extends UResource$Sink {
    constructor(output: { [key: string]: string })
    // private output: { [key: string]: string };
    put(key: UResource$Key, value: UResource$Value, noFallback: boolean): void;
}