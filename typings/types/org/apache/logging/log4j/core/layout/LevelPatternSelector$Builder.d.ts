import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Configuration } from '../../../../../../org/apache/logging/log4j/core/config/Configuration.d.ts'
import type { LevelPatternSelector } from '../../../../../../org/apache/logging/log4j/core/layout/LevelPatternSelector.d.ts'
import type { PatternMatch } from '../../../../../../org/apache/logging/log4j/core/layout/PatternMatch.d.ts'
import type { Builder } from '../../../../../../org/apache/logging/log4j/core/util/Builder.d.ts'
export class LevelPatternSelector$Builder extends Object implements Builder<LevelPatternSelector> {
    constructor()
    // private alwaysWriteExceptions: boolean;
    // private configuration: Configuration;
    // private defaultPattern: string;
    // private disableAnsi: boolean;
    // private noConsoleNoAnsi: boolean;
    // private properties: PatternMatch[];
    build(): LevelPatternSelector;
    getErrorPrefix(): string;
    isValid(): boolean;
    setAlwaysWriteExceptions(alwaysWriteExceptions: boolean): LevelPatternSelector$Builder;
    setConfiguration(configuration: Configuration): LevelPatternSelector$Builder;
    setDefaultPattern(defaultPattern: string): LevelPatternSelector$Builder;
    setDisableAnsi(disableAnsi: boolean): LevelPatternSelector$Builder;
    setNoConsoleNoAnsi(noConsoleNoAnsi: boolean): LevelPatternSelector$Builder;
    setProperties(properties: PatternMatch[]): LevelPatternSelector$Builder;
}