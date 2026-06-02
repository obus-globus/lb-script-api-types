import type { ClassLoader } from '../../../../java/lang/ClassLoader.d.ts'
import type { ReferenceQueue } from '../../../../java/lang/ref/ReferenceQueue.d.ts'
import type { WeakReference } from '../../../../java/lang/ref/WeakReference.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class OpeningMetafactory$ClassLoaderKey extends WeakReference<ClassLoader> {
    static reachabilityFence(paramarg0: Object): void;
    constructor(arg0: ClassLoader, arg1: ReferenceQueue<ClassLoader>)
    // private hashCode: number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
}