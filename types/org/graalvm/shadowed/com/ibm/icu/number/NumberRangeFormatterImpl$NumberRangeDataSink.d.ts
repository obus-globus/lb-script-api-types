import type { StringBuilder } from '../../../../../../../java/lang/StringBuilder.d.ts'
import type { UResource$Key } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/UResource$Key.d.ts'
import type { UResource$Sink } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/UResource$Sink.d.ts'
import type { UResource$Value } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/UResource$Value.d.ts'
export class NumberRangeFormatterImpl$NumberRangeDataSink extends UResource$Sink {
    constructor(sb: StringBuilder)
    // private rangePattern: string;
    // private sb: StringBuilder;
    fillInDefaults(): void;
    // private hasRangeData(): boolean;
    isComplete(): boolean;
    put(key: UResource$Key, value: UResource$Value, noFallback: boolean): void;
}