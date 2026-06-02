import type { Class } from '../../../java/lang/Class.d.ts'
import type { ReentrantReadWriteLock } from '../../../java/util/concurrent/locks/ReentrantReadWriteLock.d.ts'
import type { Function1 } from '../../../kotlin/jvm/functions/Function1.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
import type { CtorCache } from '../../../kotlinx/coroutines/internal/CtorCache.d.ts'
export class WeakMapCtorCache extends CtorCache {
    static INSTANCE: WeakMapCtorCache;
    // private cacheLock: ReentrantReadWriteLock;
    // private exceptionCtors: Map<Class<Throwable>, Function1<Throwable, Throwable>>;
    get(key: Class<Throwable>): Function1<Throwable, Throwable>;
}