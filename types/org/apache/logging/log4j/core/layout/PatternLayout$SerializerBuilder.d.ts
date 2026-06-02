import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Configuration } from '../../../../../../org/apache/logging/log4j/core/config/Configuration.d.ts'
import type { AbstractStringLayout$Serializer } from '../../../../../../org/apache/logging/log4j/core/layout/AbstractStringLayout$Serializer.d.ts'
import type { PatternSelector } from '../../../../../../org/apache/logging/log4j/core/layout/PatternSelector.d.ts'
import type { RegexReplacement } from '../../../../../../org/apache/logging/log4j/core/pattern/RegexReplacement.d.ts'
import type { Builder } from '../../../../../../org/apache/logging/log4j/core/util/Builder.d.ts'
export class PatternLayout$SerializerBuilder extends Object implements Builder<AbstractStringLayout$Serializer> {
    constructor()
    // private alwaysWriteExceptions: boolean;
    // private configuration: Configuration;
    // private defaultPattern: string;
    // private disableAnsi: boolean;
    // private noConsoleNoAnsi: boolean;
    // private pattern: string;
    // private patternSelector: PatternSelector;
    // private replace: RegexReplacement;
    build(): AbstractStringLayout$Serializer;
    getErrorPrefix(): string;
    isValid(): boolean;
    setAlwaysWriteExceptions(alwaysWriteExceptions: boolean): PatternLayout$SerializerBuilder;
    setConfiguration(configuration: Configuration): PatternLayout$SerializerBuilder;
    setDefaultPattern(defaultPattern: string): PatternLayout$SerializerBuilder;
    setDisableAnsi(disableAnsi: boolean): PatternLayout$SerializerBuilder;
    setNoConsoleNoAnsi(noConsoleNoAnsi: boolean): PatternLayout$SerializerBuilder;
    setPattern(pattern: string): PatternLayout$SerializerBuilder;
    setPatternSelector(patternSelector: PatternSelector): PatternLayout$SerializerBuilder;
    setReplace(replace: RegexReplacement): PatternLayout$SerializerBuilder;
}