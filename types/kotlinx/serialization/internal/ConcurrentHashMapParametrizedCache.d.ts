import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Function2 } from '../../../kotlin/jvm/functions/Function2.d.ts'
import type { Result } from '../../../kotlin/Result.d.ts'
import type { KClass } from '../../../kotlin/reflect/KClass.d.ts'
import type { KType } from '../../../kotlin/reflect/KType.d.ts'
import type { KSerializer } from '../../../kotlinx/serialization/KSerializer.d.ts'
import type { ParametrizedCacheEntry } from '../../../kotlinx/serialization/internal/ParametrizedCacheEntry.d.ts'
import type { ParametrizedSerializerCache } from '../../../kotlinx/serialization/internal/ParametrizedSerializerCache.d.ts'
export class ConcurrentHashMapParametrizedCache<T extends Object | number | string | boolean> extends Object implements ParametrizedSerializerCache<T> {
    constructor(compute: Function2<KClass<Object>, KType[], KSerializer<T>>)
    // private cache: Map<Class<Object>, ParametrizedCacheEntry<T>>;
    // private compute: (param0: KClass<Object>, param1: KType[]) => KSerializer<T> | null;
    get(key: KClass<Object>, types: KType[]): Result<KSerializer<T>>;
}