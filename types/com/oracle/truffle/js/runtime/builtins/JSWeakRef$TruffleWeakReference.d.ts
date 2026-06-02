import type { WeakReference } from '../../../../../../java/lang/ref/WeakReference.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSWeakRef$TruffleWeakReference<T extends Object | number | string | boolean> extends WeakReference<T> {
    static reachabilityFence(paramarg0: Object): void;
    constructor(t: T)
}