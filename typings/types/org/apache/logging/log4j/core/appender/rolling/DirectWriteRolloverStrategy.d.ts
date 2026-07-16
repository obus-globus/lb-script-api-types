import type { Pattern } from '../../../../../../../java/util/regex/Pattern.d.ts'
import type { AbstractRolloverStrategy } from '../../../../../../../org/apache/logging/log4j/core/appender/rolling/AbstractRolloverStrategy.d.ts'
import type { DirectFileRolloverStrategy } from '../../../../../../../org/apache/logging/log4j/core/appender/rolling/DirectFileRolloverStrategy.d.ts'
import type { DirectWriteRolloverStrategy$Builder } from '../../../../../../../org/apache/logging/log4j/core/appender/rolling/DirectWriteRolloverStrategy$Builder.d.ts'
import type { PatternProcessor } from '../../../../../../../org/apache/logging/log4j/core/appender/rolling/PatternProcessor.d.ts'
import type { RollingFileManager } from '../../../../../../../org/apache/logging/log4j/core/appender/rolling/RollingFileManager.d.ts'
import type { RolloverDescription } from '../../../../../../../org/apache/logging/log4j/core/appender/rolling/RolloverDescription.d.ts'
import type { Action } from '../../../../../../../org/apache/logging/log4j/core/appender/rolling/action/Action.d.ts'
import type { Configuration } from '../../../../../../../org/apache/logging/log4j/core/config/Configuration.d.ts'
import type { StrSubstitutor } from '../../../../../../../org/apache/logging/log4j/core/lookup/StrSubstitutor.d.ts'
export class DirectWriteRolloverStrategy extends AbstractRolloverStrategy implements DirectFileRolloverStrategy {
    static PATTERN_COUNTER: Pattern;
    static createStrategy(parammaxFiles: string, paramcompressionLevelStr: string, paramcustomActions: Action[], paramstopCustomActionsOnError: boolean, paramconfig: Configuration): DirectWriteRolloverStrategy;
    static newBuilder(): DirectWriteRolloverStrategy$Builder;
    constructor(maxFiles: number, compressionLevel: number, strSubstitutor: StrSubstitutor, customActions: Action[], stopCustomActionsOnError: boolean)
    constructor(maxFiles: number, compressionLevel: number, strSubstitutor: StrSubstitutor, customActions: Action[], stopCustomActionsOnError: boolean, tempCompressedFilePatternString: string)
    readonly compressionLevel: number;
    // private currentFileName: string;
    readonly customActions: Action[];
    readonly maxFiles: number;
    // private nextIndex: number;
    readonly stopCustomActionsOnError: boolean;
    readonly tempCompressedFilePattern: PatternProcessor;
    // private usePrevTime: boolean;
    clearCurrentFileName(): void;
    getCompressionLevel(): number;
    getCurrentFileName(manager: RollingFileManager): string;
    getCustomActions(): Action[];
    getMaxFiles(): number;
    getTempCompressedFilePattern(): PatternProcessor;
    isStopCustomActionsOnError(): boolean;
    // private purge(manager: RollingFileManager): number;
    rollover(manager: RollingFileManager): RolloverDescription;
    toString(): string;
}