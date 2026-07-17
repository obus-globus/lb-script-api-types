import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { TimeZoneNamesImpl } from '../../../../com/ibm/icu/impl/TimeZoneNamesImpl.d.ts'
import type { TimeZoneNamesImpl$ZNamesLoader } from '../../../../com/ibm/icu/impl/TimeZoneNamesImpl$ZNamesLoader.d.ts'
import type { UResource$Key } from '../../../../com/ibm/icu/impl/UResource$Key.d.ts'
import type { UResource$Sink } from '../../../../com/ibm/icu/impl/UResource$Sink.d.ts'
import type { UResource$Value } from '../../../../com/ibm/icu/impl/UResource$Value.d.ts'
import type { StringBuilder } from '../../../../java/lang/StringBuilder.d.ts'
export class TimeZoneNamesImpl$ZoneStringsLoader extends UResource$Sink {
    private constructor(null_: TimeZoneNamesImpl)
    // private keyToLoader: JavaMap<UResource$Key, TimeZoneNamesImpl$ZNamesLoader>;
    // private sb: StringBuilder;
    // private consumeNamesTable(arg0: UResource$Key, arg1: UResource$Value, arg2: boolean): void;
    createKey(arg0: UResource$Key): UResource$Key;
    isMetaZone(arg0: UResource$Key): boolean;
    load(): void;
    // private mzIDFromKey(arg0: UResource$Key): string;
    put(arg0: UResource$Key, arg1: UResource$Value, arg2: boolean): void;
    // private tzIDFromKey(arg0: UResource$Key): string;
}