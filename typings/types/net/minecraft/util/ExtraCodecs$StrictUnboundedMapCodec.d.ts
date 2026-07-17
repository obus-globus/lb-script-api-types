import type { JavaMap } from '../../../JavaMap.d.ts'
import type { Pair } from '../../../com/mojang/datafixers/util/Pair.d.ts'
import type { Unit } from '../../../com/mojang/datafixers/util/Unit.d.ts'
import type { Codec } from '../../../com/mojang/serialization/Codec.d.ts'
import type { Codec$ResultFunction } from '../../../com/mojang/serialization/Codec$ResultFunction.d.ts'
import type { DataResult } from '../../../com/mojang/serialization/DataResult.d.ts'
import type { Dynamic } from '../../../com/mojang/serialization/Dynamic.d.ts'
import type { DynamicOps } from '../../../com/mojang/serialization/DynamicOps.d.ts'
import type { Lifecycle } from '../../../com/mojang/serialization/Lifecycle.d.ts'
import type { MapCodec } from '../../../com/mojang/serialization/MapCodec.d.ts'
import type { MapLike } from '../../../com/mojang/serialization/MapLike.d.ts'
import type { RecordBuilder } from '../../../com/mojang/serialization/RecordBuilder.d.ts'
import type { BaseMapCodec } from '../../../com/mojang/serialization/codecs/BaseMapCodec.d.ts'
import type { PrimitiveCodec } from '../../../com/mojang/serialization/codecs/PrimitiveCodec.d.ts'
import type { Record } from '../../../java/lang/Record.d.ts'
import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Optional } from '../../../java/util/Optional.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Function } from '../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../java/util/function/Supplier.d.ts'
import type { UnaryOperator } from '../../../java/util/function/UnaryOperator.d.ts'
import type { IntStream } from '../../../java/util/stream/IntStream.d.ts'
import type { LongStream } from '../../../java/util/stream/LongStream.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ExtraCodecs$StrictUnboundedMapCodec<K extends unknown, V extends unknown> extends Record implements Codec<JavaMap<K, V>>, BaseMapCodec<K, V> {
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
    constructor(keyCodec: Codec<K>, elementCodec: Codec<V>)
    // private elementCodec: Codec<V>;
    // private keyCodec: Codec<K>;
    comapFlatMap<S extends unknown>(arg0: (param0: JavaMap<K, V>) => DataResult<S>, arg1: (param0: S) => JavaMap<K, V>): Codec<S>;
    decode<T extends unknown>(arg0: DynamicOps<T>, arg1: MapLike<T>): DataResult<JavaMap<K, V>>;
    decode<T extends unknown>(arg0: Dynamic<T>): DataResult<Pair<JavaMap<K, V>, T>>;
    decode<T extends unknown>(ops: DynamicOps<T>, input: T): DataResult<Pair<JavaMap<K, V>, T>>;
    decode<T extends unknown>(ops: DynamicOps<T>, input: MapLike<T>): DataResult<JavaMap<K, V>>;
    deprecated(arg0: number): Codec<JavaMap<K, V>>;
    dispatch<E extends unknown>(arg0: (param0: E) => JavaMap<K, V>, arg1: (param0: JavaMap<K, V>) => MapCodec<E>): Codec<E>;
    dispatch<E extends unknown>(arg0: string, arg1: (param0: E) => JavaMap<K, V>, arg2: (param0: JavaMap<K, V>) => MapCodec<E>): Codec<E>;
    dispatchMap<E extends unknown>(arg0: (param0: E) => JavaMap<K, V>, arg1: (param0: JavaMap<K, V>) => MapCodec<E>): MapCodec<E>;
    dispatchMap<E extends unknown>(arg0: string, arg1: (param0: E) => JavaMap<K, V>, arg2: (param0: JavaMap<K, V>) => MapCodec<E>): MapCodec<E>;
    dispatchStable<E extends unknown>(arg0: (param0: E) => JavaMap<K, V>, arg1: (param0: JavaMap<K, V>) => MapCodec<E>): Codec<E>;
    elementCodec(): Codec<V>;
    encode<T extends unknown>(arg0: JavaMap<K, V>, arg1: DynamicOps<T>, arg2: RecordBuilder<T>): RecordBuilder<T>;
    encode<T extends unknown>(input: JavaMap<K, V>, ops: DynamicOps<T>, prefix: T): DataResult<T>;
    equals(o: Object | null): boolean;
    fieldOf(arg0: string): MapCodec<JavaMap<K, V>>;
    flatComapMap<S extends unknown>(arg0: (param0: JavaMap<K, V>) => S, arg1: (param0: S) => DataResult<JavaMap<K, V>>): Codec<S>;
    flatXmap<S extends unknown>(arg0: (param0: JavaMap<K, V>) => DataResult<S>, arg1: (param0: S) => DataResult<JavaMap<K, V>>): Codec<S>;
    hashCode(): number;
    keyCodec(): Codec<K>;
    lenientOptionalFieldOf(arg0: string): MapCodec<Optional<JavaMap<K, V>>>;
    lenientOptionalFieldOf(arg0: string, arg1: JavaMap<K, V>): MapCodec<JavaMap<K, V>>;
    lenientOptionalFieldOf(arg0: string, arg1: JavaMap<K, V>, arg2: Lifecycle): MapCodec<JavaMap<K, V>>;
    lenientOptionalFieldOf(arg0: string, arg1: Lifecycle, arg2: JavaMap<K, V>, arg3: Lifecycle): MapCodec<JavaMap<K, V>>;
    listOf(): Codec<JavaMap<K, V>[]>;
    listOf(arg0: number, arg1: number): Codec<JavaMap<K, V>[]>;
    mapResult(arg0: Codec$ResultFunction<JavaMap<K, V>>): Codec<JavaMap<K, V>>;
    optionalFieldOf(arg0: string): MapCodec<Optional<JavaMap<K, V>>>;
    optionalFieldOf(arg0: string, arg1: JavaMap<K, V>): MapCodec<JavaMap<K, V>>;
    optionalFieldOf(arg0: string, arg1: JavaMap<K, V>, arg2: Lifecycle): MapCodec<JavaMap<K, V>>;
    // private optionalFieldOf(arg0: string, arg1: JavaMap<K, V>, arg2: boolean): MapCodec<JavaMap<K, V>>;
    optionalFieldOf(arg0: string, arg1: Lifecycle, arg2: JavaMap<K, V>, arg3: Lifecycle): MapCodec<JavaMap<K, V>>;
    // private optionalFieldOf(arg0: string, arg1: Lifecycle, arg2: JavaMap<K, V>, arg3: Lifecycle, arg4: boolean): MapCodec<JavaMap<K, V>>;
    orElse(arg0: JavaMap<K, V>): Codec<JavaMap<K, V>>;
    orElse(arg0: (param0: string) => void, arg1: JavaMap<K, V>): Codec<JavaMap<K, V>>;
    orElse(arg0: (param0: string) => string, arg1: JavaMap<K, V>): Codec<JavaMap<K, V>>;
    orElseGet(arg0: (param0: string) => void, arg1: () => JavaMap<K, V>): Codec<JavaMap<K, V>>;
    orElseGet(arg0: () => JavaMap<K, V>): Codec<JavaMap<K, V>>;
    orElseGet(arg0: (param0: string) => string, arg1: () => JavaMap<K, V>): Codec<JavaMap<K, V>>;
    partialDispatch<E extends unknown>(arg0: string, arg1: (param0: E) => DataResult<JavaMap<K, V>>, arg2: (param0: JavaMap<K, V>) => DataResult<MapCodec<E>>): Codec<E>;
    promotePartial(arg0: (param0: string) => void): Codec<JavaMap<K, V>>;
    sizeLimitedListOf(arg0: number): Codec<JavaMap<K, V>[]>;
    stable(): Codec<JavaMap<K, V>>;
    toString(): string;
    validate(arg0: (param0: JavaMap<K, V>) => DataResult<JavaMap<K, V>>): Codec<JavaMap<K, V>>;
    withAlternative<U extends unknown>(arg0: Codec<U>, arg1: (param0: U) => JavaMap<K, V>): Codec<JavaMap<K, V>>;
    withAlternative(arg0: Codec<JavaMap<K, V>>): Codec<JavaMap<K, V>>;
    withLifecycle(arg0: Lifecycle): Codec<JavaMap<K, V>>;
    xmap<S extends unknown>(arg0: (param0: JavaMap<K, V>) => S, arg1: (param0: S) => JavaMap<K, V>): Codec<S>;
}