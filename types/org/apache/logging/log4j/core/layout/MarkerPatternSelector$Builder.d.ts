import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Configuration } from '../../../../../../org/apache/logging/log4j/core/config/Configuration.d.ts'
import type { MarkerPatternSelector } from '../../../../../../org/apache/logging/log4j/core/layout/MarkerPatternSelector.d.ts'
import type { PatternMatch } from '../../../../../../org/apache/logging/log4j/core/layout/PatternMatch.d.ts'
import type { Builder } from '../../../../../../org/apache/logging/log4j/core/util/Builder.d.ts'
export class MarkerPatternSelector$Builder extends Object implements Builder<MarkerPatternSelector> {
    constructor()
    // private alwaysWriteExceptions: boolean;
    // private configuration: Configuration;
    // private defaultPattern: string;
    // private disableAnsi: boolean;
    // private noConsoleNoAnsi: boolean;
    // private properties: PatternMatch[];
    build(): MarkerPatternSelector;
    getErrorPrefix(): string;
    isValid(): boolean;
    setAlwaysWriteExceptions(alwaysWriteExceptions: boolean): MarkerPatternSelector$Builder;
    setConfiguration(configuration: Configuration): MarkerPatternSelector$Builder;
    setDefaultPattern(defaultPattern: string): MarkerPatternSelector$Builder;
    setDisableAnsi(disableAnsi: boolean): MarkerPatternSelector$Builder;
    setNoConsoleNoAnsi(noConsoleNoAnsi: boolean): MarkerPatternSelector$Builder;
    setProperties(properties: PatternMatch[]): MarkerPatternSelector$Builder;
}