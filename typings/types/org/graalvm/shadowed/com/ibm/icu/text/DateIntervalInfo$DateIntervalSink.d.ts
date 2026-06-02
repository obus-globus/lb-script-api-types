import type { CharSequence } from '../../../../../../../java/lang/CharSequence.d.ts'
import type { UResource$Key } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/UResource$Key.d.ts'
import type { UResource$Sink } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/UResource$Sink.d.ts'
import type { UResource$Value } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/UResource$Value.d.ts'
import type { DateIntervalInfo } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/DateIntervalInfo.d.ts'
export class DateIntervalInfo$DateIntervalSink extends UResource$Sink {
    constructor(dateIntervalInfo: DateIntervalInfo)
    // private dateIntervalInfo: DateIntervalInfo;
    // private nextCalendarType: string;
    getAndResetNextCalendarType(): string;
    // private getCalendarTypeFromPath(path: string): string;
    processSkeletonTable(key: UResource$Key, value: UResource$Value): void;
    put(key: UResource$Key, value: UResource$Value, noFallback: boolean): void;
    // private setIntervalPatternIfAbsent(currentSkeleton: string, lrgDiffCalUnit: string, intervalPattern: UResource$Value): void;
    // private validateAndProcessPatternLetter(patternLetter: CharSequence): CharSequence;
}