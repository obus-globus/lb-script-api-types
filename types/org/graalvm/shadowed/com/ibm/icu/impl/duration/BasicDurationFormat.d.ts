import type { StringBuffer } from '../../../../../../../../java/lang/StringBuffer.d.ts'
import type { FieldPosition } from '../../../../../../../../java/text/FieldPosition.d.ts'
import type { Date } from '../../../../../../../../java/util/Date.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { DurationFormatter } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/duration/DurationFormatter.d.ts'
import type { PeriodFormatter } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/duration/PeriodFormatter.d.ts'
import type { PeriodFormatterService } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/duration/PeriodFormatterService.d.ts'
import type { DurationFormat } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/DurationFormat.d.ts'
import type { ULocale } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
export class BasicDurationFormat extends DurationFormat {
    static getInstance(paramlocale: ULocale): BasicDurationFormat;
    static getInstance(paramlocale: ULocale): DurationFormat;
    constructor()
    constructor(locale: ULocale)
    // private formatter: DurationFormatter;
    // private pformatter: PeriodFormatter;
    // private pfs: PeriodFormatterService;
    format(object: Object, toAppend: StringBuffer, pos: FieldPosition): StringBuffer;
    formatDuration(obj: Object): string;
    formatDurationFrom(duration: number, referenceDate: number): string;
    formatDurationFromNow(duration: number): string;
    formatDurationFromNowTo(targetDate: Date): string;
}