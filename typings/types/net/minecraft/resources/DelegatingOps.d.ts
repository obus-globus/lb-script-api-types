import type { JavaMap } from '../../../JavaMap.d.ts'
import type { Pair } from '../../../com/mojang/datafixers/util/Pair.d.ts'
import type { DataResult } from '../../../com/mojang/serialization/DataResult.d.ts'
import type { Decoder } from '../../../com/mojang/serialization/Decoder.d.ts'
import type { DynamicOps } from '../../../com/mojang/serialization/DynamicOps.d.ts'
import type { Encoder } from '../../../com/mojang/serialization/Encoder.d.ts'
import type { ListBuilder } from '../../../com/mojang/serialization/ListBuilder.d.ts'
import type { MapLike } from '../../../com/mojang/serialization/MapLike.d.ts'
import type { RecordBuilder } from '../../../com/mojang/serialization/RecordBuilder.d.ts'
import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { BiConsumer } from '../../../java/util/function/BiConsumer.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Function } from '../../../java/util/function/Function.d.ts'
import type { IntStream } from '../../../java/util/stream/IntStream.d.ts'
import type { LongStream } from '../../../java/util/stream/LongStream.d.ts'
import type { Stream } from '../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Number } from '../../../java/lang/Number.d.ts'
export abstract class DelegatingOps<T extends unknown> extends Object implements DynamicOps<T> {
    constructor(delegate: DynamicOps<T>)
    // private delegate: DynamicOps<T>;
    compressMaps(): boolean;
    convertList<U extends unknown>(arg0: DynamicOps<U>, arg1: T): U;
    convertMap<U extends unknown>(arg0: DynamicOps<U>, arg1: T): U;
    convertTo<U extends unknown>(outOps: DynamicOps<U>, input: T): U;
    createBoolean(value: boolean): T;
    createByte(arg0: number): T;
    createByte(value: number): T;
    createByteList(arg0: ByteBuffer): T;
    createByteList(input: ByteBuffer): T;
    createDouble(arg0: number): T;
    createDouble(value: number): T;
    createFloat(arg0: number): T;
    createFloat(value: number): T;
    createInt(arg0: number): T;
    createInt(value: number): T;
    createIntList(arg0: IntStream): T;
    createIntList(input: IntStream): T;
    createList(input: Stream<T>): T;
    createLong(arg0: number): T;
    createLong(value: number): T;
    createLongList(arg0: LongStream): T;
    createLongList(input: LongStream): T;
    createMap(arg0: JavaMap<T, T>): T;
    createMap(map: Stream<Pair<T, T>>): T;
    createMap(map: JavaMap<T, T>): T;
    createNumeric(i: Number): T;
    createShort(arg0: number): T;
    createShort(value: number): T;
    createString(value: string): T;
    empty(): T;
    emptyList(): T;
    emptyMap(): T;
    get(arg0: T, arg1: string): DataResult<T>;
    getBooleanValue(input: T): DataResult<boolean>;
    getByteBuffer(arg0: T): DataResult<ByteBuffer>;
    getByteBuffer(input: T): DataResult<ByteBuffer>;
    getGeneric(arg0: T, arg1: T): DataResult<T>;
    getIntStream(arg0: T): DataResult<IntStream>;
    getIntStream(input: T): DataResult<IntStream>;
    getList(arg0: T): DataResult<(param0: Consumer<T>) => void>;
    getList(input: T): DataResult<(param0: Consumer<T>) => void>;
    getLongStream(arg0: T): DataResult<LongStream>;
    getLongStream(input: T): DataResult<LongStream>;
    getMap(arg0: T): DataResult<MapLike<T>>;
    getMap(input: T): DataResult<MapLike<T>>;
    getMapEntries(arg0: T): DataResult<(param0: (param0: T, param1: T) => void) => void>;
    getMapEntries(input: T): DataResult<(param0: (param0: T, param1: T) => void) => void>;
    getMapValues(input: T): DataResult<Stream<Pair<T, T>>>;
    getNumberValue(arg0: T, arg1: Number): Number;
    getNumberValue(input: T): DataResult<Number>;
    getStream(input: T): DataResult<Stream<T>>;
    getStringValue(input: T): DataResult<string>;
    listBuilder(): ListBuilder<T>;
    mapBuilder(): RecordBuilder<T>;
    mergeToList(arg0: T, arg1: T[]): DataResult<T>;
    mergeToList(list: T, value: T): DataResult<T>;
    mergeToList(list: T, values: T[]): DataResult<T>;
    mergeToMap(arg0: T, arg1: MapLike<T>): DataResult<T>;
    mergeToMap(arg0: T, arg1: JavaMap<T, T>): DataResult<T>;
    mergeToMap(map: T, key: T, value: T): DataResult<T>;
    mergeToMap(map: T, values: MapLike<T>): DataResult<T>;
    mergeToMap(map: T, values: JavaMap<T, T>): DataResult<T>;
    mergeToPrimitive(arg0: T, arg1: T): DataResult<T>;
    mergeToPrimitive(prefix: T, value: T): DataResult<T>;
    remove(input: T, key: string): T;
    set(arg0: T, arg1: string, arg2: T): T;
    update(arg0: T, arg1: string, arg2: (param0: T) => T): T;
    updateGeneric(arg0: T, arg1: T, arg2: (param0: T) => T): T;
    withDecoder<E extends unknown>(arg0: Decoder<E>): (param0: T) => DataResult<Pair<E, T>>;
    withEncoder<E extends unknown>(arg0: Encoder<E>): (param0: E) => DataResult<T>;
    withParser<E extends unknown>(arg0: Decoder<E>): (param0: T) => DataResult<E>;
}