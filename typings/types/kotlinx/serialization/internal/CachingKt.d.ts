import type { Object } from '../../../java/lang/Object.d.ts'
import type { ParametrizedSerializerCache } from '../../../kotlinx/serialization/internal/ParametrizedSerializerCache.d.ts'
import type { SerializerCache } from '../../../kotlinx/serialization/internal/SerializerCache.d.ts'
export class CachingKt extends Object {
    static createCache(paramarg0: (param0: Object | null) => Object | null): SerializerCache<Object>;
    static createParametrizedCache(paramarg0: (param0: Object | null, param1: Object | null) => Object | null): ParametrizedSerializerCache<Object>;
}