import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ManagerFactory } from '../../../../../../../org/apache/logging/log4j/core/appender/ManagerFactory.d.ts'
import type { RollingRandomAccessFileManager } from '../../../../../../../org/apache/logging/log4j/core/appender/rolling/RollingRandomAccessFileManager.d.ts'
import type { RollingRandomAccessFileManager$FactoryData } from '../../../../../../../org/apache/logging/log4j/core/appender/rolling/RollingRandomAccessFileManager$FactoryData.d.ts'
export class RollingRandomAccessFileManager$RollingRandomAccessFileManagerFactory extends Object implements ManagerFactory<RollingRandomAccessFileManager, RollingRandomAccessFileManager$FactoryData> {
    private constructor()
    createManager(name: string, data: RollingRandomAccessFileManager$FactoryData): RollingRandomAccessFileManager;
}