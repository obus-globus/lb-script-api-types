import type { UResource$Key } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/UResource$Key.d.ts'
import type { UResource$Sink } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/UResource$Sink.d.ts'
import type { UResource$Value } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/UResource$Value.d.ts'
import type { DateFormatSymbols$CalendarDataSink$AliasType } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/DateFormatSymbols$CalendarDataSink$AliasType.d.ts'
export class DateFormatSymbols$CalendarDataSink extends UResource$Sink {
    constructor()
    // private aliasPathPairs: string[];
    // private aliasRelativePath: string;
    // private arrays: { [key: string]: string[] };
    // private currentCalendarType: string;
    // private maps: { [key: string]: { [key: string]: string } };
    // private nextCalendarType: string;
    // private resourcesToVisit: string[];
    preEnumerate(calendarType: string): void;
    // private processAliasFromValue(currentRelativePath: string, value: UResource$Value): DateFormatSymbols$CalendarDataSink$AliasType;
    processResource(path: string, key: UResource$Key, value: UResource$Value): void;
    put(key: UResource$Key, value: UResource$Value, noFallback: boolean): void;
    visitAllResources(): void;
}