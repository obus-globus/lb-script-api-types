import type { Pair } from '../../../com/mojang/datafixers/util/Pair.d.ts'
import type { DataResult } from '../../../com/mojang/serialization/DataResult.d.ts'
import type { Decoder } from '../../../com/mojang/serialization/Decoder.d.ts'
import type { Dynamic } from '../../../com/mojang/serialization/Dynamic.d.ts'
import type { DynamicLike } from '../../../com/mojang/serialization/DynamicLike.d.ts'
import type { DynamicOps } from '../../../com/mojang/serialization/DynamicOps.d.ts'
import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Optional } from '../../../java/util/Optional.d.ts'
import type { Function } from '../../../java/util/function/Function.d.ts'
import type { IntStream } from '../../../java/util/stream/IntStream.d.ts'
import type { LongStream } from '../../../java/util/stream/LongStream.d.ts'
import type { Stream } from '../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Number } from '../../../java/lang/Number.d.ts'
export class OptionalDynamic<T extends Object | number | string | boolean> extends DynamicLike<T> {
    constructor(arg0: DynamicOps<T>, arg1: DataResult<Dynamic<T>>)
    // private delegate: DataResult<Dynamic<T>>;
    asBoolean(): DataResult<boolean>;
    asBoolean(arg0: boolean): boolean;
    asByteBufferOpt(): DataResult<ByteBuffer>;
    asIntStreamOpt(): DataResult<IntStream>;
    asLongStreamOpt(): DataResult<LongStream>;
    asMapOpt(): DataResult<Stream<Pair<Dynamic<T>, Dynamic<T>>>>;
    asMapOpt(arg0: (param0: Dynamic<T>) => K, arg1: (param0: Dynamic<T>) => V): DataResult<Map<K, V>>;
    asNumber(): DataResult<Number>;
    asNumber(arg0: Number): Number;
    asStreamOpt(): DataResult<Stream<Dynamic<T>>>;
    asString(): DataResult<string>;
    asString(arg0: string): string;
    decode(arg0: Decoder<A>): DataResult<Pair<A, T>>;
    flatMap(arg0: (param0: Dynamic<T>) => DataResult<U>): DataResult<U>;
    get(): DataResult<Dynamic<T>>;
    get(arg0: string): OptionalDynamic<T>;
    getElement(arg0: string): DataResult<T>;
    getElement(arg0: string, arg1: T): T;
    getElementGeneric(arg0: T): DataResult<T>;
    getElementGeneric(arg0: T, arg1: T): T;
    getGeneric(arg0: T): DataResult<T>;
    into(arg0: (param0: Dynamic<T>) => V): DataResult<V>;
    map(arg0: (param0: Dynamic<T>) => U): DataResult<U>;
    orElseEmptyList(): Dynamic<T>;
    orElseEmptyMap(): Dynamic<T>;
    result(): Optional<Dynamic<T>>;
}