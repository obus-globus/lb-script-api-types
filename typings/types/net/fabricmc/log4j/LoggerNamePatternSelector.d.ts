import type { Object } from '../../../java/lang/Object.d.ts'
import type { LoggerNamePatternSelector$LoggerNameSelector } from '../../../net/fabricmc/log4j/LoggerNamePatternSelector$LoggerNameSelector.d.ts'
import type { LogEvent } from '../../../org/apache/logging/log4j/core/LogEvent.d.ts'
import type { Configuration } from '../../../org/apache/logging/log4j/core/config/Configuration.d.ts'
import type { PatternMatch } from '../../../org/apache/logging/log4j/core/layout/PatternMatch.d.ts'
import type { PatternSelector } from '../../../org/apache/logging/log4j/core/layout/PatternSelector.d.ts'
import type { PatternFormatter } from '../../../org/apache/logging/log4j/core/pattern/PatternFormatter.d.ts'
export class LoggerNamePatternSelector extends Object implements PatternSelector {
    static ELEMENT_TYPE: string;
    static createSelector(paramarg0: string, paramarg1: PatternMatch[], paramarg2: boolean, paramarg3: boolean, paramarg4: boolean, paramarg5: Configuration): LoggerNamePatternSelector;
    private constructor(arg0: string, arg1: PatternMatch[], arg2: boolean, arg3: boolean, arg4: boolean, arg5: Configuration)
    // private defaultFormatters: PatternFormatter[];
    // private formatters: LoggerNamePatternSelector$LoggerNameSelector[];
    getFormatters(arg0: LogEvent): PatternFormatter[];
}