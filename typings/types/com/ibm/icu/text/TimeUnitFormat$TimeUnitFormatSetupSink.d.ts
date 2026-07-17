import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { UResource$Key } from '../../../../com/ibm/icu/impl/UResource$Key.d.ts'
import type { UResource$Sink } from '../../../../com/ibm/icu/impl/UResource$Sink.d.ts'
import type { UResource$Value } from '../../../../com/ibm/icu/impl/UResource$Value.d.ts'
import type { TimeUnit } from '../../../../com/ibm/icu/util/TimeUnit.d.ts'
import type { ULocale } from '../../../../com/ibm/icu/util/ULocale.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class TimeUnitFormat$TimeUnitFormatSetupSink extends UResource$Sink {
    constructor(arg0: JavaMap<TimeUnit, JavaMap<string, Object[]>>, arg1: number, arg2: string[], arg3: ULocale)
    // private beenHere: boolean;
    // private locale: ULocale;
    // private pluralKeywords: string[];
    // private style: number;
    // private timeUnitToCountToPatterns: JavaMap<TimeUnit, JavaMap<string, Object[]>>;
    put(arg0: UResource$Key, arg1: UResource$Value, arg2: boolean): void;
}