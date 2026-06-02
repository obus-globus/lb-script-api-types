import type { ChronoUnit } from '../../../../../../../../java/time/temporal/ChronoUnit.d.ts'
import type { Locale } from '../../../../../../../../java/util/Locale.d.ts'
import type { TimeZone } from '../../../../../../../../java/util/TimeZone.d.ts'
import type { InstantPatternDynamicFormatter$PatternSequence } from '../../../../../../../../org/apache/logging/log4j/core/util/internal/instant/InstantPatternDynamicFormatter$PatternSequence.d.ts'
import type { InstantPatternFormatter } from '../../../../../../../../org/apache/logging/log4j/core/util/internal/instant/InstantPatternFormatter.d.ts'
export class InstantPatternDynamicFormatter$StaticPatternSequence extends InstantPatternDynamicFormatter$PatternSequence {
    constructor(literal: string)
    // private literal: string;
    createFormatter(locale: Locale, timeZone: TimeZone): InstantPatternFormatter;
    tryMerge(other: InstantPatternDynamicFormatter$PatternSequence, thresholdPrecision: ChronoUnit): InstantPatternDynamicFormatter$PatternSequence;
}