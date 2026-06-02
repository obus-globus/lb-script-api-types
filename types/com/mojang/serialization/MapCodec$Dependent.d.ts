import type { Pair } from '../../../com/mojang/datafixers/util/Pair.d.ts'
import type { Codec } from '../../../com/mojang/serialization/Codec.d.ts'
import type { DataResult } from '../../../com/mojang/serialization/DataResult.d.ts'
import type { DynamicOps } from '../../../com/mojang/serialization/DynamicOps.d.ts'
import type { MapCodec } from '../../../com/mojang/serialization/MapCodec.d.ts'
import type { MapDecoder } from '../../../com/mojang/serialization/MapDecoder.d.ts'
import type { MapEncoder } from '../../../com/mojang/serialization/MapEncoder.d.ts'
import type { MapLike } from '../../../com/mojang/serialization/MapLike.d.ts'
import type { RecordBuilder } from '../../../com/mojang/serialization/RecordBuilder.d.ts'
import type { BiFunction } from '../../../java/util/function/BiFunction.d.ts'
import type { Function } from '../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../java/util/function/Supplier.d.ts'
import type { Stream } from '../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class MapCodec$Dependent<O extends Object | number | string | boolean, E extends Object | number | string | boolean> extends MapCodec<O> {
    static assumeMapUnsafe(paramarg0: Codec<Object>): MapCodec<Object>;
    static of(paramarg0: MapEncoder<Object>, paramarg1: MapDecoder<Object>): MapCodec<Object>;
    static of(paramarg0: MapEncoder<Object>, paramarg1: MapDecoder<Object>, paramarg2: () => string): MapCodec<Object>;
    static recursive(paramarg0: string, paramarg1: (param0: Object | null) => Object | null): MapCodec<Object>;
    static unit(paramarg0: Object | null): MapCodec<Object>;
    static unit(paramarg0: () => Object | null): MapCodec<Object>;
    static unitCodec(paramarg0: Object | null): Codec<Object>;
    static unitCodec(paramarg0: () => Object | null): Codec<Object>;
    constructor(arg0: MapCodec<O>, arg1: MapCodec<E>, arg2: (param0: O) => Pair<E, MapCodec<E>>, arg3: (param0: O, param1: E) => O)
    // private codec: MapCodec<O>;
    // private combiner: (param0: O, param1: E) => O;
    // private initialInstance: MapCodec<E>;
    // private splitter: (param0: O) => Pair<E, MapCodec<E>>;
    decode(arg0: DynamicOps<T>, arg1: MapLike<T>): DataResult<O>;
    encode(arg0: O, arg1: DynamicOps<T>, arg2: RecordBuilder<T>): RecordBuilder<T>;
    keys(arg0: DynamicOps<T>): Stream<T>;
}