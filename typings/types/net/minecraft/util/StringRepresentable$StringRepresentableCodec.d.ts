import type { Pair } from '../../../com/mojang/datafixers/util/Pair.d.ts'
import type { Unit } from '../../../com/mojang/datafixers/util/Unit.d.ts'
import type { Codec } from '../../../com/mojang/serialization/Codec.d.ts'
import type { Codec$ResultFunction } from '../../../com/mojang/serialization/Codec$ResultFunction.d.ts'
import type { DataResult } from '../../../com/mojang/serialization/DataResult.d.ts'
import type { Dynamic } from '../../../com/mojang/serialization/Dynamic.d.ts'
import type { DynamicOps } from '../../../com/mojang/serialization/DynamicOps.d.ts'
import type { Lifecycle } from '../../../com/mojang/serialization/Lifecycle.d.ts'
import type { MapCodec } from '../../../com/mojang/serialization/MapCodec.d.ts'
import type { PrimitiveCodec } from '../../../com/mojang/serialization/codecs/PrimitiveCodec.d.ts'
import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Optional } from '../../../java/util/Optional.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Function } from '../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../java/util/function/Supplier.d.ts'
import type { ToIntFunction } from '../../../java/util/function/ToIntFunction.d.ts'
import type { UnaryOperator } from '../../../java/util/function/UnaryOperator.d.ts'
import type { IntStream } from '../../../java/util/stream/IntStream.d.ts'
import type { LongStream } from '../../../java/util/stream/LongStream.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { StringRepresentable } from '../../../net/minecraft/util/StringRepresentable.d.ts'
export class StringRepresentable$StringRepresentableCodec<S extends StringRepresentable> extends Object implements Codec<S> {
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
    constructor(valueArray: S[], nameResolver: (param0: string) => S, idResolver: (param0: S) => number)
    // private codec: Codec<S>;
    comapFlatMap(arg0: (param0: S) => DataResult<S>, arg1: (param0: S) => S): Codec<S>;
    decode<T extends unknown>(arg0: Dynamic<T>): DataResult<Pair<S, T>>;
    decode<T extends unknown>(ops: DynamicOps<T>, input: T): DataResult<Pair<S, T>>;
    deprecated(arg0: number): Codec<S>;
    dispatch<E extends unknown>(arg0: (param0: E) => S, arg1: (param0: S) => MapCodec<E>): Codec<E>;
    dispatch<E extends unknown>(arg0: string, arg1: (param0: E) => S, arg2: (param0: S) => MapCodec<E>): Codec<E>;
    dispatchMap<E extends unknown>(arg0: (param0: E) => S, arg1: (param0: S) => MapCodec<E>): MapCodec<E>;
    dispatchMap<E extends unknown>(arg0: string, arg1: (param0: E) => S, arg2: (param0: S) => MapCodec<E>): MapCodec<E>;
    dispatchStable<E extends unknown>(arg0: (param0: E) => S, arg1: (param0: S) => MapCodec<E>): Codec<E>;
    encode<T extends unknown>(input: S, ops: DynamicOps<T>, prefix: T): DataResult<T>;
    fieldOf(arg0: string): MapCodec<S>;
    flatComapMap(arg0: (param0: S) => S, arg1: (param0: S) => DataResult<S>): Codec<S>;
    flatXmap(arg0: (param0: S) => DataResult<S>, arg1: (param0: S) => DataResult<S>): Codec<S>;
    lenientOptionalFieldOf(arg0: string): MapCodec<Optional<S>>;
    lenientOptionalFieldOf(arg0: string, arg1: S): MapCodec<S>;
    lenientOptionalFieldOf(arg0: string, arg1: S, arg2: Lifecycle): MapCodec<S>;
    lenientOptionalFieldOf(arg0: string, arg1: Lifecycle, arg2: S, arg3: Lifecycle): MapCodec<S>;
    listOf(): Codec<S[]>;
    listOf(arg0: number, arg1: number): Codec<S[]>;
    mapResult(arg0: Codec$ResultFunction<S>): Codec<S>;
    optionalFieldOf(arg0: string): MapCodec<Optional<S>>;
    optionalFieldOf(arg0: string, arg1: S): MapCodec<S>;
    optionalFieldOf(arg0: string, arg1: S, arg2: Lifecycle): MapCodec<S>;
    // private optionalFieldOf(arg0: string, arg1: S, arg2: boolean): MapCodec<S>;
    optionalFieldOf(arg0: string, arg1: Lifecycle, arg2: S, arg3: Lifecycle): MapCodec<S>;
    // private optionalFieldOf(arg0: string, arg1: Lifecycle, arg2: S, arg3: Lifecycle, arg4: boolean): MapCodec<S>;
    orElse(arg0: S): Codec<S>;
    orElse(arg0: (param0: string) => void, arg1: S): Codec<S>;
    orElse(arg0: (param0: string) => string, arg1: S): Codec<S>;
    orElseGet(arg0: (param0: string) => void, arg1: () => S): Codec<S>;
    orElseGet(arg0: () => S): Codec<S>;
    orElseGet(arg0: (param0: string) => string, arg1: () => S): Codec<S>;
    partialDispatch<E extends unknown>(arg0: string, arg1: (param0: E) => DataResult<S>, arg2: (param0: S) => DataResult<MapCodec<E>>): Codec<E>;
    promotePartial(arg0: (param0: string) => void): Codec<S>;
    sizeLimitedListOf(arg0: number): Codec<S[]>;
    stable(): Codec<S>;
    validate(arg0: (param0: S) => DataResult<S>): Codec<S>;
    withAlternative<U extends unknown>(arg0: Codec<U>, arg1: (param0: U) => S): Codec<S>;
    withAlternative(arg0: Codec<S>): Codec<S>;
    withLifecycle(arg0: Lifecycle): Codec<S>;
    xmap(arg0: (param0: S) => S, arg1: (param0: S) => S): Codec<S>;
}