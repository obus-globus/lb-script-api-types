import type { StringBuilder } from '../../../../../../../../java/lang/StringBuilder.d.ts'
import type { ChronoUnit } from '../../../../../../../../java/time/temporal/ChronoUnit.d.ts'
import type { Locale } from '../../../../../../../../java/util/Locale.d.ts'
import type { TimeZone } from '../../../../../../../../java/util/TimeZone.d.ts'
import type { Instant } from '../../../../../../../../org/apache/logging/log4j/core/time/Instant.d.ts'
import type { InstantPatternDynamicFormatter$PatternSequence } from '../../../../../../../../org/apache/logging/log4j/core/util/internal/instant/InstantPatternDynamicFormatter$PatternSequence.d.ts'
import type { InstantPatternFormatter } from '../../../../../../../../org/apache/logging/log4j/core/util/internal/instant/InstantPatternFormatter.d.ts'
export class InstantPatternDynamicFormatter$SecondPatternSequence extends InstantPatternDynamicFormatter$PatternSequence {
    constructor(secondDigits: number, separator: string, fractionalDigits: number)
    // private fractionalDigits: number;
    // private secondDigits: number;
    // private separator: string;
    createFormatter(locale: Locale, timeZone: TimeZone): InstantPatternFormatter;
    // private formatFractionalDigits(buffer: StringBuilder, instant: Instant): void;
    tryMerge(other: InstantPatternDynamicFormatter$PatternSequence, thresholdPrecision: ChronoUnit): InstantPatternDynamicFormatter$PatternSequence;
}