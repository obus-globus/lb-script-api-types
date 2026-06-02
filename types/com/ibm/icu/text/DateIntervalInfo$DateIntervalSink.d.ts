import type { UResource$Key } from '../../../../com/ibm/icu/impl/UResource$Key.d.ts'
import type { UResource$Sink } from '../../../../com/ibm/icu/impl/UResource$Sink.d.ts'
import type { UResource$Value } from '../../../../com/ibm/icu/impl/UResource$Value.d.ts'
import type { DateIntervalInfo } from '../../../../com/ibm/icu/text/DateIntervalInfo.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export class DateIntervalInfo$DateIntervalSink extends UResource$Sink {
    constructor(arg0: DateIntervalInfo)
    // private dateIntervalInfo: DateIntervalInfo;
    // private nextCalendarType: string;
    getAndResetNextCalendarType(): string;
    // private getCalendarTypeFromPath(arg0: string): string;
    processSkeletonTable(arg0: UResource$Key, arg1: UResource$Value): void;
    put(arg0: UResource$Key, arg1: UResource$Value, arg2: boolean): void;
    // private setIntervalPatternIfAbsent(arg0: string, arg1: string, arg2: UResource$Value): void;
    // private validateAndProcessPatternLetter(arg0: CharSequence): CharSequence;
}