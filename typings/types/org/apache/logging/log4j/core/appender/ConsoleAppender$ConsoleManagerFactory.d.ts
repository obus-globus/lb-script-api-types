import type { ConsoleAppender$1 } from '../../../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ConsoleAppender$FactoryData } from '../../../../../../org/apache/logging/log4j/core/appender/ConsoleAppender$FactoryData.d.ts'
import type { ManagerFactory } from '../../../../../../org/apache/logging/log4j/core/appender/ManagerFactory.d.ts'
import type { OutputStreamManager } from '../../../../../../org/apache/logging/log4j/core/appender/OutputStreamManager.d.ts'
export class ConsoleAppender$ConsoleManagerFactory extends Object implements ManagerFactory<OutputStreamManager, ConsoleAppender$FactoryData> {
    private constructor()
    constructor(arg0: ConsoleAppender$1)
    createManager(name: string, data: ConsoleAppender$FactoryData): OutputStreamManager;
}