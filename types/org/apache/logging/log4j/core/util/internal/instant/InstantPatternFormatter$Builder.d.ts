import type { Locale } from '../../../../../../../../java/util/Locale.d.ts'
import type { TimeZone } from '../../../../../../../../java/util/TimeZone.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { InstantPatternFormatter } from '../../../../../../../../org/apache/logging/log4j/core/util/internal/instant/InstantPatternFormatter.d.ts'
export class InstantPatternFormatter$Builder extends Object {
    private constructor()
    readonly cachingEnabled: boolean;
    readonly legacyFormattersEnabled: boolean;
    readonly locale: Locale;
    readonly pattern: string;
    readonly timeZone: TimeZone;
    build(): InstantPatternFormatter;
    getLocale(): Locale;
    getPattern(): string;
    getTimeZone(): TimeZone;
    isCachingEnabled(): boolean;
    isLegacyFormattersEnabled(): boolean;
    setCachingEnabled(cachingEnabled: boolean): InstantPatternFormatter$Builder;
    setLegacyFormattersEnabled(legacyFormattersEnabled: boolean): InstantPatternFormatter$Builder;
    setLocale(locale: Locale): InstantPatternFormatter$Builder;
    setPattern(pattern: string): InstantPatternFormatter$Builder;
    setTimeZone(timeZone: TimeZone): InstantPatternFormatter$Builder;
}