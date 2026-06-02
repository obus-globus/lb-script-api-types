import type { WeakReference } from '../../../java/lang/ref/WeakReference.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class Engine$CleanableReference<T extends Object | number | string | boolean> extends WeakReference<T> {
    static reachabilityFence(paramarg0: Object): void;
    constructor(referent: T)
    clean(): void;
}