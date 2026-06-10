import type { Pair } from '../../../com/mojang/datafixers/util/Pair.d.ts'
import type { Codec$ResultFunction } from '../../../com/mojang/serialization/Codec$ResultFunction.d.ts'
import type { DataResult } from '../../../com/mojang/serialization/DataResult.d.ts'
import type { Decoder } from '../../../com/mojang/serialization/Decoder.d.ts'
import type { Decoder$Boxed } from '../../../com/mojang/serialization/Decoder$Boxed.d.ts'
import type { Decoder$Simple } from '../../../com/mojang/serialization/Decoder$Simple.d.ts'
import type { Decoder$Terminal } from '../../../com/mojang/serialization/Decoder$Terminal.d.ts'
import type { Dynamic } from '../../../com/mojang/serialization/Dynamic.d.ts'
import type { DynamicOps } from '../../../com/mojang/serialization/DynamicOps.d.ts'
import type { Encoder } from '../../../com/mojang/serialization/Encoder.d.ts'
import type { Lifecycle } from '../../../com/mojang/serialization/Lifecycle.d.ts'
import type { MapCodec } from '../../../com/mojang/serialization/MapCodec.d.ts'
import type { MapDecoder } from '../../../com/mojang/serialization/MapDecoder.d.ts'
import type { MapEncoder } from '../../../com/mojang/serialization/MapEncoder.d.ts'
import type { Optional } from '../../../java/util/Optional.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Function } from '../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../java/util/function/Supplier.d.ts'
import type { UnaryOperator } from '../../../java/util/function/UnaryOperator.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface Codec<A extends Object | number | string | boolean> extends Decoder<A>, Encoder<A>, Object {
    boxed(): Decoder$Boxed<A>;
    comap<B extends Object | number | string | boolean>(arg0: (param0: B) => A): Encoder<B>;
    comapFlatMap<S extends Object | number | string | boolean>(arg0: (param0: A) => DataResult<S>, arg1: (param0: S) => A): Codec<S>;
    decode<T extends Object | number | string | boolean>(arg0: Dynamic<T>): DataResult<Pair<A, T>>;
    deprecated(arg0: number): Codec<A>;
    dispatch<E extends Object | number | string | boolean>(arg0: (param0: E) => A, arg1: (param0: A) => MapCodec<E>): Codec<E>;
    dispatch<E extends Object | number | string | boolean>(arg0: string, arg1: (param0: E) => A, arg2: (param0: A) => MapCodec<E>): Codec<E>;
    dispatchMap<E extends Object | number | string | boolean>(arg0: (param0: E) => A, arg1: (param0: A) => MapCodec<E>): MapCodec<E>;
    dispatchMap<E extends Object | number | string | boolean>(arg0: string, arg1: (param0: E) => A, arg2: (param0: A) => MapCodec<E>): MapCodec<E>;
    dispatchStable<E extends Object | number | string | boolean>(arg0: (param0: E) => A, arg1: (param0: A) => MapCodec<E>): Codec<E>;
    encodeStart<T extends Object | number | string | boolean>(arg0: DynamicOps<T>, arg1: A): DataResult<T>;
    fieldOf(arg0: string): MapCodec<A>;
    fieldOf(arg0: string): MapDecoder<A>;
    fieldOf(arg0: string): MapEncoder<A>;
    flatComap<B extends Object | number | string | boolean>(arg0: (param0: B) => DataResult<A>): Encoder<B>;
    flatComapMap<S extends Object | number | string | boolean>(arg0: (param0: A) => S, arg1: (param0: S) => DataResult<A>): Codec<S>;
    flatMap<B extends Object | number | string | boolean>(arg0: (param0: A) => DataResult<B>): Decoder<B>;
    flatXmap<S extends Object | number | string | boolean>(arg0: (param0: A) => DataResult<S>, arg1: (param0: S) => DataResult<A>): Codec<S>;
    lenientOptionalFieldOf(arg0: string): MapCodec<Optional<A>>;
    lenientOptionalFieldOf(arg0: string, arg1: A): MapCodec<A>;
    lenientOptionalFieldOf(arg0: string, arg1: A, arg2: Lifecycle): MapCodec<A>;
    lenientOptionalFieldOf(arg0: string, arg1: Lifecycle, arg2: A, arg3: Lifecycle): MapCodec<A>;
    listOf(): Codec<A[]>;
    listOf(arg0: number, arg1: number): Codec<A[]>;
    map<B extends Object | number | string | boolean>(arg0: (param0: A) => B): Decoder<B>;
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
    parse<T extends Object | number | string | boolean>(arg0: Dynamic<T>): DataResult<A>;
    parse<T extends Object | number | string | boolean>(arg0: DynamicOps<T>, arg1: T): DataResult<A>;
    partialDispatch<E extends Object | number | string | boolean>(arg0: string, arg1: (param0: E) => DataResult<A>, arg2: (param0: A) => DataResult<MapCodec<E>>): Codec<E>;
    promotePartial(arg0: (param0: string) => void): Codec<A>;
    promotePartial(arg0: (param0: string) => void): Decoder<A>;
    simple(): Decoder$Simple<A>;
    sizeLimitedListOf(arg0: number): Codec<A[]>;
    stable(): Codec<A>;
    terminal(): Decoder$Terminal<A>;
    validate(arg0: (param0: A) => DataResult<A>): Codec<A>;
    withAlternative<U extends Object | number | string | boolean>(arg0: Codec<U>, arg1: (param0: U) => A): Codec<A>;
    withAlternative(arg0: Codec<A>): Codec<A>;
    withLifecycle(arg0: Lifecycle): Codec<A>;
    withLifecycle(arg0: Lifecycle): Decoder<A>;
    withLifecycle(arg0: Lifecycle): Encoder<A>;
    xmap<S extends Object | number | string | boolean>(arg0: (param0: A) => S, arg1: (param0: S) => A): Codec<S>;
}