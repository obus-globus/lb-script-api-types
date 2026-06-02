import type { UResource$Key } from '../../../../com/ibm/icu/impl/UResource$Key.d.ts'
import type { UResource$Sink } from '../../../../com/ibm/icu/impl/UResource$Sink.d.ts'
import type { UResource$Value } from '../../../../com/ibm/icu/impl/UResource$Value.d.ts'
import type { StringBuilder } from '../../../../java/lang/StringBuilder.d.ts'
export class NumberRangeFormatterImpl$NumberRangeDataSink extends UResource$Sink {
    constructor(arg0: StringBuilder)
    // private rangePattern: string;
    // private sb: StringBuilder;
    fillInDefaults(): void;
    // private hasRangeData(): boolean;
    isComplete(): boolean;
    put(arg0: UResource$Key, arg1: UResource$Value, arg2: boolean): void;
}