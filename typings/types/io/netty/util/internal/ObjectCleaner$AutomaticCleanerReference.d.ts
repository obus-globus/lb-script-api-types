import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { Thread } from '../../../../java/lang/Thread.d.ts'
import type { WeakReference } from '../../../../java/lang/ref/WeakReference.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ObjectCleaner$AutomaticCleanerReference extends WeakReference<Object> {
    static reachabilityFence(paramarg0: Object): void;
    constructor(arg0: Object, arg1: () => void)
    // private cleanupTask: () => void;
    cleanup(): void;
    clear(): void;
    get(): Thread | null;
}