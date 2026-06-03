import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { KClass } from '../../../kotlin/reflect/KClass.d.ts'
import type { KSerializer } from '../../../kotlinx/serialization/KSerializer.d.ts'
import type { CacheEntry } from '../../../kotlinx/serialization/internal/CacheEntry.d.ts'
import type { SerializerCache } from '../../../kotlinx/serialization/internal/SerializerCache.d.ts'
export class ConcurrentHashMapCache<T extends Object | number | string | boolean> extends Object implements SerializerCache<T> {
    constructor(compute: (param0: KClass<Object>) => KSerializer<T> | null)
    // private cache: Map<Class<Object>, CacheEntry<T>>;
    // private compute: (param0: KClass<Object>) => KSerializer<T> | null;
    get(key: KClass<Object>): KSerializer<T> | null;
    isStored(key: KClass<Object>): boolean;
    isStored(key: KClass<Object>): boolean;
}