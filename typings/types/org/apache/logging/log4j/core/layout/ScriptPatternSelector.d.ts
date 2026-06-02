import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { LogEvent } from '../../../../../../org/apache/logging/log4j/core/LogEvent.d.ts'
import type { Configuration } from '../../../../../../org/apache/logging/log4j/core/config/Configuration.d.ts'
import type { LocationAware } from '../../../../../../org/apache/logging/log4j/core/impl/LocationAware.d.ts'
import type { PatternMatch } from '../../../../../../org/apache/logging/log4j/core/layout/PatternMatch.d.ts'
import type { PatternSelector } from '../../../../../../org/apache/logging/log4j/core/layout/PatternSelector.d.ts'
import type { ScriptPatternSelector$Builder } from '../../../../../../org/apache/logging/log4j/core/layout/ScriptPatternSelector$Builder.d.ts'
import type { PatternFormatter } from '../../../../../../org/apache/logging/log4j/core/pattern/PatternFormatter.d.ts'
import type { AbstractScript } from '../../../../../../org/apache/logging/log4j/core/script/AbstractScript.d.ts'
export class ScriptPatternSelector extends Object implements LocationAware, PatternSelector {
    static ELEMENT_TYPE: string;
    static createSelector(paramscript: AbstractScript, paramproperties: (Object | null)[], paramdefaultPattern: string, paramalwaysWriteExceptions: boolean, paramnoConsoleNoAnsi: boolean, paramconfiguration: Configuration): ScriptPatternSelector;
    static newBuilder(): ScriptPatternSelector$Builder;
    private constructor(config: Configuration, script: AbstractScript, properties: PatternMatch[], defaultPattern: string, alwaysWriteExceptions: boolean, disableAnsi: boolean, noConsoleNoAnsi: boolean)
    constructor(script: AbstractScript, properties: PatternMatch[], defaultPattern: string, alwaysWriteExceptions: boolean, disableAnsi: boolean, noConsoleNoAnsi: boolean, config: Configuration)
    // private configuration: Configuration;
    // private defaultFormatters: PatternFormatter[];
    // private defaultPattern: string;
    // private formatterMap: { [key: string]: PatternFormatter[] };
    // private patternMap: { [key: string]: string };
    // private requiresLocation: boolean;
    // private script: AbstractScript;
    getFormatters(event: LogEvent): PatternFormatter[];
    requiresLocation(): boolean;
    toString(): string;
}