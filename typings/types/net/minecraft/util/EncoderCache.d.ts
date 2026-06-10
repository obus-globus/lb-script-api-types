import type { LoadingCache } from '../../../com/google/common/cache/LoadingCache.d.ts'
import type { Codec } from '../../../com/mojang/serialization/Codec.d.ts'
import type { DataResult } from '../../../com/mojang/serialization/DataResult.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { EncoderCache$Key } from '../../../net/minecraft/util/EncoderCache$Key.d.ts'
export class EncoderCache extends Object {
    constructor(maximumSize: number)
    // private cache: LoadingCache<EncoderCache$Key<Object, Object>, DataResult<Object>>;
    wrap<A extends Object | number | string | boolean>(codec: Codec<A>): Codec<A>;
}