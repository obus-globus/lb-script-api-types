import type { Object } from '../../../java/lang/Object.d.ts'
import type { Result } from '../../../kotlin/Result.d.ts'
import type { KClass } from '../../../kotlin/reflect/KClass.d.ts'
import type { KType } from '../../../kotlin/reflect/KType.d.ts'
import type { KSerializer } from '../../../kotlinx/serialization/KSerializer.d.ts'
import type { ClassValueReferences } from '../../../kotlinx/serialization/internal/ClassValueReferences.d.ts'
import type { ParametrizedCacheEntry } from '../../../kotlinx/serialization/internal/ParametrizedCacheEntry.d.ts'
import type { ParametrizedSerializerCache } from '../../../kotlinx/serialization/internal/ParametrizedSerializerCache.d.ts'
export class ClassValueParametrizedCache<T extends Object | number | string | boolean> extends Object implements ParametrizedSerializerCache<T> {
    constructor(compute: (param0: KClass<Object>, param1: KType[]) => KSerializer<T> | null)
    // private classValue: ClassValueReferences<ParametrizedCacheEntry<T>>;
    // private compute: (param0: KClass<Object>, param1: KType[]) => KSerializer<T> | null;
    get(key: KClass<Object>, types: KType[]): Result<KSerializer<T>>;
}