import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { DefaultRolloverStrategy } from '../../../../../../../org/apache/logging/log4j/core/appender/rolling/DefaultRolloverStrategy.d.ts'
import type { Action } from '../../../../../../../org/apache/logging/log4j/core/appender/rolling/action/Action.d.ts'
import type { Configuration } from '../../../../../../../org/apache/logging/log4j/core/config/Configuration.d.ts'
import type { Builder } from '../../../../../../../org/apache/logging/log4j/core/util/Builder.d.ts'
export class DefaultRolloverStrategy$Builder extends Object implements Builder<DefaultRolloverStrategy> {
    constructor()
    readonly compressionLevelStr: string;
    readonly config: Configuration;
    readonly customActions: Action[];
    readonly fileIndex: string;
    readonly max: string;
    readonly min: string;
    readonly stopCustomActionsOnError: boolean;
    readonly tempCompressedFilePattern: string;
    build(): DefaultRolloverStrategy;
    getCompressionLevelStr(): string;
    getConfig(): Configuration;
    getCustomActions(): Action[];
    getErrorPrefix(): string;
    getFileIndex(): string;
    getMax(): string;
    getMin(): string;
    getTempCompressedFilePattern(): string;
    isStopCustomActionsOnError(): boolean;
    isValid(): boolean;
    withCompressionLevelStr(compressionLevelStr: string): DefaultRolloverStrategy$Builder;
    withConfig(config: Configuration): DefaultRolloverStrategy$Builder;
    withCustomActions(customActions: Action[]): DefaultRolloverStrategy$Builder;
    withFileIndex(fileIndex: string): DefaultRolloverStrategy$Builder;
    withMax(max: string): DefaultRolloverStrategy$Builder;
    withMin(min: string): DefaultRolloverStrategy$Builder;
    withStopCustomActionsOnError(stopCustomActionsOnError: boolean): DefaultRolloverStrategy$Builder;
    withTempCompressedFilePattern(tempCompressedFilePattern: string): DefaultRolloverStrategy$Builder;
}