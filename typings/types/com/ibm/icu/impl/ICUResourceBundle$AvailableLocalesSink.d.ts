import type { UResource$Key } from '../../../../com/ibm/icu/impl/UResource$Key.d.ts'
import type { UResource$Sink } from '../../../../com/ibm/icu/impl/UResource$Sink.d.ts'
import type { UResource$Value } from '../../../../com/ibm/icu/impl/UResource$Value.d.ts'
import type { ULocale } from '../../../../com/ibm/icu/util/ULocale.d.ts'
import type { ULocale$AvailableType } from '../../../../com/ibm/icu/util/ULocale$AvailableType.d.ts'
export class ICUResourceBundle$AvailableLocalesSink extends UResource$Sink {
    constructor(arg0: { [key in ULocale$AvailableType]: ULocale[] })
    // private output: { [key in ULocale$AvailableType]: ULocale[] };
    put(arg0: UResource$Key, arg1: UResource$Value, arg2: boolean): void;
}