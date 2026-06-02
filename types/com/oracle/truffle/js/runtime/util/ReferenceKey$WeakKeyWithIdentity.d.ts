import type { ReferenceKey$WithIdentity } from '../../../../../../com/oracle/truffle/js/runtime/util/ReferenceKey$WithIdentity.d.ts'
import type { ReferenceQueue } from '../../../../../../java/lang/ref/ReferenceQueue.d.ts'
import type { WeakReference } from '../../../../../../java/lang/ref/WeakReference.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ReferenceKey$WeakKeyWithIdentity<T extends Object | number | string | boolean> extends WeakReference<T> implements ReferenceKey$WithIdentity<T> {
    static reachabilityFence(paramarg0: Object): void;
    constructor(key: T, queue: ReferenceQueue<T>)
    // private hashcode: number;
    equals(obj: Object | null): boolean;
    hashCode(): number;
}