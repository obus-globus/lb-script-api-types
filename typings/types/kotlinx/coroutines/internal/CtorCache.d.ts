import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
export abstract class CtorCache extends Object {
    constructor()
    get(key: Class<Throwable>): (param0: Throwable) => Throwable | null;
}