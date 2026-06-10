import type { Object } from '../../../java/lang/Object.d.ts'
import type { KSerializer } from '../../../kotlinx/serialization/KSerializer.d.ts'
import type { ParametrizedSerializerCache } from '../../../kotlinx/serialization/internal/ParametrizedSerializerCache.d.ts'
import type { SerializerCache } from '../../../kotlinx/serialization/internal/SerializerCache.d.ts'
export class CachingKt extends Object {
    static createCache(paramarg0: (param0: Object) => KSerializer<Object>): SerializerCache<Object>;
    static createParametrizedCache(paramarg0: (param0: Object, param1: Object) => KSerializer<Object>): ParametrizedSerializerCache<Object>;
}