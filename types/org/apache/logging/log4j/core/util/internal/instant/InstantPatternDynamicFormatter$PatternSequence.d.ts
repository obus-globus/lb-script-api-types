import type { ChronoUnit } from '../../../../../../../../java/time/temporal/ChronoUnit.d.ts'
import type { Locale } from '../../../../../../../../java/util/Locale.d.ts'
import type { TimeZone } from '../../../../../../../../java/util/TimeZone.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { InstantPatternFormatter } from '../../../../../../../../org/apache/logging/log4j/core/util/internal/instant/InstantPatternFormatter.d.ts'
export abstract class InstantPatternDynamicFormatter$PatternSequence extends Object {
    constructor(pattern: string, precision: ChronoUnit)
    // private pattern: string;
    // private precision: ChronoUnit;
    createFormatter(locale: Locale, timeZone: TimeZone): InstantPatternFormatter;
    equals(object: Object | null): boolean;
    hashCode(): number;
    isConstantForDurationOf(thresholdPrecision: ChronoUnit): boolean;
    toString(): string;
    tryMerge(other: InstantPatternDynamicFormatter$PatternSequence, thresholdPrecision: ChronoUnit): InstantPatternDynamicFormatter$PatternSequence;
}