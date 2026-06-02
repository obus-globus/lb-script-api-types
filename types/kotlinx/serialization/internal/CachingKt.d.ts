import type { Object } from '../../../java/lang/Object.d.ts'
import type { Function1 } from '../../../kotlin/jvm/functions/Function1.d.ts'
import type { Function2 } from '../../../kotlin/jvm/functions/Function2.d.ts'
import type { ParametrizedSerializerCache } from '../../../kotlinx/serialization/internal/ParametrizedSerializerCache.d.ts'
import type { SerializerCache } from '../../../kotlinx/serialization/internal/SerializerCache.d.ts'
export class CachingKt extends Object {
    static createCache(paramarg0: Function1<Object, Object>): SerializerCache<Object>;
    static createParametrizedCache(paramarg0: Function2<Object, Object, Object>): ParametrizedSerializerCache<Object>;
}