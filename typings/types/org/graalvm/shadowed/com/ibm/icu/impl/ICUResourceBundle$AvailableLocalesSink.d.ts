import type { UResource$Key } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/UResource$Key.d.ts'
import type { UResource$Sink } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/UResource$Sink.d.ts'
import type { UResource$Value } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/UResource$Value.d.ts'
import type { ULocale } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
import type { ULocale$AvailableType } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale$AvailableType.d.ts'
export class ICUResourceBundle$AvailableLocalesSink extends UResource$Sink {
    constructor(output: Map<ULocale$AvailableType, ULocale[]>)
    // private output: Map<ULocale$AvailableType, ULocale[]>;
    put(key: UResource$Key, value: UResource$Value, noFallback: boolean): void;
}