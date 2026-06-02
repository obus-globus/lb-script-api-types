import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ManagerFactory } from '../../../../../../org/apache/logging/log4j/core/appender/ManagerFactory.d.ts'
import type { JndiManager } from '../../../../../../org/apache/logging/log4j/core/net/JndiManager.d.ts'
export class JndiManager$JndiManagerFactory extends Object implements ManagerFactory<JndiManager, Properties> {
    private constructor()
    createManager(name: string, data: Properties): JndiManager;
}