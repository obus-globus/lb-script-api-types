import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { RollingFileManager } from '../../../../../../../org/apache/logging/log4j/core/appender/rolling/RollingFileManager.d.ts'
import type { RolloverDescription } from '../../../../../../../org/apache/logging/log4j/core/appender/rolling/RolloverDescription.d.ts'
export interface RolloverStrategy extends Object{
    rollover(manager: RollingFileManager): RolloverDescription;
}