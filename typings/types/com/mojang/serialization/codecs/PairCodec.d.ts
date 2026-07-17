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
export class PairCodec<F extends unknown, S extends unknown> extends Object implements Codec<Pair<F, S>> {
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
    constructor(arg0: Codec<F>, arg1: Codec<S>)
    // private first: Codec<F>;
    // private second: Codec<S>;
    comapFlatMap(arg0: (param0: Pair<F, S>) => DataResult<S>, arg1: (param0: S) => Pair<F, S>): Codec<S>;
    decode<T extends unknown>(arg0: Dynamic<T>): DataResult<Pair<Pair<F, S>, T>>;
    decode<T extends unknown>(arg0: DynamicOps<T>, arg1: T): DataResult<Pair<Pair<F, S>, T>>;
    deprecated(arg0: number): Codec<Pair<F, S>>;
    dispatch<E extends unknown>(arg0: (param0: E) => Pair<F, S>, arg1: (param0: Pair<F, S>) => MapCodec<E>): Codec<E>;
    dispatch<E extends unknown>(arg0: string, arg1: (param0: E) => Pair<F, S>, arg2: (param0: Pair<F, S>) => MapCodec<E>): Codec<E>;
    dispatchMap<E extends unknown>(arg0: (param0: E) => Pair<F, S>, arg1: (param0: Pair<F, S>) => MapCodec<E>): MapCodec<E>;
    dispatchMap<E extends unknown>(arg0: string, arg1: (param0: E) => Pair<F, S>, arg2: (param0: Pair<F, S>) => MapCodec<E>): MapCodec<E>;
    dispatchStable<E extends unknown>(arg0: (param0: E) => Pair<F, S>, arg1: (param0: Pair<F, S>) => MapCodec<E>): Codec<E>;
    encode<T extends unknown>(arg0: Pair<F, S>, arg1: DynamicOps<T>, arg2: T): DataResult<T>;
    equals(arg0: Object | null): boolean;
    fieldOf(arg0: string): MapCodec<Pair<F, S>>;
    flatComapMap(arg0: (param0: Pair<F, S>) => S, arg1: (param0: S) => DataResult<Pair<F, S>>): Codec<S>;
    flatXmap(arg0: (param0: Pair<F, S>) => DataResult<S>, arg1: (param0: S) => DataResult<Pair<F, S>>): Codec<S>;
    hashCode(): number;
    lenientOptionalFieldOf(arg0: string): MapCodec<Optional<Pair<F, S>>>;
    lenientOptionalFieldOf(arg0: string, arg1: Pair<F, S>): MapCodec<Pair<F, S>>;
    lenientOptionalFieldOf(arg0: string, arg1: Pair<F, S>, arg2: Lifecycle): MapCodec<Pair<F, S>>;
    lenientOptionalFieldOf(arg0: string, arg1: Lifecycle, arg2: Pair<F, S>, arg3: Lifecycle): MapCodec<Pair<F, S>>;
    listOf(): Codec<Pair<F, S>[]>;
    listOf(arg0: number, arg1: number): Codec<Pair<F, S>[]>;
    mapResult(arg0: Codec$ResultFunction<Pair<F, S>>): Codec<Pair<F, S>>;
    optionalFieldOf(arg0: string): MapCodec<Optional<Pair<F, S>>>;
    optionalFieldOf(arg0: string, arg1: Pair<F, S>): MapCodec<Pair<F, S>>;
    optionalFieldOf(arg0: string, arg1: Pair<F, S>, arg2: Lifecycle): MapCodec<Pair<F, S>>;
    // private optionalFieldOf(arg0: string, arg1: Pair<F, S>, arg2: boolean): MapCodec<Pair<F, S>>;
    optionalFieldOf(arg0: string, arg1: Lifecycle, arg2: Pair<F, S>, arg3: Lifecycle): MapCodec<Pair<F, S>>;
    // private optionalFieldOf(arg0: string, arg1: Lifecycle, arg2: Pair<F, S>, arg3: Lifecycle, arg4: boolean): MapCodec<Pair<F, S>>;
    orElse(arg0: Pair<F, S>): Codec<Pair<F, S>>;
    orElse(arg0: (param0: string) => void, arg1: Pair<F, S>): Codec<Pair<F, S>>;
    orElse(arg0: (param0: string) => string, arg1: Pair<F, S>): Codec<Pair<F, S>>;
    orElseGet(arg0: (param0: string) => void, arg1: () => Pair<F, S>): Codec<Pair<F, S>>;
    orElseGet(arg0: () => Pair<F, S>): Codec<Pair<F, S>>;
    orElseGet(arg0: (param0: string) => string, arg1: () => Pair<F, S>): Codec<Pair<F, S>>;
    partialDispatch<E extends unknown>(arg0: string, arg1: (param0: E) => DataResult<Pair<F, S>>, arg2: (param0: Pair<F, S>) => DataResult<MapCodec<E>>): Codec<E>;
    promotePartial(arg0: (param0: string) => void): Codec<Pair<F, S>>;
    sizeLimitedListOf(arg0: number): Codec<Pair<F, S>[]>;
    stable(): Codec<Pair<F, S>>;
    toString(): string;
    validate(arg0: (param0: Pair<F, S>) => DataResult<Pair<F, S>>): Codec<Pair<F, S>>;
    withAlternative<U extends unknown>(arg0: Codec<U>, arg1: (param0: U) => Pair<F, S>): Codec<Pair<F, S>>;
    withAlternative(arg0: Codec<Pair<F, S>>): Codec<Pair<F, S>>;
    withLifecycle(arg0: Lifecycle): Codec<Pair<F, S>>;
    xmap(arg0: (param0: Pair<F, S>) => S, arg1: (param0: S) => Pair<F, S>): Codec<S>;
}