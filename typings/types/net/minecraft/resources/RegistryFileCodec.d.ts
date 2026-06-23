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
    static checkRange(paramarg0: Number | null, paramarg1: Number | null): (param0: Number | null) => DataResult<Number>;
    static compoundList(paramarg0: Codec<Object>, paramarg1: Codec<Object>): Codec<Pair<Object, Object>[]>;
    static create(paramregistryKey: ResourceKey<(Object | null)[]>, paramelementCodec: Codec<Object>): RegistryFileCodec<Object>;
    static create(paramregistryKey: ResourceKey<(Object | null)[]>, paramelementCodec: Codec<Object>, paramallowInline: boolean): RegistryFileCodec<Object>;
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
    orElse(arg0: (param0: string) => Object | null, arg1: Holder<E>): Codec<Holder<E>>;
    orElseGet(arg0: (param0: string) => void, arg1: () => Holder<E>): Codec<Holder<E>>;
    orElseGet(arg0: () => Holder<E>): Codec<Holder<E>>;
    orElseGet(arg0: (param0: string) => Object | null, arg1: () => Holder<E>): Codec<Holder<E>>;
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