import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { UResource$Key } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/UResource$Key.d.ts'
import type { UResource$Sink } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/UResource$Sink.d.ts'
import type { UResource$Value } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/UResource$Value.d.ts'
import type { TimeUnit } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/TimeUnit.d.ts'
import type { ULocale } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
export class TimeUnitFormat$TimeUnitFormatSetupSink extends UResource$Sink {
    constructor(timeUnitToCountToPatterns: Map<TimeUnit, { [key: string]: Object[] }>, style: number, pluralKeywords: string[], locale: ULocale)
    // private beenHere: boolean;
    // private locale: ULocale;
    // private pluralKeywords: string[];
    // private style: number;
    // private timeUnitToCountToPatterns: Map<TimeUnit, { [key: string]: Object[] }>;
    put(key: UResource$Key, value: UResource$Value, noFallback: boolean): void;
}