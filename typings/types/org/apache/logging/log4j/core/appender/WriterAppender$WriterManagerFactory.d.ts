import type { WriterAppender$1 } from '../../../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ManagerFactory } from '../../../../../../org/apache/logging/log4j/core/appender/ManagerFactory.d.ts'
import type { WriterAppender$FactoryData } from '../../../../../../org/apache/logging/log4j/core/appender/WriterAppender$FactoryData.d.ts'
import type { WriterManager } from '../../../../../../org/apache/logging/log4j/core/appender/WriterManager.d.ts'
export class WriterAppender$WriterManagerFactory extends Object implements ManagerFactory<WriterManager, WriterAppender$FactoryData> {
    private constructor()
    constructor(arg0: WriterAppender$1)
    createManager(name: string, data: WriterAppender$FactoryData): WriterManager;
}