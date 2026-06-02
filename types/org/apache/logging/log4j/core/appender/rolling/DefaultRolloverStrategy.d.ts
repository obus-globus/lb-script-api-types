import type { Pattern } from '../../../../../../../java/util/regex/Pattern.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { AbstractRolloverStrategy } from '../../../../../../../org/apache/logging/log4j/core/appender/rolling/AbstractRolloverStrategy.d.ts'
import type { DefaultRolloverStrategy$Builder } from '../../../../../../../org/apache/logging/log4j/core/appender/rolling/DefaultRolloverStrategy$Builder.d.ts'
import type { PatternProcessor } from '../../../../../../../org/apache/logging/log4j/core/appender/rolling/PatternProcessor.d.ts'
import type { RollingFileManager } from '../../../../../../../org/apache/logging/log4j/core/appender/rolling/RollingFileManager.d.ts'
import type { RolloverDescription } from '../../../../../../../org/apache/logging/log4j/core/appender/rolling/RolloverDescription.d.ts'
import type { Action } from '../../../../../../../org/apache/logging/log4j/core/appender/rolling/action/Action.d.ts'
import type { Configuration } from '../../../../../../../org/apache/logging/log4j/core/config/Configuration.d.ts'
import type { StrSubstitutor } from '../../../../../../../org/apache/logging/log4j/core/lookup/StrSubstitutor.d.ts'
export class DefaultRolloverStrategy extends AbstractRolloverStrategy {
    static PATTERN_COUNTER: Pattern;
    static createStrategy(parammax: string, parammin: string, paramfileIndex: string, paramcompressionLevelStr: string, paramcustomActions: (Object | null)[], paramstopCustomActionsOnError: boolean, paramconfig: Configuration): DefaultRolloverStrategy;
    static newBuilder(): DefaultRolloverStrategy$Builder;
    constructor(minIndex: number, maxIndex: number, useMax: boolean, compressionLevel: number, strSubstitutor: StrSubstitutor, customActions: Action[], stopCustomActionsOnError: boolean)
    constructor(minIndex: number, maxIndex: number, useMax: boolean, compressionLevel: number, strSubstitutor: StrSubstitutor, customActions: Action[], stopCustomActionsOnError: boolean, tempCompressedFilePatternString: string)
    readonly compressionLevel: number;
    readonly customActions: Action[];
    readonly maxIndex: number;
    readonly minIndex: number;
    readonly stopCustomActionsOnError: boolean;
    readonly tempCompressedFilePattern: PatternProcessor;
    readonly useMax: boolean;
    getCompressionLevel(): number;
    getCustomActions(): Action[];
    getMaxIndex(): number;
    getMinIndex(): number;
    getTempCompressedFilePattern(): PatternProcessor;
    isStopCustomActionsOnError(): boolean;
    isUseMax(): boolean;
    // private purge(lowIndex: number, highIndex: number, manager: RollingFileManager): number;
    // private purgeAscending(lowIndex: number, highIndex: number, manager: RollingFileManager): number;
    // private purgeDescending(lowIndex: number, highIndex: number, manager: RollingFileManager): number;
    rollover(manager: RollingFileManager): RolloverDescription;
    toString(): string;
}