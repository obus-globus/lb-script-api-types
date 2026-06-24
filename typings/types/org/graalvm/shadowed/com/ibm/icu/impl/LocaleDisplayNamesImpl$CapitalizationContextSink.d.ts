import type { LocaleDisplayNamesImpl } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/LocaleDisplayNamesImpl.d.ts'
import type { UResource$Key } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/UResource$Key.d.ts'
import type { UResource$Sink } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/UResource$Sink.d.ts'
import type { UResource$Value } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/UResource$Value.d.ts'
export class LocaleDisplayNamesImpl$CapitalizationContextSink extends UResource$Sink {
    private constructor(null_: LocaleDisplayNamesImpl)
    // private hasCapitalizationUsage: boolean;
    put(key: UResource$Key, value: UResource$Value, noFallback: boolean): void;
}