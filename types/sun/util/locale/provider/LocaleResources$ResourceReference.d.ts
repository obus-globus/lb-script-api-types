import type { ReferenceQueue } from '../../../../java/lang/ref/ReferenceQueue.d.ts'
import type { SoftReference } from '../../../../java/lang/ref/SoftReference.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class LocaleResources$ResourceReference extends SoftReference<Object> {
    static reachabilityFence(paramarg0: Object): void;
    constructor(arg0: string, arg1: Object, arg2: ReferenceQueue<Object>)
    // private cacheKey: string;
    getCacheKey(): string;
}