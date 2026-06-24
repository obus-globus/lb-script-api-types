import type { NetUtil$1 } from '../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { PrivilegedAction } from '../../../java/security/PrivilegedAction.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class NetUtil$SoMaxConnAction extends Object implements PrivilegedAction<number> {
    private constructor()
    constructor(arg0: NetUtil$1)
    run(): number;
}