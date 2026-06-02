import type { Pair } from '../../../com/mojang/datafixers/util/Pair.d.ts'
import type { DataResult } from '../../../com/mojang/serialization/DataResult.d.ts'
import type { Decoder } from '../../../com/mojang/serialization/Decoder.d.ts'
import type { DynamicLike } from '../../../com/mojang/serialization/DynamicLike.d.ts'
import type { DynamicOps } from '../../../com/mojang/serialization/DynamicOps.d.ts'
import type { OptionalDynamic } from '../../../com/mojang/serialization/OptionalDynamic.d.ts'
import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Optional } from '../../../java/util/Optional.d.ts'
import type { Function } from '../../../java/util/function/Function.d.ts'
import type { UnaryOperator } from '../../../java/util/function/UnaryOperator.d.ts'
import type { IntStream } from '../../../java/util/stream/IntStream.d.ts'
import type { LongStream } from '../../../java/util/stream/LongStream.d.ts'
import type { Stream } from '../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Number } from '../../../java/lang/Number.d.ts'
export class Dynamic<T extends Object | number | string | boolean> extends DynamicLike<T> {
    static convert(paramarg0: DynamicOps<Object>, paramarg1: DynamicOps<Object>, paramarg2: Object | null): Object | null;
    static copyAndFixField(paramarg0: Dynamic<Object>, paramarg1: string, paramarg2: Dynamic<Object>, paramarg3: string, paramarg4: (param0: Object | null) => unknown): Dynamic<Object>;
    static copyField(paramarg0: Dynamic<Object>, paramarg1: string, paramarg2: Dynamic<Object>, paramarg3: string): Dynamic<Object>;
    constructor(arg0: DynamicOps<T>)
    constructor(arg0: DynamicOps<T>, arg1: T)
    readonly value: T;
    asBoolean(): DataResult<boolean>;
    asByteBufferOpt(): DataResult<ByteBuffer>;
    asIntStreamOpt(): DataResult<IntStream>;
    asLongStreamOpt(): DataResult<LongStream>;
    asMapOpt(): DataResult<Stream<Pair<Dynamic<T>, Dynamic<T>>>>;
    asNumber(): DataResult<Number>;
    asStreamOpt(): DataResult<Stream<Dynamic<T>>>;
    asString(): DataResult<string>;
    cast<U extends Object | number | string | boolean>(arg0: DynamicOps<U>): U;
    castTyped(arg0: DynamicOps<U>): Dynamic<U>;
    convert(arg0: DynamicOps<R>): Dynamic<R>;
    decode(arg0: Decoder<A>): DataResult<Pair<A, T>>;
    equals(arg0: Object | null): boolean;
    get(arg0: string): OptionalDynamic<T>;
    getElement(arg0: string): DataResult<T>;
    getElementGeneric(arg0: T): DataResult<T>;
    getGeneric(arg0: T): DataResult<T>;
    getMapValues(): DataResult<Map<Dynamic<T>, Dynamic<T>>>;
    getValue(): T;
    hashCode(): number;
    into<V extends Object | number | string | boolean>(arg0: (param0: Dynamic<T>) => V): V;
    map(arg0: (param0: T) => T): Dynamic<T>;
    merge(arg0: Dynamic<Object>): OptionalDynamic<T>;
    merge(arg0: Dynamic<Object>, arg1: Dynamic<Object>): OptionalDynamic<T>;
    remove(arg0: string): Dynamic<T>;
    renameAndFixField(arg0: string, arg1: string, arg2: (param0: Dynamic<Object>) => unknown): Dynamic<T>;
    renameField(arg0: string, arg1: string): Dynamic<T>;
    replaceField(arg0: string, arg1: string, arg2: Optional<Dynamic<Object>>): Dynamic<T>;
    set(arg0: string, arg1: Dynamic<Object>): Dynamic<T>;
    setFieldIfPresent(arg0: string, arg1: Optional<Dynamic<Object>>): Dynamic<T>;
    toString(): string;
    update(arg0: string, arg1: (param0: Dynamic<Object>) => Dynamic<Object>): Dynamic<T>;
    updateGeneric(arg0: T, arg1: (param0: T) => T): Dynamic<T>;
    updateMapValues(arg0: (param0: Pair<Dynamic<Object>, Dynamic<Object>>) => Pair<Dynamic<Object>, Dynamic<Object>>): Dynamic<T>;
}