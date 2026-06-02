import type { UResource$Key } from '../../../../com/ibm/icu/impl/UResource$Key.d.ts'
import type { UResource$Sink } from '../../../../com/ibm/icu/impl/UResource$Sink.d.ts'
import type { UResource$Value } from '../../../../com/ibm/icu/impl/UResource$Value.d.ts'
import type { DateFormatSymbols$CalendarDataSink$AliasType } from '../../../../com/ibm/icu/text/DateFormatSymbols$CalendarDataSink$AliasType.d.ts'
export class DateFormatSymbols$CalendarDataSink extends UResource$Sink {
    constructor()
    // private aliasPathPairs: string[];
    // private aliasRelativePath: string;
    // private arrays: { [key: string]: string[] };
    // private currentCalendarType: string;
    // private maps: { [key: string]: { [key: string]: string } };
    // private nextCalendarType: string;
    // private resourcesToVisit: string[];
    preEnumerate(arg0: string): void;
    // private processAliasFromValue(arg0: string, arg1: UResource$Value): DateFormatSymbols$CalendarDataSink$AliasType;
    processResource(arg0: string, arg1: UResource$Key, arg2: UResource$Value): void;
    put(arg0: UResource$Key, arg1: UResource$Value, arg2: boolean): void;
    visitAllResources(): void;
}