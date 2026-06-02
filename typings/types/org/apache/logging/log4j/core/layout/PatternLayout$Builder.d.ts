import type { Charset } from '../../../../../../java/nio/charset/Charset.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Configuration } from '../../../../../../org/apache/logging/log4j/core/config/Configuration.d.ts'
import type { PatternLayout } from '../../../../../../org/apache/logging/log4j/core/layout/PatternLayout.d.ts'
import type { PatternSelector } from '../../../../../../org/apache/logging/log4j/core/layout/PatternSelector.d.ts'
import type { RegexReplacement } from '../../../../../../org/apache/logging/log4j/core/pattern/RegexReplacement.d.ts'
import type { Builder } from '../../../../../../org/apache/logging/log4j/core/util/Builder.d.ts'
export class PatternLayout$Builder extends Object implements Builder<PatternLayout> {
    private constructor()
    // private alwaysWriteExceptions: boolean;
    // private charset: Charset;
    // private configuration: Configuration;
    // private disableAnsi: boolean;
    // private footer: string;
    // private header: string;
    // private noConsoleNoAnsi: boolean;
    // private pattern: string;
    // private patternSelector: PatternSelector;
    // private regexReplacement: RegexReplacement;
    build(): PatternLayout;
    getErrorPrefix(): string;
    isValid(): boolean;
    withAlwaysWriteExceptions(alwaysWriteExceptions: boolean): PatternLayout$Builder;
    withCharset(charset: Charset): PatternLayout$Builder;
    withConfiguration(configuration: Configuration): PatternLayout$Builder;
    withDisableAnsi(disableAnsi: boolean): PatternLayout$Builder;
    withFooter(footer: string): PatternLayout$Builder;
    withHeader(header: string): PatternLayout$Builder;
    withNoConsoleNoAnsi(noConsoleNoAnsi: boolean): PatternLayout$Builder;
    withPattern(pattern: string): PatternLayout$Builder;
    withPatternSelector(patternSelector: PatternSelector): PatternLayout$Builder;
    withRegexReplacement(regexReplacement: RegexReplacement): PatternLayout$Builder;
}