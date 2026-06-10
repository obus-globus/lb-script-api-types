import type { Pair } from '../../../com/mojang/datafixers/util/Pair.d.ts'
import type { Codec } from '../../../com/mojang/serialization/Codec.d.ts'
import type { CompressorHolder } from '../../../com/mojang/serialization/CompressorHolder.d.ts'
import type { DataResult } from '../../../com/mojang/serialization/DataResult.d.ts'
import type { Decoder } from '../../../com/mojang/serialization/Decoder.d.ts'
import type { DynamicOps } from '../../../com/mojang/serialization/DynamicOps.d.ts'
import type { Encoder } from '../../../com/mojang/serialization/Encoder.d.ts'
import type { KeyCompressor } from '../../../com/mojang/serialization/KeyCompressor.d.ts'
import type { Lifecycle } from '../../../com/mojang/serialization/Lifecycle.d.ts'
import type { MapCodec$ResultFunction } from '../../../com/mojang/serialization/MapCodec$ResultFunction.d.ts'
import type { MapDecoder } from '../../../com/mojang/serialization/MapDecoder.d.ts'
import type { MapEncoder } from '../../../com/mojang/serialization/MapEncoder.d.ts'
import type { RecordBuilder } from '../../../com/mojang/serialization/RecordBuilder.d.ts'
import type { RecordCodecBuilder } from '../../../com/mojang/serialization/codecs/RecordCodecBuilder.d.ts'
import type { BiFunction } from '../../../java/util/function/BiFunction.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Function } from '../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../java/util/function/Supplier.d.ts'
import type { UnaryOperator } from '../../../java/util/function/UnaryOperator.d.ts'
import type { Stream } from '../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class MapCodec<A extends Object | number | string | boolean> extends CompressorHolder implements MapDecoder<A>, MapEncoder<A> {
    static assumeMapUnsafe(paramarg0: Codec<Object>): MapCodec<Object>;
    static makeCompressedBuilder(paramarg0: DynamicOps<Object>, paramarg1: KeyCompressor<Object>): RecordBuilder<Object>;
    static of(paramarg0: MapEncoder<Object>, paramarg1: MapDecoder<Object>): MapCodec<Object>;
    static of(paramarg0: MapEncoder<Object>, paramarg1: MapDecoder<Object>, paramarg2: () => string): MapCodec<Object>;
    static recursive(paramarg0: string, paramarg1: (param0: Codec<Object>) => MapCodec<Object>): MapCodec<Object>;
    static unit(paramarg0: Object | null): MapCodec<Object>;
    static unit(paramarg0: () => Object | null): MapCodec<Object>;
    static unitCodec(paramarg0: Object | null): Codec<Object>;
    static unitCodec(paramarg0: () => Object | null): Codec<Object>;
    constructor()
    ap<E extends Object | number | string | boolean>(arg0: MapDecoder<(param0: A) => E>): MapDecoder<E>;
    codec(): Codec<A>;
    comap<B extends Object | number | string | boolean>(arg0: (param0: B) => A): MapEncoder<B>;
    compressedBuilder<T extends Object | number | string | boolean>(arg0: DynamicOps<T>): RecordBuilder<T>;
    compressedDecode<T extends Object | number | string | boolean>(arg0: DynamicOps<T>, arg1: T): DataResult<A>;
    decoder(): Decoder<A>;
    dependent<E extends Object | number | string | boolean>(arg0: MapCodec<E>, arg1: (param0: A) => Pair<E, MapCodec<E>>, arg2: (param0: A, param1: E) => A): MapCodec<A>;
    deprecated(arg0: number): MapCodec<A>;
    dispatch<E extends Object | number | string | boolean>(arg0: (param0: E) => A, arg1: (param0: A) => MapCodec<E>): Codec<E>;
    dispatchMap<E extends Object | number | string | boolean>(arg0: (param0: E) => A, arg1: (param0: A) => MapCodec<E>): MapCodec<E>;
    dispatchStable<E extends Object | number | string | boolean>(arg0: (param0: E) => A, arg1: (param0: A) => MapCodec<E>): Codec<E>;
    encoder(): Encoder<A>;
    fieldOf(arg0: string): MapCodec<A>;
    flatComap<B extends Object | number | string | boolean>(arg0: (param0: B) => DataResult<A>): MapEncoder<B>;
    flatMap<B extends Object | number | string | boolean>(arg0: (param0: A) => DataResult<B>): MapDecoder<B>;
    flatXmap<S extends Object | number | string | boolean>(arg0: (param0: A) => DataResult<S>, arg1: (param0: S) => DataResult<A>): MapCodec<S>;
    forGetter<O extends Object | number | string | boolean>(arg0: (param0: O) => A): RecordCodecBuilder<O, A>;
    keys<T extends Object | number | string | boolean>(arg0: DynamicOps<T>): Stream<T>;
    map<B extends Object | number | string | boolean>(arg0: (param0: A) => B): MapDecoder<B>;
    mapResult(arg0: MapCodec$ResultFunction<A>): MapCodec<A>;
    orElse(arg0: A): MapCodec<A>;
    orElse(arg0: (param0: string) => void, arg1: A): MapCodec<A>;
    orElse(arg0: (param0: string) => Object | null, arg1: A): MapCodec<A>;
    orElseGet(arg0: (param0: string) => void, arg1: () => A): MapCodec<A>;
    orElseGet(arg0: () => A): MapCodec<A>;
    orElseGet(arg0: (param0: string) => Object | null, arg1: () => A): MapCodec<A>;
    partialDispatch<E extends Object | number | string | boolean>(arg0: (param0: E) => DataResult<A>, arg1: (param0: A) => DataResult<MapCodec<E>>): Codec<E>;
    setPartial(arg0: () => A): MapCodec<A>;
    stable(): MapCodec<A>;
    validate(arg0: (param0: A) => DataResult<A>): MapCodec<A>;
    withLifecycle(arg0: Lifecycle): MapCodec<A>;
    withLifecycle(arg0: Lifecycle): MapDecoder<A>;
    withLifecycle(arg0: Lifecycle): MapEncoder<A>;
    xmap<S extends Object | number | string | boolean>(arg0: (param0: A) => S, arg1: (param0: S) => A): MapCodec<S>;
}