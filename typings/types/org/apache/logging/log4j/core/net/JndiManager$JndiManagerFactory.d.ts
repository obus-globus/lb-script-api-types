import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ManagerFactory } from '../../../../../../org/apache/logging/log4j/core/appender/ManagerFactory.d.ts'
import type { JndiManager } from '../../../../../../org/apache/logging/log4j/core/net/JndiManager.d.ts'
export class JndiManager$JndiManagerFactory extends Object implements ManagerFactory<JndiManager, { [key: string]: any }> {
    constructor(arg0: any)
    createManager(name: string, data: { [key: string]: any }): JndiManager;
}