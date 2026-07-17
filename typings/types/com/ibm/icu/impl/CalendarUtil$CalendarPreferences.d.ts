import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { UResource$Key } from '../../../../com/ibm/icu/impl/UResource$Key.d.ts'
import type { UResource$Sink } from '../../../../com/ibm/icu/impl/UResource$Sink.d.ts'
import type { UResource$Value } from '../../../../com/ibm/icu/impl/UResource$Value.d.ts'
export class CalendarUtil$CalendarPreferences extends UResource$Sink {
    constructor()
    // private prefs: JavaMap<string, string>;
    getCalendarTypeForRegion(arg0: string): string;
    put(arg0: UResource$Key, arg1: UResource$Value, arg2: boolean): void;
}