import type { ICUResourceBundle } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/ICUResourceBundle.d.ts'
import type { UResource$Key } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/UResource$Key.d.ts'
import type { UResource$Sink } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/UResource$Sink.d.ts'
import type { UResource$Value } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/UResource$Value.d.ts'
export class TimeZoneNamesImpl$ZNamesLoader extends UResource$Sink {
    private constructor()
    // private names: string[];
    // private getNames(): string[];
    loadMetaZone(zoneStrings: ICUResourceBundle, mzID: string): void;
    loadNames(zoneStrings: ICUResourceBundle, key: string): void;
    loadTimeZone(zoneStrings: ICUResourceBundle, tzID: string): void;
    put(key: UResource$Key, value: UResource$Value, noFallback: boolean): void;
    // private setNameIfEmpty(key: UResource$Key, value: UResource$Value): void;
}