import type { WeakReference } from '../../../../java/lang/ref/WeakReference.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Closeables$HardReference<V extends Object | number | string | boolean> extends WeakReference<V> {
    static reachabilityFence(paramarg0: Object): void;
    constructor(arg0: V)
    // private strongRef: V;
    get(): V | null;
}