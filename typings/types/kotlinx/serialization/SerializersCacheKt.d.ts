import type { Object } from '../../java/lang/Object.d.ts'
import type { KClass } from '../../kotlin/reflect/KClass.d.ts'
import type { KType } from '../../kotlin/reflect/KType.d.ts'
import type { KSerializer } from '../../kotlinx/serialization/KSerializer.d.ts'
import type { PolymorphicSerializer } from '../../kotlinx/serialization/PolymorphicSerializer.d.ts'
import type { SerializerCache } from '../../kotlinx/serialization/internal/SerializerCache.d.ts'
export class SerializersCacheKt extends Object {
    static findCachedSerializer(paramarg0: KClass<Object>, paramarg1: boolean): KSerializer<Object>;
    static findParametrizedCachedSerializer(paramarg0: KClass<Object>, paramarg1: KType[], paramarg2: boolean): Object;
    static getSERIALIZERS_CACHE(): SerializerCache<Object>;
    static polymorphicIfInterface(paramarg0: KClass<Object>): PolymorphicSerializer<Object>;
}