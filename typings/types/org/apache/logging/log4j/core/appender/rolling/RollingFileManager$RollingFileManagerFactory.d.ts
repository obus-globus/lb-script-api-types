import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ManagerFactory } from '../../../../../../../org/apache/logging/log4j/core/appender/ManagerFactory.d.ts'
import type { RollingFileManager } from '../../../../../../../org/apache/logging/log4j/core/appender/rolling/RollingFileManager.d.ts'
import type { RollingFileManager$FactoryData } from '../../../../../../../org/apache/logging/log4j/core/appender/rolling/RollingFileManager$FactoryData.d.ts'
export class RollingFileManager$RollingFileManagerFactory extends Object implements ManagerFactory<RollingFileManager, RollingFileManager$FactoryData> {
    private constructor()
    createManager(name: string, data: RollingFileManager$FactoryData): RollingFileManager;
}