import type { ICUResourceBundle } from '../../../../com/ibm/icu/impl/ICUResourceBundle.d.ts'
import type { UResource$Key } from '../../../../com/ibm/icu/impl/UResource$Key.d.ts'
import type { UResource$Sink } from '../../../../com/ibm/icu/impl/UResource$Sink.d.ts'
import type { UResource$Value } from '../../../../com/ibm/icu/impl/UResource$Value.d.ts'
export class TimeZoneNamesImpl$ZNamesLoader extends UResource$Sink {
    private constructor()
    // private names: string[];
    // private getNames(): string[];
    loadMetaZone(arg0: ICUResourceBundle, arg1: string): void;
    loadNames(arg0: ICUResourceBundle, arg1: string): void;
    loadTimeZone(arg0: ICUResourceBundle, arg1: string): void;
    put(arg0: UResource$Key, arg1: UResource$Value, arg2: boolean): void;
    // private setNameIfEmpty(arg0: UResource$Key, arg1: UResource$Value): void;
}