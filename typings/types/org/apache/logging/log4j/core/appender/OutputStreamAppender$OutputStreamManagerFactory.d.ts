import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ManagerFactory } from '../../../../../../org/apache/logging/log4j/core/appender/ManagerFactory.d.ts'
import type { OutputStreamAppender$FactoryData } from '../../../../../../org/apache/logging/log4j/core/appender/OutputStreamAppender$FactoryData.d.ts'
import type { OutputStreamManager } from '../../../../../../org/apache/logging/log4j/core/appender/OutputStreamManager.d.ts'
export class OutputStreamAppender$OutputStreamManagerFactory extends Object implements ManagerFactory<OutputStreamManager, OutputStreamAppender$FactoryData> {
    private constructor()
    createManager(name: string, data: OutputStreamAppender$FactoryData): OutputStreamManager;
}