import type { JndiManager$1 } from '../../../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ManagerFactory } from '../../../../../../org/apache/logging/log4j/core/appender/ManagerFactory.d.ts'
import type { JndiManager } from '../../../../../../org/apache/logging/log4j/core/net/JndiManager.d.ts'
export class JndiManager$JndiManagerFactory extends Object implements ManagerFactory<JndiManager, { [key: string]: any }> {
    private constructor()
    constructor(arg0: JndiManager$1)
    createManager(name: string, data: { [key: string]: any }): JndiManager;
}