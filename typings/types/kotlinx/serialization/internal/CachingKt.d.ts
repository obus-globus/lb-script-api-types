import type { Object } from '../../../java/lang/Object.d.ts'
import type { KClass } from '../../../kotlin/reflect/KClass.d.ts'
import type { KType } from '../../../kotlin/reflect/KType.d.ts'
import type { KSerializer } from '../../../kotlinx/serialization/KSerializer.d.ts'
import type { ParametrizedSerializerCache } from '../../../kotlinx/serialization/internal/ParametrizedSerializerCache.d.ts'
import type { SerializerCache } from '../../../kotlinx/serialization/internal/SerializerCache.d.ts'
export class CachingKt extends Object {
    static createCache<T extends unknown>(factory: (param0: KClass<Object>) => KSerializer<T> | null): SerializerCache<T>;
    static createParametrizedCache<T extends unknown>(factory: (param0: KClass<Object>, param1: KType[]) => KSerializer<T> | null): ParametrizedSerializerCache<T>;
}