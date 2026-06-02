import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { DirectWriteRolloverStrategy } from '../../../../../../../org/apache/logging/log4j/core/appender/rolling/DirectWriteRolloverStrategy.d.ts'
import type { Action } from '../../../../../../../org/apache/logging/log4j/core/appender/rolling/action/Action.d.ts'
import type { Configuration } from '../../../../../../../org/apache/logging/log4j/core/config/Configuration.d.ts'
import type { Builder } from '../../../../../../../org/apache/logging/log4j/core/util/Builder.d.ts'
export class DirectWriteRolloverStrategy$Builder extends Object implements Builder<DirectWriteRolloverStrategy> {
    constructor()
    readonly compressionLevelStr: string;
    readonly config: Configuration;
    readonly customActions: Action[];
    readonly maxFiles: string;
    readonly stopCustomActionsOnError: boolean;
    readonly tempCompressedFilePattern: string;
    build(): DirectWriteRolloverStrategy;
    getCompressionLevelStr(): string;
    getConfig(): Configuration;
    getCustomActions(): Action[];
    getErrorPrefix(): string;
    getMaxFiles(): string;
    getTempCompressedFilePattern(): string;
    isStopCustomActionsOnError(): boolean;
    isValid(): boolean;
    withCompressionLevelStr(compressionLevelStr: string): DirectWriteRolloverStrategy$Builder;
    withConfig(config: Configuration): DirectWriteRolloverStrategy$Builder;
    withCustomActions(customActions: Action[]): DirectWriteRolloverStrategy$Builder;
    withMaxFiles(maxFiles: string): DirectWriteRolloverStrategy$Builder;
    withStopCustomActionsOnError(stopCustomActionsOnError: boolean): DirectWriteRolloverStrategy$Builder;
    withTempCompressedFilePattern(tempCompressedFilePattern: string): DirectWriteRolloverStrategy$Builder;
}