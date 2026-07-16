import type { Either } from '../../../com/mojang/datafixers/util/Either.d.ts'
import type { Pair } from '../../../com/mojang/datafixers/util/Pair.d.ts'
import type { Unit } from '../../../com/mojang/datafixers/util/Unit.d.ts'
import type { Codec } from '../../../com/mojang/serialization/Codec.d.ts'
import type { Codec$ResultFunction } from '../../../com/mojang/serialization/Codec$ResultFunction.d.ts'
import type { DataResult } from '../../../com/mojang/serialization/DataResult.d.ts'
import type { Decoder } from '../../../com/mojang/serialization/Decoder.d.ts'
import type { Dynamic } from '../../../com/mojang/serialization/Dynamic.d.ts'
import type { DynamicOps } from '../../../com/mojang/serialization/DynamicOps.d.ts'
import type { Encoder } from '../../../com/mojang/serialization/Encoder.d.ts'
import type { Keyable } from '../../../com/mojang/serialization/Keyable.d.ts'
import type { Lifecycle } from '../../../com/mojang/serialization/Lifecycle.d.ts'
import type { MapCodec } from '../../../com/mojang/serialization/MapCodec.d.ts'
import type { MapDecoder } from '../../../com/mojang/serialization/MapDecoder.d.ts'
import type { MapEncoder } from '../../../com/mojang/serialization/MapEncoder.d.ts'
import type { PrimitiveCodec } from '../../../com/mojang/serialization/codecs/PrimitiveCodec.d.ts'
import type { SimpleMapCodec } from '../../../com/mojang/serialization/codecs/SimpleMapCodec.d.ts'
import type { UnboundedMapCodec } from '../../../com/mojang/serialization/codecs/UnboundedMapCodec.d.ts'
import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Optional } from '../../../java/util/Optional.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Function } from '../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../java/util/function/Supplier.d.ts'
import type { UnaryOperator } from '../../../java/util/function/UnaryOperator.d.ts'
import type { IntStream } from '../../../java/util/stream/IntStream.d.ts'
import type { LongStream } from '../../../java/util/stream/LongStream.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../java/lang/Comparable.d.ts'
import type { Number } from '../../../java/lang/Number.d.ts'
import type { Holder } from '../../../net/minecraft/core/Holder.d.ts'
import type { ResourceKey } from '../../../net/minecraft/resources/ResourceKey.d.ts'
export class RegistryFileCodec<E extends unknown> extends Object implements Codec<Holder<E>> {
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
    static checkRange<N extends Number & Comparable<N>>(paramarg0: N, paramarg1: N): (param0: N) => DataResult<N>;
    static compoundList<K extends unknown, V extends unknown>(paramarg0: Codec<K>, paramarg1: Codec<V>): Codec<Pair<K, V>[]>;
    static create<E extends unknown>(paramregistryKey: ResourceKey<E[]>, paramelementCodec: Codec<E>): RegistryFileCodec<E>;
    static create<E extends unknown>(paramregistryKey: ResourceKey<E[]>, paramelementCodec: Codec<E>, paramallowInline: boolean): RegistryFileCodec<E>;
    static dispatchedMap<K extends unknown, V extends unknown>(paramarg0: Codec<K>, paramarg1: (param0: K) => Codec<V>): Codec<Map<K, V>>;
    static doubleRange(paramarg0: number, paramarg1: number): Codec<number>;
    static either<F extends unknown, S extends unknown>(paramarg0: Codec<F>, paramarg1: Codec<S>): Codec<Either<F, S>>;
    static floatRange(paramarg0: number, paramarg1: number): Codec<number>;
    static intRange(paramarg0: number, paramarg1: number): Codec<number>;
    static lazyInitialized<A extends unknown>(paramarg0: () => Codec<A>): Codec<A>;
    static list<E extends unknown>(paramarg0: Codec<E>): Codec<E[]>;
    static list<E extends unknown>(paramarg0: Codec<E>, paramarg1: number, paramarg2: number): Codec<E[]>;
    static mapEither<F extends unknown, S extends unknown>(paramarg0: MapCodec<F>, paramarg1: MapCodec<S>): MapCodec<Either<F, S>>;
    static mapPair<F extends unknown, S extends unknown>(paramarg0: MapCodec<F>, paramarg1: MapCodec<S>): MapCodec<Pair<F, S>>;
    static of<A extends unknown>(paramarg0: Encoder<A>, paramarg1: Decoder<A>): Codec<A>;
    static of<A extends unknown>(paramarg0: Encoder<A>, paramarg1: Decoder<A>, paramarg2: string): Codec<A>;
    static of<A extends unknown>(paramarg0: MapEncoder<A>, paramarg1: MapDecoder<A>): MapCodec<A>;
    static of<A extends unknown>(paramarg0: MapEncoder<A>, paramarg1: MapDecoder<A>, paramarg2: () => string): MapCodec<A>;
    static optionalField<F extends unknown>(paramarg0: string, paramarg1: Codec<F>, paramarg2: boolean): MapCodec<Optional<F>>;
    static pair<F extends unknown, S extends unknown>(paramarg0: Codec<F>, paramarg1: Codec<S>): Codec<Pair<F, S>>;
    static recursive<A extends unknown>(paramarg0: string, paramarg1: (param0: Codec<A>) => Codec<A>): Codec<A>;
    static simpleMap<K extends unknown, V extends unknown>(paramarg0: Codec<K>, paramarg1: Codec<V>, paramarg2: Keyable): SimpleMapCodec<K, V>;
    static sizeLimitedString(paramarg0: number): Codec<string>;
    static string(paramarg0: number, paramarg1: number): Codec<string>;
    static stringResolver<E extends unknown>(paramarg0: (param0: E) => string, paramarg1: (param0: string) => E): Codec<E>;
    static unboundedMap<K extends unknown, V extends unknown>(paramarg0: Codec<K>, paramarg1: Codec<V>): UnboundedMapCodec<K, V>;
    static withAlternative<T extends unknown, U extends unknown>(paramarg0: Codec<T>, paramarg1: Codec<U>, paramarg2: (param0: U) => T): Codec<T>;
    static withAlternative<T extends unknown>(paramarg0: Codec<T>, paramarg1: Codec<T>): Codec<T>;
    static xor<F extends unknown, S extends unknown>(paramarg0: Codec<F>, paramarg1: Codec<S>): Codec<Either<F, S>>;
    private constructor(registryKey: ResourceKey<E[]>, elementCodec: Codec<E>, allowInline: boolean)
    // private allowInline: boolean;
    // private elementCodec: Codec<E>;
    // private registryKey: ResourceKey<E[]>;
    comapFlatMap<S extends unknown>(arg0: (param0: Holder<E>) => DataResult<S>, arg1: (param0: S) => Holder<E>): Codec<S>;
    decode<T extends unknown>(arg0: Dynamic<T>): DataResult<Pair<Holder<E>, T>>;
    decode<T extends unknown>(ops: DynamicOps<T>, input: T): DataResult<Pair<Holder<E>, T>>;
    deprecated(arg0: number): Codec<Holder<E>>;
    dispatch(arg0: (param0: E) => Holder<E>, arg1: (param0: Holder<E>) => MapCodec<E>): Codec<E>;
    dispatch(arg0: string, arg1: (param0: E) => Holder<E>, arg2: (param0: Holder<E>) => MapCodec<E>): Codec<E>;
    dispatchMap(arg0: (param0: E) => Holder<E>, arg1: (param0: Holder<E>) => MapCodec<E>): MapCodec<E>;
    dispatchMap(arg0: string, arg1: (param0: E) => Holder<E>, arg2: (param0: Holder<E>) => MapCodec<E>): MapCodec<E>;
    dispatchStable(arg0: (param0: E) => Holder<E>, arg1: (param0: Holder<E>) => MapCodec<E>): Codec<E>;
    encode<T extends unknown>(input: Holder<E>, ops: DynamicOps<T>, prefix: T): DataResult<T>;
    fieldOf(arg0: string): MapCodec<Holder<E>>;
    flatComapMap<S extends unknown>(arg0: (param0: Holder<E>) => S, arg1: (param0: S) => DataResult<Holder<E>>): Codec<S>;
    flatXmap<S extends unknown>(arg0: (param0: Holder<E>) => DataResult<S>, arg1: (param0: S) => DataResult<Holder<E>>): Codec<S>;
    lenientOptionalFieldOf(arg0: string): MapCodec<Optional<Holder<E>>>;
    lenientOptionalFieldOf(arg0: string, arg1: Holder<E>): MapCodec<Holder<E>>;
    lenientOptionalFieldOf(arg0: string, arg1: Holder<E>, arg2: Lifecycle): MapCodec<Holder<E>>;
    lenientOptionalFieldOf(arg0: string, arg1: Lifecycle, arg2: Holder<E>, arg3: Lifecycle): MapCodec<Holder<E>>;
    listOf(): Codec<Holder<E>[]>;
    listOf(arg0: number, arg1: number): Codec<Holder<E>[]>;
    mapResult(arg0: Codec$ResultFunction<Holder<E>>): Codec<Holder<E>>;
    optionalFieldOf(arg0: string): MapCodec<Optional<Holder<E>>>;
    optionalFieldOf(arg0: string, arg1: Holder<E>): MapCodec<Holder<E>>;
    optionalFieldOf(arg0: string, arg1: Holder<E>, arg2: Lifecycle): MapCodec<Holder<E>>;
    // private optionalFieldOf(arg0: string, arg1: Holder<E>, arg2: boolean): MapCodec<Holder<E>>;
    optionalFieldOf(arg0: string, arg1: Lifecycle, arg2: Holder<E>, arg3: Lifecycle): MapCodec<Holder<E>>;
    // private optionalFieldOf(arg0: string, arg1: Lifecycle, arg2: Holder<E>, arg3: Lifecycle, arg4: boolean): MapCodec<Holder<E>>;
    orElse(arg0: Holder<E>): Codec<Holder<E>>;
    orElse(arg0: (param0: string) => void, arg1: Holder<E>): Codec<Holder<E>>;
    orElse(arg0: (param0: string) => string, arg1: Holder<E>): Codec<Holder<E>>;
    orElseGet(arg0: (param0: string) => void, arg1: () => Holder<E>): Codec<Holder<E>>;
    orElseGet(arg0: () => Holder<E>): Codec<Holder<E>>;
    orElseGet(arg0: (param0: string) => string, arg1: () => Holder<E>): Codec<Holder<E>>;
    partialDispatch(arg0: string, arg1: (param0: E) => DataResult<Holder<E>>, arg2: (param0: Holder<E>) => DataResult<MapCodec<E>>): Codec<E>;
    promotePartial(arg0: (param0: string) => void): Codec<Holder<E>>;
    sizeLimitedListOf(arg0: number): Codec<Holder<E>[]>;
    stable(): Codec<Holder<E>>;
    toString(): string;
    validate(arg0: (param0: Holder<E>) => DataResult<Holder<E>>): Codec<Holder<E>>;
    withAlternative<U extends unknown>(arg0: Codec<U>, arg1: (param0: U) => Holder<E>): Codec<Holder<E>>;
    withAlternative(arg0: Codec<Holder<E>>): Codec<Holder<E>>;
    withLifecycle(arg0: Lifecycle): Codec<Holder<E>>;
    xmap<S extends unknown>(arg0: (param0: Holder<E>) => S, arg1: (param0: S) => Holder<E>): Codec<S>;
}