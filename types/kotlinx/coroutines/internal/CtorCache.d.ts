import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Function1 } from '../../../kotlin/jvm/functions/Function1.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
export abstract class CtorCache extends Object {
    constructor()
    get(key: Class<Throwable>): Function1<Throwable, Throwable>;
}