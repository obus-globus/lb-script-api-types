import type { BasicDurationFormatter } from '../../../../../com/ibm/icu/impl/duration/BasicDurationFormatter.d.ts'
import type { BasicPeriodFormatterService } from '../../../../../com/ibm/icu/impl/duration/BasicPeriodFormatterService.d.ts'
import type { DateFormatter } from '../../../../../com/ibm/icu/impl/duration/DateFormatter.d.ts'
import type { DurationFormatter } from '../../../../../com/ibm/icu/impl/duration/DurationFormatter.d.ts'
import type { DurationFormatterFactory } from '../../../../../com/ibm/icu/impl/duration/DurationFormatterFactory.d.ts'
import type { PeriodBuilder } from '../../../../../com/ibm/icu/impl/duration/PeriodBuilder.d.ts'
import type { PeriodFormatter } from '../../../../../com/ibm/icu/impl/duration/PeriodFormatter.d.ts'
import type { TimeZone } from '../../../../../java/util/TimeZone.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class BasicDurationFormatterFactory extends Object implements DurationFormatterFactory {
    constructor(arg0: BasicPeriodFormatterService)
    // private builder: PeriodBuilder;
    // private f: BasicDurationFormatter;
    readonly fallback: DateFormatter;
    readonly fallbackLimit: number;
    readonly formatter: PeriodFormatter;
    readonly localeName: string;
    // private ps: BasicPeriodFormatterService;
    readonly timeZone: TimeZone;
    createFormatter(): BasicDurationFormatter;
    getFallback(): DateFormatter;
    getFallbackLimit(): number;
    getFormatter(): DurationFormatter;
    getLocaleName(): string;
    getPeriodBuilder(): PeriodBuilder;
    getPeriodFormatter(): PeriodFormatter;
    getTimeZone(): TimeZone;
    reset(): void;
    setFallback(arg0: DateFormatter): DurationFormatterFactory;
    setFallbackLimit(arg0: number): DurationFormatterFactory;
    setLocale(arg0: string): DurationFormatterFactory;
    setPeriodBuilder(arg0: PeriodBuilder): DurationFormatterFactory;
    setPeriodFormatter(arg0: PeriodFormatter): DurationFormatterFactory;
    setTimeZone(arg0: TimeZone): DurationFormatterFactory;
}