import type { DurationFormatter } from '../../../../../com/ibm/icu/impl/duration/DurationFormatter.d.ts'
import type { PeriodFormatter } from '../../../../../com/ibm/icu/impl/duration/PeriodFormatter.d.ts'
import type { PeriodFormatterService } from '../../../../../com/ibm/icu/impl/duration/PeriodFormatterService.d.ts'
import type { DurationFormat } from '../../../../../com/ibm/icu/text/DurationFormat.d.ts'
import type { ULocale } from '../../../../../com/ibm/icu/util/ULocale.d.ts'
import type { StringBuffer } from '../../../../../java/lang/StringBuffer.d.ts'
import type { FieldPosition } from '../../../../../java/text/FieldPosition.d.ts'
import type { Date } from '../../../../../java/util/Date.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class BasicDurationFormat extends DurationFormat {
    static getInstance(paramarg0: ULocale): BasicDurationFormat;
    static getInstance(paramarg0: ULocale): DurationFormat;
    constructor()
    constructor(arg0: ULocale)
    // private formatter: DurationFormatter;
    // private pformatter: PeriodFormatter;
    // private pfs: PeriodFormatterService;
    format(arg0: Object): string;
    format(arg0: Object, arg1: StringBuffer, arg2: FieldPosition): StringBuffer;
    formatDuration(arg0: Object): string;
    formatDurationFrom(arg0: number, arg1: number): string;
    formatDurationFromNow(arg0: number): string;
    formatDurationFromNowTo(arg0: Date): string;
}