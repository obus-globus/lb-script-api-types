import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { RollingFileManager } from '../../../../../../../org/apache/logging/log4j/core/appender/rolling/RollingFileManager.d.ts'
export interface DirectFileRolloverStrategy extends Object{
    clearCurrentFileName(): void;
    getCurrentFileName(manager: RollingFileManager): string;
}