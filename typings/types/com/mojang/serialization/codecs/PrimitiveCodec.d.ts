import type { Pair } from '../../../../com/mojang/datafixers/util/Pair.d.ts'
import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Codec$ResultFunction } from '../../../../com/mojang/serialization/Codec$ResultFunction.d.ts'
import type { DataResult } from '../../../../com/mojang/serialization/DataResult.d.ts'
import type { Dynamic } from '../../../../com/mojang/serialization/Dynamic.d.ts'
import type { DynamicOps } from '../../../../com/mojang/serialization/DynamicOps.d.ts'
import type { Lifecycle } from '../../../../com/mojang/serialization/Lifecycle.d.ts'
import type { MapCodec } from '../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { UnaryOperator } from '../../../../java/util/function/UnaryOperator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface PrimitiveCodec<A extends unknown> extends Codec<A>, Object {
    comapFlatMap<S extends unknown>(arg0: (param0: A) => DataResult<S>, arg1: (param0: S) => A): Codec<S>;
    decode<T extends unknown>(arg0: Dynamic<T>): DataResult<Pair<A, T>>;
    decode<T extends unknown>(arg0: DynamicOps<T>, arg1: T): DataResult<Pair<A, T>>;
    deprecated(arg0: number): Codec<A>;
    dispatch<E extends unknown>(arg0: (param0: E) => A, arg1: (param0: A) => MapCodec<E>): Codec<E>;
    dispatch<E extends unknown>(arg0: string, arg1: (param0: E) => A, arg2: (param0: A) => MapCodec<E>): Codec<E>;
    dispatchMap<E extends unknown>(arg0: (param0: E) => A, arg1: (param0: A) => MapCodec<E>): MapCodec<E>;
    dispatchMap<E extends unknown>(arg0: string, arg1: (param0: E) => A, arg2: (param0: A) => MapCodec<E>): MapCodec<E>;
    dispatchStable<E extends unknown>(arg0: (param0: E) => A, arg1: (param0: A) => MapCodec<E>): Codec<E>;
    encode<T extends unknown>(arg0: A, arg1: DynamicOps<T>, arg2: T): DataResult<T>;
    fieldOf(arg0: string): MapCodec<A>;
    flatComapMap<S extends unknown>(arg0: (param0: A) => S, arg1: (param0: S) => DataResult<A>): Codec<S>;
    flatXmap<S extends unknown>(arg0: (param0: A) => DataResult<S>, arg1: (param0: S) => DataResult<A>): Codec<S>;
    lenientOptionalFieldOf(arg0: string): MapCodec<Optional<A>>;
    lenientOptionalFieldOf(arg0: string, arg1: A): MapCodec<A>;
    lenientOptionalFieldOf(arg0: string, arg1: A, arg2: Lifecycle): MapCodec<A>;
    lenientOptionalFieldOf(arg0: string, arg1: Lifecycle, arg2: A, arg3: Lifecycle): MapCodec<A>;
    listOf(): Codec<A[]>;
    listOf(arg0: number, arg1: number): Codec<A[]>;
    mapResult(arg0: Codec$ResultFunction<A>): Codec<A>;
    optionalFieldOf(arg0: string): MapCodec<Optional<A>>;
    optionalFieldOf(arg0: string, arg1: A): MapCodec<A>;
    optionalFieldOf(arg0: string, arg1: A, arg2: Lifecycle): MapCodec<A>;
    // private optionalFieldOf(arg0: string, arg1: A, arg2: boolean): MapCodec<A>;
    optionalFieldOf(arg0: string, arg1: Lifecycle, arg2: A, arg3: Lifecycle): MapCodec<A>;
    // private optionalFieldOf(arg0: string, arg1: Lifecycle, arg2: A, arg3: Lifecycle, arg4: boolean): MapCodec<A>;
    orElse(arg0: A): Codec<A>;
    orElse(arg0: (param0: string) => void, arg1: A): Codec<A>;
    orElse(arg0: (param0: string) => Object | null, arg1: A): Codec<A>;
    orElseGet(arg0: (param0: string) => void, arg1: () => A): Codec<A>;
    orElseGet(arg0: () => A): Codec<A>;
    orElseGet(arg0: (param0: string) => Object | null, arg1: () => A): Codec<A>;
    partialDispatch<E extends unknown>(arg0: string, arg1: (param0: E) => DataResult<A>, arg2: (param0: A) => DataResult<MapCodec<E>>): Codec<E>;
    promotePartial(arg0: (param0: string) => void): Codec<A>;
    read<T extends unknown>(arg0: DynamicOps<T>, arg1: T): DataResult<A>;
    sizeLimitedListOf(arg0: number): Codec<A[]>;
    stable(): Codec<A>;
    validate(arg0: (param0: A) => DataResult<A>): Codec<A>;
    withAlternative<U extends unknown>(arg0: Codec<U>, arg1: (param0: U) => A): Codec<A>;
    withAlternative(arg0: Codec<A>): Codec<A>;
    withLifecycle(arg0: Lifecycle): Codec<A>;
    write<T extends unknown>(arg0: DynamicOps<T>, arg1: A): T;
    xmap<S extends unknown>(arg0: (param0: A) => S, arg1: (param0: S) => A): Codec<S>;
}