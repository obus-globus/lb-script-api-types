import type { TimeZone } from '../../../../../../../../java/util/TimeZone.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { BasicDurationFormatter } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/duration/BasicDurationFormatter.d.ts'
import type { BasicPeriodFormatterService } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/duration/BasicPeriodFormatterService.d.ts'
import type { DateFormatter } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/duration/DateFormatter.d.ts'
import type { DurationFormatter } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/duration/DurationFormatter.d.ts'
import type { DurationFormatterFactory } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/duration/DurationFormatterFactory.d.ts'
import type { PeriodBuilder } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/duration/PeriodBuilder.d.ts'
import type { PeriodFormatter } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/duration/PeriodFormatter.d.ts'
export class BasicDurationFormatterFactory extends Object implements DurationFormatterFactory {
    constructor(ps: BasicPeriodFormatterService)
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
    setFallback(fallback: DateFormatter): DurationFormatterFactory;
    setFallbackLimit(fallbackLimit: number): DurationFormatterFactory;
    setLocale(localeName: string): DurationFormatterFactory;
    setPeriodBuilder(builder: PeriodBuilder): DurationFormatterFactory;
    setPeriodFormatter(formatter: PeriodFormatter): DurationFormatterFactory;
    setTimeZone(timeZone: TimeZone): DurationFormatterFactory;
}