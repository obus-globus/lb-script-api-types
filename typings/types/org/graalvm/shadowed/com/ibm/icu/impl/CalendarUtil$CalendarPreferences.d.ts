import type { UResource$Key } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/UResource$Key.d.ts'
import type { UResource$Sink } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/UResource$Sink.d.ts'
import type { UResource$Value } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/UResource$Value.d.ts'
export class CalendarUtil$CalendarPreferences extends UResource$Sink {
    constructor()
    // private prefs: { [key: string]: string };
    getCalendarTypeForRegion(region: string): string;
    put(key: UResource$Key, value: UResource$Value, noFallback: boolean): void;
}