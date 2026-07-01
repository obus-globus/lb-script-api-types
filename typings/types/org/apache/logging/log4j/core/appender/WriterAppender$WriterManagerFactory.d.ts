import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ManagerFactory } from '../../../../../../org/apache/logging/log4j/core/appender/ManagerFactory.d.ts'
import type { WriterAppender$FactoryData } from '../../../../../../org/apache/logging/log4j/core/appender/WriterAppender$FactoryData.d.ts'
import type { WriterManager } from '../../../../../../org/apache/logging/log4j/core/appender/WriterManager.d.ts'
export class WriterAppender$WriterManagerFactory extends Object implements ManagerFactory<WriterManager, WriterAppender$FactoryData> {
    constructor(arg0: any)
    createManager(name: string, data: WriterAppender$FactoryData): WriterManager;
}