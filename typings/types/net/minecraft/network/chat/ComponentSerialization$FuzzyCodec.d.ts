import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { DataResult } from '../../../../com/mojang/serialization/DataResult.d.ts'
import type { DynamicOps } from '../../../../com/mojang/serialization/DynamicOps.d.ts'
import type { MapCodec } from '../../../../com/mojang/serialization/MapCodec.d.ts'
import type { MapDecoder } from '../../../../com/mojang/serialization/MapDecoder.d.ts'
import type { MapEncoder } from '../../../../com/mojang/serialization/MapEncoder.d.ts'
import type { MapLike } from '../../../../com/mojang/serialization/MapLike.d.ts'
import type { RecordBuilder } from '../../../../com/mojang/serialization/RecordBuilder.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Stream } from '../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ComponentSerialization$FuzzyCodec<T extends unknown> extends MapCodec<T> {
    static assumeMapUnsafe(paramarg0: Codec<Object>): MapCodec<Object>;
    static of(paramarg0: MapEncoder<Object>, paramarg1: MapDecoder<Object>): MapCodec<Object>;
    static of(paramarg0: MapEncoder<Object>, paramarg1: MapDecoder<Object>, paramarg2: () => string): MapCodec<Object>;
    static recursive(paramarg0: string, paramarg1: (param0: Codec<Object>) => MapCodec<Object>): MapCodec<Object>;
    static unit(paramarg0: Object | null): MapCodec<Object>;
    static unit(paramarg0: () => Object | null): MapCodec<Object>;
    static unitCodec(paramarg0: Object | null): Codec<Object>;
    static unitCodec(paramarg0: () => Object | null): Codec<Object>;
    constructor(codecs: MapCodec<T>[], encoderGetter: (param0: T) => MapEncoder<T>)
    // private codecs: MapCodec<T>[];
    // private encoderGetter: (param0: T) => MapEncoder<T>;
    decode<S extends unknown>(ops: DynamicOps<S>, input: MapLike<S>): DataResult<T>;
    encode<S extends unknown>(input: T, ops: DynamicOps<S>, prefix: RecordBuilder<S>): RecordBuilder<S>;
    keys<S extends unknown>(ops: DynamicOps<S>): Stream<S>;
    toString(): string;
}