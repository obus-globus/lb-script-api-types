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
export class ComponentSerialization$StrictEither<T extends unknown> extends MapCodec<T> {
    static assumeMapUnsafe<A extends unknown>(paramarg0: Codec<A>): MapCodec<A>;
    static of<A extends unknown>(paramarg0: MapEncoder<A>, paramarg1: MapDecoder<A>): MapCodec<A>;
    static of<A extends unknown>(paramarg0: MapEncoder<A>, paramarg1: MapDecoder<A>, paramarg2: () => string): MapCodec<A>;
    static recursive<A extends unknown>(paramarg0: string, paramarg1: (param0: Codec<A>) => MapCodec<A>): MapCodec<A>;
    static unit<A extends unknown>(paramarg0: A): MapCodec<A>;
    static unit<A extends unknown>(paramarg0: () => A): MapCodec<A>;
    static unitCodec<A extends unknown>(paramarg0: A): Codec<A>;
    static unitCodec<A extends unknown>(paramarg0: () => A): Codec<A>;
    constructor(typeFieldName: string, typed: MapCodec<T>, fuzzy: MapCodec<T>)
    // private fuzzy: MapCodec<T>;
    // private typeFieldName: string;
    // private typed: MapCodec<T>;
    decode<O extends unknown>(ops: DynamicOps<O>, input: MapLike<O>): DataResult<T>;
    encode<O extends unknown>(input: T, ops: DynamicOps<O>, prefix: RecordBuilder<O>): RecordBuilder<O>;
    keys<T1 extends unknown>(ops: DynamicOps<T1>): Stream<T1>;
}