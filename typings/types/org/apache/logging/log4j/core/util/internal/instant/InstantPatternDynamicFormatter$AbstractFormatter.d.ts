import type { StringBuilder } from '../../../../../../../../java/lang/StringBuilder.d.ts'
import type { ChronoUnit } from '../../../../../../../../java/time/temporal/ChronoUnit.d.ts'
import type { Locale } from '../../../../../../../../java/util/Locale.d.ts'
import type { TimeZone } from '../../../../../../../../java/util/TimeZone.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Instant } from '../../../../../../../../org/apache/logging/log4j/core/time/Instant.d.ts'
import type { InstantPatternFormatter } from '../../../../../../../../org/apache/logging/log4j/core/util/internal/instant/InstantPatternFormatter.d.ts'
export abstract class InstantPatternDynamicFormatter$AbstractFormatter extends Object implements InstantPatternFormatter {
    static LEGACY_FORMATTERS_ENABLED: boolean;
    constructor(pattern: string, locale: Locale, timeZone: TimeZone, precision: ChronoUnit)
    readonly locale: Locale;
    readonly pattern: string;
    readonly precision: ChronoUnit;
    readonly timeZone: TimeZone;
    formatTo(buffer: StringBuilder, instant: Instant): void;
    getLocale(): Locale;
    getPattern(): string;
    getPrecision(): ChronoUnit;
    getTimeZone(): TimeZone;
}