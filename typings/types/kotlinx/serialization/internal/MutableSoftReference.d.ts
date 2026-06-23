import type { SoftReference } from '../../../java/lang/ref/SoftReference.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class MutableSoftReference<T extends unknown> extends Object {
    constructor()
    reference: SoftReference<T>;
    getOrSetWithLock(factory: () => T): T;
}