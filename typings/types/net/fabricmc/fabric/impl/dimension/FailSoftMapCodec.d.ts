import type { Either } from '../../../../../com/mojang/datafixers/util/Either.d.ts'
import type { Pair } from '../../../../../com/mojang/datafixers/util/Pair.d.ts'
import type { Unit } from '../../../../../com/mojang/datafixers/util/Unit.d.ts'
import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Codec$ResultFunction } from '../../../../../com/mojang/serialization/Codec$ResultFunction.d.ts'
import type { DataResult } from '../../../../../com/mojang/serialization/DataResult.d.ts'
import type { Decoder } from '../../../../../com/mojang/serialization/Decoder.d.ts'
import type { Dynamic } from '../../../../../com/mojang/serialization/Dynamic.d.ts'
import type { DynamicOps } from '../../../../../com/mojang/serialization/DynamicOps.d.ts'
import type { Encoder } from '../../../../../com/mojang/serialization/Encoder.d.ts'
import type { Keyable } from '../../../../../com/mojang/serialization/Keyable.d.ts'
import type { Lifecycle } from '../../../../../com/mojang/serialization/Lifecycle.d.ts'
import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { MapDecoder } from '../../../../../com/mojang/serialization/MapDecoder.d.ts'
import type { MapEncoder } from '../../../../../com/mojang/serialization/MapEncoder.d.ts'
import type { MapLike } from '../../../../../com/mojang/serialization/MapLike.d.ts'
import type { RecordBuilder } from '../../../../../com/mojang/serialization/RecordBuilder.d.ts'
import type { BaseMapCodec } from '../../../../../com/mojang/serialization/codecs/BaseMapCodec.d.ts'
import type { PrimitiveCodec } from '../../../../../com/mojang/serialization/codecs/PrimitiveCodec.d.ts'
import type { SimpleMapCodec } from '../../../../../com/mojang/serialization/codecs/SimpleMapCodec.d.ts'
import type { UnboundedMapCodec } from '../../../../../com/mojang/serialization/codecs/UnboundedMapCodec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { ByteBuffer } from '../../../../../java/nio/ByteBuffer.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { UnaryOperator } from '../../../../../java/util/function/UnaryOperator.d.ts'
import type { IntStream } from '../../../../../java/util/stream/IntStream.d.ts'
import type { LongStream } from '../../../../../java/util/stream/LongStream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Number } from '../../../../../java/lang/Number.d.ts'
export class FailSoftMapCodec<K extends unknown, V extends unknown> extends Record implements Codec<Map<K, V>>, BaseMapCodec<K, V> {
    static BOOL: PrimitiveCodec<boolean>;
    static BYTE: PrimitiveCodec<number>;
    static BYTE_BUFFER: PrimitiveCodec<ByteBuffer>;
    static DOUBLE: PrimitiveCodec<number>;
    static EMPTY: MapCodec<Unit>;
    static FLOAT: PrimitiveCodec<number>;
    static INT: PrimitiveCodec<number>;
    static INT_STREAM: PrimitiveCodec<IntStream>;
    static LONG: PrimitiveCodec<number>;
    static LONG_STREAM: PrimitiveCodec<LongStream>;
    static PASSTHROUGH: Codec<Dynamic<Object>>;
    static SHORT: PrimitiveCodec<number>;
    static STRING: PrimitiveCodec<string>;
    static checkRange(paramarg0: Number | null, paramarg1: Number | null): (param0: Number | null) => DataResult<Number>;
    static compoundList(paramarg0: Codec<Object>, paramarg1: Codec<Object>): Codec<Pair<Object, Object>[]>;
    static dispatchedMap(paramarg0: Codec<Object>, paramarg1: (param0: Object | null) => Codec<Object>): Codec<Map<Object | null, Object | null>>;
    static doubleRange(paramarg0: number, paramarg1: number): Codec<number>;
    static either(paramarg0: Codec<Object>, paramarg1: Codec<Object>): Codec<Either<Object, Object>>;
    static floatRange(paramarg0: number, paramarg1: number): Codec<number>;
    static intRange(paramarg0: number, paramarg1: number): Codec<number>;
    static lazyInitialized(paramarg0: () => Codec<Object>): Codec<Object>;
    static list(paramarg0: Codec<Object>): Codec<(Object | null)[]>;
    static list(paramarg0: Codec<Object>, paramarg1: number, paramarg2: number): Codec<(Object | null)[]>;
    static mapEither(paramarg0: MapCodec<Object>, paramarg1: MapCodec<Object>): MapCodec<Either<Object, Object>>;
    static mapPair(paramarg0: MapCodec<Object>, paramarg1: MapCodec<Object>): MapCodec<Pair<Object, Object>>;
    static of(paramarg0: Encoder<Object>, paramarg1: Decoder<Object>): Codec<Object>;
    static of(paramarg0: Encoder<Object>, paramarg1: Decoder<Object>, paramarg2: string): Codec<Object>;
    static of(paramarg0: MapEncoder<Object>, paramarg1: MapDecoder<Object>): MapCodec<Object>;
    static of(paramarg0: MapEncoder<Object>, paramarg1: MapDecoder<Object>, paramarg2: () => string): MapCodec<Object>;
    static optionalField(paramarg0: string, paramarg1: Codec<Object>, paramarg2: boolean): MapCodec<Optional<Object>>;
    static pair(paramarg0: Codec<Object>, paramarg1: Codec<Object>): Codec<Pair<Object, Object>>;
    static recursive(paramarg0: string, paramarg1: (param0: Codec<Object>) => Codec<Object>): Codec<Object>;
    static simpleMap(paramarg0: Codec<Object>, paramarg1: Codec<Object>, paramarg2: Keyable): SimpleMapCodec<Object, Object>;
    static sizeLimitedString(paramarg0: number): Codec<string>;
    static string(paramarg0: number, paramarg1: number): Codec<string>;
    static stringResolver(paramarg0: (param0: Object | null) => string, paramarg1: (param0: string) => Object | null): Codec<Object>;
    static unboundedMap(paramarg0: Codec<Object>, paramarg1: Codec<Object>): UnboundedMapCodec<Object, Object>;
    static withAlternative(paramarg0: Codec<Object>, paramarg1: Codec<Object>, paramarg2: (param0: Object | null) => Object | null): Codec<Object>;
    static withAlternative(paramarg0: Codec<Object>, paramarg1: Codec<Object>): Codec<Object>;
    static xor(paramarg0: Codec<Object>, paramarg1: Codec<Object>): Codec<Either<Object, Object>>;
    constructor(keyCodec: Codec<K>, elementCodec: Codec<V>)
    // private elementCodec: Codec<V>;
    // private keyCodec: Codec<K>;
    comapFlatMap<S extends unknown>(arg0: (param0: Map<K, V>) => DataResult<S>, arg1: (param0: S) => Map<K, V>): Codec<S>;
    decode<T extends unknown>(arg0: DynamicOps<T>, arg1: MapLike<T>): DataResult<Map<K, V>>;
    decode<T extends unknown>(arg0: Dynamic<T>): DataResult<Pair<Map<K, V>, T>>;
    decode<T extends unknown>(arg0: DynamicOps<T>, arg1: T): DataResult<Pair<Map<K, V>, T>>;
    deprecated(arg0: number): Codec<Map<K, V>>;
    dispatch<E extends unknown>(arg0: (param0: E) => Map<K, V>, arg1: (param0: Map<K, V>) => MapCodec<E>): Codec<E>;
    dispatch<E extends unknown>(arg0: string, arg1: (param0: E) => Map<K, V>, arg2: (param0: Map<K, V>) => MapCodec<E>): Codec<E>;
    dispatchMap<E extends unknown>(arg0: (param0: E) => Map<K, V>, arg1: (param0: Map<K, V>) => MapCodec<E>): MapCodec<E>;
    dispatchMap<E extends unknown>(arg0: string, arg1: (param0: E) => Map<K, V>, arg2: (param0: Map<K, V>) => MapCodec<E>): MapCodec<E>;
    dispatchStable<E extends unknown>(arg0: (param0: E) => Map<K, V>, arg1: (param0: Map<K, V>) => MapCodec<E>): Codec<E>;
    elementCodec(): Codec<V>;
    encode<T extends unknown>(arg0: Map<K, V>, arg1: DynamicOps<T>, arg2: RecordBuilder<T>): RecordBuilder<T>;
    encode<T extends unknown>(arg0: Map<K, V>, arg1: DynamicOps<T>, arg2: T): DataResult<T>;
    equals(arg0: Object | null): boolean;
    fieldOf(arg0: string): MapCodec<Map<K, V>>;
    flatComapMap<S extends unknown>(arg0: (param0: Map<K, V>) => S, arg1: (param0: S) => DataResult<Map<K, V>>): Codec<S>;
    flatXmap<S extends unknown>(arg0: (param0: Map<K, V>) => DataResult<S>, arg1: (param0: S) => DataResult<Map<K, V>>): Codec<S>;
    hashCode(): number;
    keyCodec(): Codec<K>;
    lenientOptionalFieldOf(arg0: string): MapCodec<Optional<Map<K, V>>>;
    lenientOptionalFieldOf(arg0: string, arg1: Map<K, V>): MapCodec<Map<K, V>>;
    lenientOptionalFieldOf(arg0: string, arg1: Map<K, V>, arg2: Lifecycle): MapCodec<Map<K, V>>;
    lenientOptionalFieldOf(arg0: string, arg1: Lifecycle, arg2: Map<K, V>, arg3: Lifecycle): MapCodec<Map<K, V>>;
    listOf(): Codec<Map<K, V>[]>;
    listOf(arg0: number, arg1: number): Codec<Map<K, V>[]>;
    mapResult(arg0: Codec$ResultFunction<Map<K, V>>): Codec<Map<K, V>>;
    optionalFieldOf(arg0: string): MapCodec<Optional<Map<K, V>>>;
    optionalFieldOf(arg0: string, arg1: Map<K, V>): MapCodec<Map<K, V>>;
    optionalFieldOf(arg0: string, arg1: Map<K, V>, arg2: Lifecycle): MapCodec<Map<K, V>>;
    // private optionalFieldOf(arg0: string, arg1: Map<K, V>, arg2: boolean): MapCodec<Map<K, V>>;
    optionalFieldOf(arg0: string, arg1: Lifecycle, arg2: Map<K, V>, arg3: Lifecycle): MapCodec<Map<K, V>>;
    // private optionalFieldOf(arg0: string, arg1: Lifecycle, arg2: Map<K, V>, arg3: Lifecycle, arg4: boolean): MapCodec<Map<K, V>>;
    orElse(arg0: Map<K, V>): Codec<Map<K, V>>;
    orElse(arg0: (param0: string) => void, arg1: Map<K, V>): Codec<Map<K, V>>;
    orElse(arg0: (param0: string) => Object | null, arg1: Map<K, V>): Codec<Map<K, V>>;
    orElseGet(arg0: (param0: string) => void, arg1: () => Map<K, V>): Codec<Map<K, V>>;
    orElseGet(arg0: () => Map<K, V>): Codec<Map<K, V>>;
    orElseGet(arg0: (param0: string) => Object | null, arg1: () => Map<K, V>): Codec<Map<K, V>>;
    partialDispatch<E extends unknown>(arg0: string, arg1: (param0: E) => DataResult<Map<K, V>>, arg2: (param0: Map<K, V>) => DataResult<MapCodec<E>>): Codec<E>;
    promotePartial(arg0: (param0: string) => void): Codec<Map<K, V>>;
    sizeLimitedListOf(arg0: number): Codec<Map<K, V>[]>;
    stable(): Codec<Map<K, V>>;
    toString(): string;
    validate(arg0: (param0: Map<K, V>) => DataResult<Map<K, V>>): Codec<Map<K, V>>;
    withAlternative<U extends unknown>(arg0: Codec<U>, arg1: (param0: U) => Map<K, V>): Codec<Map<K, V>>;
    withAlternative(arg0: Codec<Map<K, V>>): Codec<Map<K, V>>;
    withLifecycle(arg0: Lifecycle): Codec<Map<K, V>>;
    xmap<S extends unknown>(arg0: (param0: Map<K, V>) => S, arg1: (param0: S) => Map<K, V>): Codec<S>;
}