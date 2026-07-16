import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { DataResult } from '../../../../com/mojang/serialization/DataResult.d.ts'
import type { DynamicOps } from '../../../../com/mojang/serialization/DynamicOps.d.ts'
import type { Keyable } from '../../../../com/mojang/serialization/Keyable.d.ts'
import type { MapCodec } from '../../../../com/mojang/serialization/MapCodec.d.ts'
import type { MapDecoder } from '../../../../com/mojang/serialization/MapDecoder.d.ts'
import type { MapEncoder } from '../../../../com/mojang/serialization/MapEncoder.d.ts'
import type { MapLike } from '../../../../com/mojang/serialization/MapLike.d.ts'
import type { RecordBuilder } from '../../../../com/mojang/serialization/RecordBuilder.d.ts'
import type { BaseMapCodec } from '../../../../com/mojang/serialization/codecs/BaseMapCodec.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Stream } from '../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class SimpleMapCodec<K extends unknown, V extends unknown> extends MapCodec<Map<K, V>> implements BaseMapCodec<K, V> {
    static assumeMapUnsafe<A extends unknown>(paramarg0: Codec<A>): MapCodec<A>;
    static of<A extends unknown>(paramarg0: MapEncoder<A>, paramarg1: MapDecoder<A>): MapCodec<A>;
    static of<A extends unknown>(paramarg0: MapEncoder<A>, paramarg1: MapDecoder<A>, paramarg2: () => string): MapCodec<A>;
    static recursive<A extends unknown>(paramarg0: string, paramarg1: (param0: Codec<A>) => MapCodec<A>): MapCodec<A>;
    static unit<A extends unknown>(paramarg0: A): MapCodec<A>;
    static unit<A extends unknown>(paramarg0: () => A): MapCodec<A>;
    static unitCodec<A extends unknown>(paramarg0: A): Codec<A>;
    static unitCodec<A extends unknown>(paramarg0: () => A): Codec<A>;
    constructor(arg0: Codec<K>, arg1: Codec<V>, arg2: Keyable)
    // private elementCodec: Codec<V>;
    // private keyCodec: Codec<K>;
    // private keys: Keyable;
    decode<T extends unknown>(arg0: DynamicOps<T>, arg1: MapLike<T>): DataResult<Map<K, V>>;
    elementCodec(): Codec<V>;
    encode<T extends unknown>(arg0: Map<K, V>, arg1: DynamicOps<T>, arg2: RecordBuilder<T>): RecordBuilder<T>;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    keyCodec(): Codec<K>;
    keys<T extends unknown>(arg0: DynamicOps<T>): Stream<T>;
    toString(): string;
}