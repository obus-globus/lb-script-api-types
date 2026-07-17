import type { Pair } from '../../../../com/mojang/datafixers/util/Pair.d.ts'
import type { Unit } from '../../../../com/mojang/datafixers/util/Unit.d.ts'
import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Codec$ResultFunction } from '../../../../com/mojang/serialization/Codec$ResultFunction.d.ts'
import type { DataResult } from '../../../../com/mojang/serialization/DataResult.d.ts'
import type { Dynamic } from '../../../../com/mojang/serialization/Dynamic.d.ts'
import type { DynamicOps } from '../../../../com/mojang/serialization/DynamicOps.d.ts'
import type { Lifecycle } from '../../../../com/mojang/serialization/Lifecycle.d.ts'
import type { MapCodec } from '../../../../com/mojang/serialization/MapCodec.d.ts'
import type { PrimitiveCodec } from '../../../../com/mojang/serialization/codecs/PrimitiveCodec.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { UnaryOperator } from '../../../../java/util/function/UnaryOperator.d.ts'
import type { IntStream } from '../../../../java/util/stream/IntStream.d.ts'
import type { LongStream } from '../../../../java/util/stream/LongStream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class CompoundListCodec<K extends unknown, V extends unknown> extends Object implements Codec<Pair<K, V>[]> {
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
    constructor(arg0: Codec<K>, arg1: Codec<V>)
    // private elementCodec: Codec<V>;
    // private keyCodec: Codec<K>;
    comapFlatMap<S extends unknown>(arg0: (param0: Pair<K, V>[]) => DataResult<S>, arg1: (param0: S) => Pair<K, V>[]): Codec<S>;
    decode<T extends unknown>(arg0: Dynamic<T>): DataResult<Pair<Pair<K, V>[], T>>;
    decode<T extends unknown>(arg0: DynamicOps<T>, arg1: T): DataResult<Pair<Pair<K, V>[], T>>;
    deprecated(arg0: number): Codec<Pair<K, V>[]>;
    dispatch<E extends unknown>(arg0: (param0: E) => Pair<K, V>[], arg1: (param0: Pair<K, V>[]) => MapCodec<E>): Codec<E>;
    dispatch<E extends unknown>(arg0: string, arg1: (param0: E) => Pair<K, V>[], arg2: (param0: Pair<K, V>[]) => MapCodec<E>): Codec<E>;
    dispatchMap<E extends unknown>(arg0: (param0: E) => Pair<K, V>[], arg1: (param0: Pair<K, V>[]) => MapCodec<E>): MapCodec<E>;
    dispatchMap<E extends unknown>(arg0: string, arg1: (param0: E) => Pair<K, V>[], arg2: (param0: Pair<K, V>[]) => MapCodec<E>): MapCodec<E>;
    dispatchStable<E extends unknown>(arg0: (param0: E) => Pair<K, V>[], arg1: (param0: Pair<K, V>[]) => MapCodec<E>): Codec<E>;
    encode<T extends unknown>(arg0: Pair<K, V>[], arg1: DynamicOps<T>, arg2: T): DataResult<T>;
    equals(arg0: Object | null): boolean;
    fieldOf(arg0: string): MapCodec<Pair<K, V>[]>;
    flatComapMap<S extends unknown>(arg0: (param0: Pair<K, V>[]) => S, arg1: (param0: S) => DataResult<Pair<K, V>[]>): Codec<S>;
    flatXmap<S extends unknown>(arg0: (param0: Pair<K, V>[]) => DataResult<S>, arg1: (param0: S) => DataResult<Pair<K, V>[]>): Codec<S>;
    hashCode(): number;
    lenientOptionalFieldOf(arg0: string): MapCodec<Optional<Pair<K, V>[]>>;
    lenientOptionalFieldOf(arg0: string, arg1: Pair<K, V>[]): MapCodec<Pair<K, V>[]>;
    lenientOptionalFieldOf(arg0: string, arg1: Pair<K, V>[], arg2: Lifecycle): MapCodec<Pair<K, V>[]>;
    lenientOptionalFieldOf(arg0: string, arg1: Lifecycle, arg2: Pair<K, V>[], arg3: Lifecycle): MapCodec<Pair<K, V>[]>;
    listOf(): Codec<Pair<K, V>[][]>;
    listOf(arg0: number, arg1: number): Codec<Pair<K, V>[][]>;
    mapResult(arg0: Codec$ResultFunction<Pair<K, V>[]>): Codec<Pair<K, V>[]>;
    optionalFieldOf(arg0: string): MapCodec<Optional<Pair<K, V>[]>>;
    optionalFieldOf(arg0: string, arg1: Pair<K, V>[]): MapCodec<Pair<K, V>[]>;
    optionalFieldOf(arg0: string, arg1: Pair<K, V>[], arg2: Lifecycle): MapCodec<Pair<K, V>[]>;
    // private optionalFieldOf(arg0: string, arg1: Pair<K, V>[], arg2: boolean): MapCodec<Pair<K, V>[]>;
    optionalFieldOf(arg0: string, arg1: Lifecycle, arg2: Pair<K, V>[], arg3: Lifecycle): MapCodec<Pair<K, V>[]>;
    // private optionalFieldOf(arg0: string, arg1: Lifecycle, arg2: Pair<K, V>[], arg3: Lifecycle, arg4: boolean): MapCodec<Pair<K, V>[]>;
    orElse(arg0: Pair<K, V>[]): Codec<Pair<K, V>[]>;
    orElse(arg0: (param0: string) => void, arg1: Pair<K, V>[]): Codec<Pair<K, V>[]>;
    orElse(arg0: (param0: string) => string, arg1: Pair<K, V>[]): Codec<Pair<K, V>[]>;
    orElseGet(arg0: (param0: string) => void, arg1: () => Pair<K, V>[]): Codec<Pair<K, V>[]>;
    orElseGet(arg0: () => Pair<K, V>[]): Codec<Pair<K, V>[]>;
    orElseGet(arg0: (param0: string) => string, arg1: () => Pair<K, V>[]): Codec<Pair<K, V>[]>;
    partialDispatch<E extends unknown>(arg0: string, arg1: (param0: E) => DataResult<Pair<K, V>[]>, arg2: (param0: Pair<K, V>[]) => DataResult<MapCodec<E>>): Codec<E>;
    promotePartial(arg0: (param0: string) => void): Codec<Pair<K, V>[]>;
    sizeLimitedListOf(arg0: number): Codec<Pair<K, V>[][]>;
    stable(): Codec<Pair<K, V>[]>;
    toString(): string;
    validate(arg0: (param0: Pair<K, V>[]) => DataResult<Pair<K, V>[]>): Codec<Pair<K, V>[]>;
    withAlternative<U extends unknown>(arg0: Codec<U>, arg1: (param0: U) => Pair<K, V>[]): Codec<Pair<K, V>[]>;
    withAlternative(arg0: Codec<Pair<K, V>[]>): Codec<Pair<K, V>[]>;
    withLifecycle(arg0: Lifecycle): Codec<Pair<K, V>[]>;
    xmap<S extends unknown>(arg0: (param0: Pair<K, V>[]) => S, arg1: (param0: S) => Pair<K, V>[]): Codec<S>;
}