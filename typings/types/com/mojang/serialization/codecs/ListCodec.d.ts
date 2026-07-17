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
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { UnaryOperator } from '../../../../java/util/function/UnaryOperator.d.ts'
import type { IntStream } from '../../../../java/util/stream/IntStream.d.ts'
import type { LongStream } from '../../../../java/util/stream/LongStream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ListCodec<E extends unknown> extends Record implements Codec<E[]> {
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
    constructor(elementCodec: Codec<E>, minSize: number, maxSize: number)
    // private elementCodec: Codec<E>;
    // private maxSize: number;
    // private minSize: number;
    comapFlatMap<S extends unknown>(arg0: (param0: E[]) => DataResult<S>, arg1: (param0: S) => E[]): Codec<S>;
    // private createTooLongError<R extends unknown>(arg0: number): DataResult<R>;
    // private createTooShortError<R extends unknown>(arg0: number): DataResult<R>;
    decode<T extends unknown>(arg0: Dynamic<T>): DataResult<Pair<E[], T>>;
    decode<T extends unknown>(arg0: DynamicOps<T>, arg1: T): DataResult<Pair<E[], T>>;
    deprecated(arg0: number): Codec<E[]>;
    dispatch(arg0: (param0: E) => E[], arg1: (param0: E[]) => MapCodec<E>): Codec<E>;
    dispatch(arg0: string, arg1: (param0: E) => E[], arg2: (param0: E[]) => MapCodec<E>): Codec<E>;
    dispatchMap(arg0: (param0: E) => E[], arg1: (param0: E[]) => MapCodec<E>): MapCodec<E>;
    dispatchMap(arg0: string, arg1: (param0: E) => E[], arg2: (param0: E[]) => MapCodec<E>): MapCodec<E>;
    dispatchStable(arg0: (param0: E) => E[], arg1: (param0: E[]) => MapCodec<E>): Codec<E>;
    elementCodec(): Codec<E>;
    encode<T extends unknown>(arg0: E[], arg1: DynamicOps<T>, arg2: T): DataResult<T>;
    equals(arg0: Object | null): boolean;
    fieldOf(arg0: string): MapCodec<E[]>;
    flatComapMap<S extends unknown>(arg0: (param0: E[]) => S, arg1: (param0: S) => DataResult<E[]>): Codec<S>;
    flatXmap<S extends unknown>(arg0: (param0: E[]) => DataResult<S>, arg1: (param0: S) => DataResult<E[]>): Codec<S>;
    hashCode(): number;
    lenientOptionalFieldOf(arg0: string): MapCodec<Optional<E[]>>;
    lenientOptionalFieldOf(arg0: string, arg1: E[]): MapCodec<E[]>;
    lenientOptionalFieldOf(arg0: string, arg1: E[], arg2: Lifecycle): MapCodec<E[]>;
    lenientOptionalFieldOf(arg0: string, arg1: Lifecycle, arg2: E[], arg3: Lifecycle): MapCodec<E[]>;
    listOf(): Codec<E[][]>;
    listOf(arg0: number, arg1: number): Codec<E[][]>;
    mapResult(arg0: Codec$ResultFunction<E[]>): Codec<E[]>;
    maxSize(): number;
    minSize(): number;
    optionalFieldOf(arg0: string): MapCodec<Optional<E[]>>;
    optionalFieldOf(arg0: string, arg1: E[]): MapCodec<E[]>;
    optionalFieldOf(arg0: string, arg1: E[], arg2: Lifecycle): MapCodec<E[]>;
    // private optionalFieldOf(arg0: string, arg1: E[], arg2: boolean): MapCodec<E[]>;
    optionalFieldOf(arg0: string, arg1: Lifecycle, arg2: E[], arg3: Lifecycle): MapCodec<E[]>;
    // private optionalFieldOf(arg0: string, arg1: Lifecycle, arg2: E[], arg3: Lifecycle, arg4: boolean): MapCodec<E[]>;
    orElse(arg0: E[]): Codec<E[]>;
    orElse(arg0: (param0: string) => void, arg1: E[]): Codec<E[]>;
    orElse(arg0: (param0: string) => string, arg1: E[]): Codec<E[]>;
    orElseGet(arg0: (param0: string) => void, arg1: () => E[]): Codec<E[]>;
    orElseGet(arg0: () => E[]): Codec<E[]>;
    orElseGet(arg0: (param0: string) => string, arg1: () => E[]): Codec<E[]>;
    partialDispatch(arg0: string, arg1: (param0: E) => DataResult<E[]>, arg2: (param0: E[]) => DataResult<MapCodec<E>>): Codec<E>;
    promotePartial(arg0: (param0: string) => void): Codec<E[]>;
    sizeLimitedListOf(arg0: number): Codec<E[][]>;
    stable(): Codec<E[]>;
    toString(): string;
    validate(arg0: (param0: E[]) => DataResult<E[]>): Codec<E[]>;
    withAlternative<U extends unknown>(arg0: Codec<U>, arg1: (param0: U) => E[]): Codec<E[]>;
    withAlternative(arg0: Codec<E[]>): Codec<E[]>;
    withLifecycle(arg0: Lifecycle): Codec<E[]>;
    xmap<S extends unknown>(arg0: (param0: E[]) => S, arg1: (param0: S) => E[]): Codec<S>;
}