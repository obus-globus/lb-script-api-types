import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ManagerFactory } from '../../../../../../org/apache/logging/log4j/core/appender/ManagerFactory.d.ts'
import type { JndiManager } from '../../../../../../org/apache/logging/log4j/core/net/JndiManager.d.ts'
export class JndiManager$JndiManagerFactory extends Object implements ManagerFactory<JndiManager, JavaMap<any, any>> {
    private constructor()
    createManager(name: string, data: JavaMap<any, any>): JndiManager;
}