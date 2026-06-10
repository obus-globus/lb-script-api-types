import type { DataResult } from '../../../com/mojang/serialization/DataResult.d.ts'
import type { Decoder } from '../../../com/mojang/serialization/Decoder.d.ts'
import type { DynamicOps } from '../../../com/mojang/serialization/DynamicOps.d.ts'
import type { KeyCompressor } from '../../../com/mojang/serialization/KeyCompressor.d.ts'
import type { Keyable } from '../../../com/mojang/serialization/Keyable.d.ts'
import type { Lifecycle } from '../../../com/mojang/serialization/Lifecycle.d.ts'
import type { MapLike } from '../../../com/mojang/serialization/MapLike.d.ts'
import type { Function } from '../../../java/util/function/Function.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface MapDecoder<A extends Object | number | string | boolean> extends Keyable, Object {
    ap<E extends Object | number | string | boolean>(arg0: MapDecoder<(param0: A) => E>): MapDecoder<E>;
    compressedDecode<T extends Object | number | string | boolean>(arg0: DynamicOps<T>, arg1: T): DataResult<A>;
    compressor<T extends Object | number | string | boolean>(arg0: DynamicOps<T>): KeyCompressor<T>;
    decode<T extends Object | number | string | boolean>(arg0: DynamicOps<T>, arg1: MapLike<T>): DataResult<A>;
    decoder(): Decoder<A>;
    flatMap<B extends Object | number | string | boolean>(arg0: (param0: A) => DataResult<B>): MapDecoder<B>;
    map<B extends Object | number | string | boolean>(arg0: (param0: A) => B): MapDecoder<B>;
    withLifecycle(arg0: Lifecycle): MapDecoder<A>;
}