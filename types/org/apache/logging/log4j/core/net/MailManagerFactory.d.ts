import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ManagerFactory } from '../../../../../../org/apache/logging/log4j/core/appender/ManagerFactory.d.ts'
import type { MailManager } from '../../../../../../org/apache/logging/log4j/core/net/MailManager.d.ts'
import type { MailManager$FactoryData } from '../../../../../../org/apache/logging/log4j/core/net/MailManager$FactoryData.d.ts'
export interface MailManagerFactory extends Object, ManagerFactory<MailManager, MailManager$FactoryData>{
    createManager(name: string, data: MailManager$FactoryData): MailManager;
}