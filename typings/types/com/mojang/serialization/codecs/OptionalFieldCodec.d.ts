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
export class OptionalFieldCodec<A extends unknown> extends MapCodec<Optional<A>> {
    static assumeMapUnsafe<A extends unknown>(paramarg0: Codec<A>): MapCodec<A>;
    static of<A extends unknown>(paramarg0: MapEncoder<A>, paramarg1: MapDecoder<A>): MapCodec<A>;
    static of<A extends unknown>(paramarg0: MapEncoder<A>, paramarg1: MapDecoder<A>, paramarg2: () => string): MapCodec<A>;
    static recursive<A extends unknown>(paramarg0: string, paramarg1: (param0: Codec<A>) => MapCodec<A>): MapCodec<A>;
    static unit<A extends unknown>(paramarg0: A): MapCodec<A>;
    static unit<A extends unknown>(paramarg0: () => A): MapCodec<A>;
    static unitCodec<A extends unknown>(paramarg0: A): Codec<A>;
    static unitCodec<A extends unknown>(paramarg0: () => A): Codec<A>;
    constructor(arg0: string, arg1: Codec<A>, arg2: boolean)
    // private elementCodec: Codec<A>;
    // private lenient: boolean;
    // private name: string;
    decode<T extends unknown>(arg0: DynamicOps<T>, arg1: MapLike<T>): DataResult<Optional<A>>;
    encode<T extends unknown>(arg0: Optional<A>, arg1: DynamicOps<T>, arg2: RecordBuilder<T>): RecordBuilder<T>;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    keys<T extends unknown>(arg0: DynamicOps<T>): Stream<T>;
    toString(): string;
}