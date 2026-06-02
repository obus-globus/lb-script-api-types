import type { StringBuilder } from '../../../../../../../java/lang/StringBuilder.d.ts'
import type { TimeZoneNamesImpl$ZNamesLoader } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/TimeZoneNamesImpl$ZNamesLoader.d.ts'
import type { UResource$Key } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/UResource$Key.d.ts'
import type { UResource$Sink } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/UResource$Sink.d.ts'
import type { UResource$Value } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/UResource$Value.d.ts'
export class TimeZoneNamesImpl$ZoneStringsLoader extends UResource$Sink {
    private constructor(null_: TimeZoneNamesImpl$ZoneStringsLoader)
    // private keyToLoader: Map<UResource$Key, TimeZoneNamesImpl$ZNamesLoader>;
    // private sb: StringBuilder;
    // private consumeNamesTable(key: UResource$Key, value: UResource$Value, noFallback: boolean): void;
    createKey(key: UResource$Key): UResource$Key;
    isMetaZone(key: UResource$Key): boolean;
    load(): void;
    // private mzIDFromKey(key: UResource$Key): string;
    put(key: UResource$Key, value: UResource$Value, noFallback: boolean): void;
    // private tzIDFromKey(key: UResource$Key): string;
}