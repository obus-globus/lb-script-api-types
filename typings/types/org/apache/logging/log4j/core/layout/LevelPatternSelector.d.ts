import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { LogEvent } from '../../../../../../org/apache/logging/log4j/core/LogEvent.d.ts'
import type { Configuration } from '../../../../../../org/apache/logging/log4j/core/config/Configuration.d.ts'
import type { LocationAware } from '../../../../../../org/apache/logging/log4j/core/impl/LocationAware.d.ts'
import type { LevelPatternSelector$Builder } from '../../../../../../org/apache/logging/log4j/core/layout/LevelPatternSelector$Builder.d.ts'
import type { PatternMatch } from '../../../../../../org/apache/logging/log4j/core/layout/PatternMatch.d.ts'
import type { PatternSelector } from '../../../../../../org/apache/logging/log4j/core/layout/PatternSelector.d.ts'
import type { PatternFormatter } from '../../../../../../org/apache/logging/log4j/core/pattern/PatternFormatter.d.ts'
export class LevelPatternSelector extends Object implements LocationAware, PatternSelector {
    static ELEMENT_TYPE: string;
    static createSelector(paramproperties: PatternMatch[], paramdefaultPattern: string, paramalwaysWriteExceptions: boolean, paramnoConsoleNoAnsi: boolean, paramconfiguration: Configuration): LevelPatternSelector;
    static newBuilder(): LevelPatternSelector$Builder;
    constructor(properties: PatternMatch[], defaultPattern: string, alwaysWriteExceptions: boolean, noConsoleNoAnsi: boolean, config: Configuration)
    // private defaultFormatters: PatternFormatter[];
    // private defaultPattern: string;
    // private formatterMap: JavaMap<string, PatternFormatter[]>;
    // private patternMap: JavaMap<string, string>;
    // private requiresLocation: boolean;
    getFormatters(event: LogEvent): PatternFormatter[];
    requiresLocation(): boolean;
    toString(): string;
}