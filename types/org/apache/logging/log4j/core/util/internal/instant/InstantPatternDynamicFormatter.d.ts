import type { StringBuilder } from '../../../../../../../../java/lang/StringBuilder.d.ts'
import type { ChronoUnit } from '../../../../../../../../java/time/temporal/ChronoUnit.d.ts'
import type { Locale } from '../../../../../../../../java/util/Locale.d.ts'
import type { TimeZone } from '../../../../../../../../java/util/TimeZone.d.ts'
import type { AtomicReference } from '../../../../../../../../java/util/concurrent/atomic/AtomicReference.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Instant } from '../../../../../../../../org/apache/logging/log4j/core/time/Instant.d.ts'
import type { InstantPatternDynamicFormatter$TimestampedFormatter } from '../../../../../../../../org/apache/logging/log4j/core/util/internal/instant/InstantPatternDynamicFormatter$TimestampedFormatter.d.ts'
import type { InstantPatternFormatter } from '../../../../../../../../org/apache/logging/log4j/core/util/internal/instant/InstantPatternFormatter.d.ts'
import type { InstantPatternFormatter$Builder } from '../../../../../../../../org/apache/logging/log4j/core/util/internal/instant/InstantPatternFormatter$Builder.d.ts'
export class InstantPatternDynamicFormatter extends Object implements InstantPatternFormatter {
    static LEGACY_FORMATTERS_ENABLED: boolean;
    static newBuilder(): InstantPatternFormatter$Builder;
    constructor(pattern: string, locale: Locale, timeZone: TimeZone)
    // private timestampedFormatterRef: AtomicReference<InstantPatternDynamicFormatter$TimestampedFormatter>;
    formatTo(buffer: StringBuilder, instant: Instant): void;
    // private getEffectiveFormatter(instant: Instant): InstantPatternFormatter;
    getLocale(): Locale;
    getPattern(): string;
    getPrecision(): ChronoUnit;
    getTimeZone(): TimeZone;
}