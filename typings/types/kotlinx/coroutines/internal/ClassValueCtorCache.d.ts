import type { Class } from '../../../java/lang/Class.d.ts'
import type { ClassValue } from '../../../java/lang/ClassValue.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
import type { CtorCache } from '../../../kotlinx/coroutines/internal/CtorCache.d.ts'
export class ClassValueCtorCache extends CtorCache {
    static INSTANCE: ClassValueCtorCache;
    // private cache: ClassValue<(param0: Throwable) => Throwable | null>;
    get(key: Class<Throwable>): (param0: Throwable) => Throwable | null;
}