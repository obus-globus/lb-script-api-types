import type { Util$1 } from '../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { Class } from '../../../java/lang/Class.d.ts'
import type { SecurityManager } from '../../../java/lang/SecurityManager.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class Util$ClassContextSecurityManager extends SecurityManager {
    private constructor()
    constructor(arg0: Util$1)
    getClassContext(): Class<Object>[];
}