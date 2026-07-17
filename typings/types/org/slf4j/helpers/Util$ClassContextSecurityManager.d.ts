import type { Class } from '../../../java/lang/Class.d.ts'
import type { SecurityManager } from '../../../java/lang/SecurityManager.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class Util$ClassContextSecurityManager extends SecurityManager {
    private constructor()
    getClassContext(): Class<Object>[];
}