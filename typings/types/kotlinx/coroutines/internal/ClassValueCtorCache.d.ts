import type { ClassValueCtorCache$cache$1 } from '../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { Class } from '../../../java/lang/Class.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
import type { CtorCache } from '../../../kotlinx/coroutines/internal/CtorCache.d.ts'
export class ClassValueCtorCache extends CtorCache {
    static INSTANCE: ClassValueCtorCache;
    // private cache: ClassValueCtorCache$cache$1;
    get(key: Class<Throwable>): (param0: Throwable) => Throwable | null;
}