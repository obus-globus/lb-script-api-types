import type { Pattern } from '../../../../../../../java/util/regex/Pattern.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { RollingFileManager } from '../../../../../../../org/apache/logging/log4j/core/appender/rolling/RollingFileManager.d.ts'
import type { RolloverStrategy } from '../../../../../../../org/apache/logging/log4j/core/appender/rolling/RolloverStrategy.d.ts'
import type { Action } from '../../../../../../../org/apache/logging/log4j/core/appender/rolling/action/Action.d.ts'
import type { StrSubstitutor } from '../../../../../../../org/apache/logging/log4j/core/lookup/StrSubstitutor.d.ts'
export abstract class AbstractRolloverStrategy extends Object implements RolloverStrategy {
    static PATTERN_COUNTER: Pattern;
    constructor(strSubstitutor: StrSubstitutor)
    readonly strSubstitutor: StrSubstitutor;
    getEligibleFiles(path: string, pattern: string): { [key: number]: Path[] };
    getEligibleFiles(path: string, logfilePattern: string, isAscending: boolean): { [key: number]: Path[] };
    getEligibleFiles(currentFile: string, path: string, logfilePattern: string, isAscending: boolean): { [key: number]: Path[] };
    getEligibleFiles(manager: RollingFileManager): { [key: number]: Path[] };
    getEligibleFiles(manager: RollingFileManager, isAscending: boolean): { [key: number]: Path[] };
    getStrSubstitutor(): StrSubstitutor;
    merge(compressAction: Action, custom: Action[], stopOnError: boolean): Action;
    suffixLength(lowFilename: string): number;
}