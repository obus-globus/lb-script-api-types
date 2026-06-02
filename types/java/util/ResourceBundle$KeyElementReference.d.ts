import type { ReferenceQueue } from '../../java/lang/ref/ReferenceQueue.d.ts'
import type { WeakReference } from '../../java/lang/ref/WeakReference.d.ts'
import type { ResourceBundle$CacheKey } from '../../java/util/ResourceBundle$CacheKey.d.ts'
import type { ResourceBundle$CacheKeyReference } from '../../java/util/ResourceBundle$CacheKeyReference.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class ResourceBundle$KeyElementReference<T extends Object | number | string | boolean> extends WeakReference<T> implements ResourceBundle$CacheKeyReference {
    static reachabilityFence(paramarg0: Object): void;
    constructor(arg0: T, arg1: ReferenceQueue<Object>, arg2: ResourceBundle$CacheKey)
    readonly cacheKey: ResourceBundle$CacheKey;
    getCacheKey(): ResourceBundle$CacheKey;
}