import type { Function3 } from '../../../com/mojang/datafixers/util/Function3.d.ts'
import type { Pair } from '../../../com/mojang/datafixers/util/Pair.d.ts'
import type { DataResult } from '../../../com/mojang/serialization/DataResult.d.ts'
import type { Decoder } from '../../../com/mojang/serialization/Decoder.d.ts'
import type { Dynamic } from '../../../com/mojang/serialization/Dynamic.d.ts'
import type { DynamicOps } from '../../../com/mojang/serialization/DynamicOps.d.ts'
import type { OptionalDynamic } from '../../../com/mojang/serialization/OptionalDynamic.d.ts'
import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Function } from '../../../java/util/function/Function.d.ts'
import type { IntStream } from '../../../java/util/stream/IntStream.d.ts'
import type { LongStream } from '../../../java/util/stream/LongStream.d.ts'
import type { Stream } from '../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Number } from '../../../java/lang/Number.d.ts'
export abstract class DynamicLike<T extends Object | number | string | boolean> extends Object {
    constructor(arg0: DynamicOps<T>)
    readonly ops: DynamicOps<T>;
    asBoolean(): DataResult<boolean>;
    asBoolean(arg0: boolean): boolean;
    asByte(arg0: number): number;
    asByteBuffer(): ByteBuffer;
    asByteBufferOpt(): DataResult<ByteBuffer>;
    asDouble(arg0: number): number;
    asFloat(arg0: number): number;
    asInt(arg0: number): number;
    asIntStream(): IntStream;
    asIntStreamOpt(): DataResult<IntStream>;
    asList<U extends Object | number | string | boolean>(arg0: (param0: Dynamic<T>) => U): U[];
    asListOpt<U extends Object | number | string | boolean>(arg0: (param0: Dynamic<T>) => U): DataResult<U[]>;
    asLong(arg0: number): number;
    asLongStream(): LongStream;
    asLongStreamOpt(): DataResult<LongStream>;
    asMap<K extends Object | number | string | boolean, V extends Object | number | string | boolean>(arg0: (param0: Dynamic<T>) => K, arg1: (param0: Dynamic<T>) => V): Map<K, V>;
    asMapOpt(): DataResult<Stream<Pair<Dynamic<T>, Dynamic<T>>>>;
    asMapOpt<K extends Object | number | string | boolean, V extends Object | number | string | boolean>(arg0: (param0: Dynamic<T>) => K, arg1: (param0: Dynamic<T>) => V): DataResult<Map<K, V>>;
    asNumber(): DataResult<Number>;
    asNumber(arg0: Number): Number;
    asShort(arg0: number): number;
    asStream(): Stream<Dynamic<T>>;
    asStreamOpt(): DataResult<Stream<Dynamic<T>>>;
    asString(): DataResult<string>;
    asString(arg0: string): string;
    createBoolean(arg0: boolean): Dynamic<T>;
    createByte(arg0: number): Dynamic<T>;
    createByteList(arg0: ByteBuffer): Dynamic<Object>;
    createDouble(arg0: number): Dynamic<T>;
    createFloat(arg0: number): Dynamic<T>;
    createInt(arg0: number): Dynamic<T>;
    createIntList(arg0: IntStream): Dynamic<Object>;
    createList(arg0: Stream<Dynamic<Object>>): Dynamic<T>;
    createLong(arg0: number): Dynamic<T>;
    createLongList(arg0: LongStream): Dynamic<Object>;
    createMap(arg0: Map<Dynamic<Object>, Dynamic<Object>>): Dynamic<T>;
    createNumeric(arg0: Number): Dynamic<T>;
    createShort(arg0: number): Dynamic<T>;
    createString(arg0: string): Dynamic<T>;
    decode<A extends Object | number | string | boolean>(arg0: Decoder<A>): DataResult<Pair<A, T>>;
    emptyList(): Dynamic<T>;
    emptyMap(): Dynamic<T>;
    get(arg0: string): OptionalDynamic<T>;
    getElement(arg0: string): DataResult<T>;
    getElement(arg0: string, arg1: T): T;
    getElementGeneric(arg0: T): DataResult<T>;
    getElementGeneric(arg0: T, arg1: T): T;
    getGeneric(arg0: T): DataResult<T>;
    getOps(): DynamicOps<T>;
    read<A extends Object | number | string | boolean>(arg0: Decoder<A>): DataResult<A>;
    readList<E extends Object | number | string | boolean>(arg0: Decoder<E>): DataResult<E[]>;
    readList<E extends Object | number | string | boolean>(arg0: (param0: Dynamic<Object>) => DataResult<E>): DataResult<E[]>;
    readMap<R extends Object | number | string | boolean>(arg0: DataResult<R>, arg1: Function3<R, Dynamic<T>, Dynamic<T>, DataResult<R>>): DataResult<R>;
    readMap<K extends Object | number | string | boolean, V extends Object | number | string | boolean>(arg0: Decoder<K>, arg1: Decoder<V>): DataResult<Pair<K, V>[]>;
    readMap<K extends Object | number | string | boolean, V extends Object | number | string | boolean>(arg0: Decoder<K>, arg1: (param0: K) => Decoder<V>): DataResult<Pair<K, V>[]>;
}