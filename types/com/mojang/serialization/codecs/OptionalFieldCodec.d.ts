import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { DataResult } from '../../../../com/mojang/serialization/DataResult.d.ts'
import type { DynamicOps } from '../../../../com/mojang/serialization/DynamicOps.d.ts'
import type { MapCodec } from '../../../../com/mojang/serialization/MapCodec.d.ts'
import type { MapDecoder } from '../../../../com/mojang/serialization/MapDecoder.d.ts'
import type { MapEncoder } from '../../../../com/mojang/serialization/MapEncoder.d.ts'
import type { MapLike } from '../../../../com/mojang/serialization/MapLike.d.ts'
import type { RecordBuilder } from '../../../../com/mojang/serialization/RecordBuilder.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Stream } from '../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class OptionalFieldCodec<A extends Object | number | string | boolean> extends MapCodec<Optional<A>> {
    static assumeMapUnsafe(paramarg0: Codec<Object>): MapCodec<Object>;
    static of(paramarg0: MapEncoder<Object>, paramarg1: MapDecoder<Object>): MapCodec<Object>;
    static of(paramarg0: MapEncoder<Object>, paramarg1: MapDecoder<Object>, paramarg2: () => string): MapCodec<Object>;
    static recursive(paramarg0: string, paramarg1: (param0: Object | null) => Object | null): MapCodec<Object>;
    static unit(paramarg0: Object | null): MapCodec<Object>;
    static unit(paramarg0: () => Object | null): MapCodec<Object>;
    static unitCodec(paramarg0: Object | null): Codec<Object>;
    static unitCodec(paramarg0: () => Object | null): Codec<Object>;
    constructor(arg0: string, arg1: Codec<A>, arg2: boolean)
    // private elementCodec: Codec<A>;
    // private lenient: boolean;
    // private name: string;
    decode(arg0: DynamicOps<T>, arg1: MapLike<T>): DataResult<Optional<A>>;
    encode(arg0: Optional<A>, arg1: DynamicOps<T>, arg2: RecordBuilder<T>): RecordBuilder<T>;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    keys(arg0: DynamicOps<T>): Stream<T>;
    toString(): string;
}