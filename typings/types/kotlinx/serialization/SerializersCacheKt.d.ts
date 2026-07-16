import type { Object } from '../../java/lang/Object.d.ts'
import type { Result } from '../../kotlin/Result.d.ts'
import type { KClass } from '../../kotlin/reflect/KClass.d.ts'
import type { KType } from '../../kotlin/reflect/KType.d.ts'
import type { KSerializer } from '../../kotlinx/serialization/KSerializer.d.ts'
import type { PolymorphicSerializer } from '../../kotlinx/serialization/PolymorphicSerializer.d.ts'
import type { SerializerCache } from '../../kotlinx/serialization/internal/SerializerCache.d.ts'
export class SerializersCacheKt extends Object {
    static findCachedSerializer(clazz: KClass<Object>, isNullable: boolean): KSerializer<Object> | null;
    static findParametrizedCachedSerializer(clazz: KClass<Object>, types: KType[], isNullable: boolean): Result<KSerializer<Object>>;
    static getSERIALIZERS_CACHE(): SerializerCache<Object>;
    static polymorphicIfInterface(self: KClass<Object>): PolymorphicSerializer<Object> | null;
}