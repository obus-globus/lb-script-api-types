import type { Class } from '../../../java/lang/Class.d.ts'
import type { ReentrantReadWriteLock } from '../../../java/util/concurrent/locks/ReentrantReadWriteLock.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
import type { CtorCache } from '../../../kotlinx/coroutines/internal/CtorCache.d.ts'
export class WeakMapCtorCache extends CtorCache {
    static INSTANCE: WeakMapCtorCache;
    // private cacheLock: ReentrantReadWriteLock;
    // private exceptionCtors: Map<Class<Throwable>, (param0: Throwable) => Throwable | null>;
    get(key: Class<Throwable>): (param0: Throwable) => Throwable | null;
}