import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Configuration } from '../../../../../../org/apache/logging/log4j/core/config/Configuration.d.ts'
import type { PatternMatch } from '../../../../../../org/apache/logging/log4j/core/layout/PatternMatch.d.ts'
import type { ScriptPatternSelector } from '../../../../../../org/apache/logging/log4j/core/layout/ScriptPatternSelector.d.ts'
import type { AbstractScript } from '../../../../../../org/apache/logging/log4j/core/script/AbstractScript.d.ts'
import type { Builder } from '../../../../../../org/apache/logging/log4j/core/util/Builder.d.ts'
export class ScriptPatternSelector$Builder extends Object implements Builder<ScriptPatternSelector> {
    private constructor()
    // private alwaysWriteExceptions: boolean;
    // private configuration: Configuration;
    // private defaultPattern: string;
    // private disableAnsi: boolean;
    // private noConsoleNoAnsi: boolean;
    // private properties: PatternMatch[];
    // private script: AbstractScript;
    build(): ScriptPatternSelector;
    getErrorPrefix(): string;
    isValid(): boolean;
    setAlwaysWriteExceptions(alwaysWriteExceptions: boolean): ScriptPatternSelector$Builder;
    setConfiguration(config: Configuration): ScriptPatternSelector$Builder;
    setDefaultPattern(defaultPattern: string): ScriptPatternSelector$Builder;
    setDisableAnsi(disableAnsi: boolean): ScriptPatternSelector$Builder;
    setNoConsoleNoAnsi(noConsoleNoAnsi: boolean): ScriptPatternSelector$Builder;
    setProperties(properties: PatternMatch[]): ScriptPatternSelector$Builder;
    setScript(script: AbstractScript): ScriptPatternSelector$Builder;
}