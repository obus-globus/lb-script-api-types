import type { Runnable } from '../../../../../java/lang/Runnable.d.ts'
import type { WeakReference } from '../../../../../java/lang/ref/WeakReference.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class CleanableWeakReference<T extends unknown> extends WeakReference<T> implements Runnable {
    static reachabilityFence(paramarg0: Object): void;
    constructor(referent: T)
    invalidate(): void;
    run(): void;
}