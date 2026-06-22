import type { StringBuilder } from '../../../../../../../../java/lang/StringBuilder.d.ts'
import type { ChronoUnit } from '../../../../../../../../java/time/temporal/ChronoUnit.d.ts'
import type { Locale } from '../../../../../../../../java/util/Locale.d.ts'
import type { TimeZone } from '../../../../../../../../java/util/TimeZone.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Instant } from '../../../../../../../../org/apache/logging/log4j/core/time/Instant.d.ts'
import type { InstantFormatter } from '../../../../../../../../org/apache/logging/log4j/core/util/internal/instant/InstantFormatter.d.ts'
export interface InstantPatternFormatter extends Object, InstantFormatter{
    format(instant: Instant): string;
    formatTo(buffer: StringBuilder, instant: Instant): void;
    getLocale(): Locale;
    getPattern(): string;
    getPrecision(): ChronoUnit;
    getTimeZone(): TimeZone;
}