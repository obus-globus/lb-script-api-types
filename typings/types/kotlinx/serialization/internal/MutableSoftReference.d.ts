import type { SoftReference } from '../../../java/lang/ref/SoftReference.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Function0 } from '../../../kotlin/jvm/functions/Function0.d.ts'
export class MutableSoftReference<T extends Object | number | string | boolean> extends Object {
    constructor()
    reference: SoftReference<T>;
    getOrSetWithLock(factory: Function0<T>): T;
}