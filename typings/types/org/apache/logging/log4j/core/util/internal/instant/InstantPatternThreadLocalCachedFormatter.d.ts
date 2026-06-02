import type { StringBuilder } from '../../../../../../../../java/lang/StringBuilder.d.ts'
import type { ThreadLocal } from '../../../../../../../../java/lang/ThreadLocal.d.ts'
import type { ChronoUnit } from '../../../../../../../../java/time/temporal/ChronoUnit.d.ts'
import type { Locale } from '../../../../../../../../java/util/Locale.d.ts'
import type { TimeZone } from '../../../../../../../../java/util/TimeZone.d.ts'
import type { Function } from '../../../../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Instant } from '../../../../../../../../org/apache/logging/log4j/core/time/Instant.d.ts'
import type { InstantPatternFormatter } from '../../../../../../../../org/apache/logging/log4j/core/util/internal/instant/InstantPatternFormatter.d.ts'
import type { InstantPatternFormatter$Builder } from '../../../../../../../../org/apache/logging/log4j/core/util/internal/instant/InstantPatternFormatter$Builder.d.ts'
export class InstantPatternThreadLocalCachedFormatter extends Object implements InstantPatternFormatter {
    static LEGACY_FORMATTERS_ENABLED: boolean;
    static newBuilder(): InstantPatternFormatter$Builder;
    private constructor(formatter: InstantPatternFormatter, epochInstantExtractor: (param0: Instant) => number, precision: ChronoUnit)
    // private epochInstantAndBufferRef: ThreadLocal<Object[]>;
    // private epochInstantExtractor: (param0: Instant) => number;
    // private formatter: InstantPatternFormatter;
    readonly precision: ChronoUnit;
    formatTo(buffer: StringBuilder, instant: Instant): void;
    getLocale(): Locale;
    getPattern(): string;
    getPrecision(): ChronoUnit;
    getTimeZone(): TimeZone;
}