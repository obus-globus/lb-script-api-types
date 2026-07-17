import type { JavaMap } from '../../../JavaMap.d.ts'
import type { Pair } from '../../../com/mojang/datafixers/util/Pair.d.ts'
import type { DataResult } from '../../../com/mojang/serialization/DataResult.d.ts'
import type { Decoder } from '../../../com/mojang/serialization/Decoder.d.ts'
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
export interface DynamicOps<T extends unknown> extends Object {
    compressMaps(): boolean;
    convertList<U extends unknown>(arg0: DynamicOps<U>, arg1: T): U;
    convertMap<U extends unknown>(arg0: DynamicOps<U>, arg1: T): U;
    convertTo<U extends unknown>(arg0: DynamicOps<U>, arg1: T): U;
    createBoolean(arg0: boolean): T;
    createByte(arg0: number): T;
    createByteList(arg0: ByteBuffer): T;
    createDouble(arg0: number): T;
    createFloat(arg0: number): T;
    createInt(arg0: number): T;
    createIntList(arg0: IntStream): T;
    createList(arg0: Stream<T>): T;
    createLong(arg0: number): T;
    createLongList(arg0: LongStream): T;
    createMap(arg0: Stream<Pair<T, T>>): T;
    createMap(arg0: JavaMap<T, T>): T;
    createNumeric(arg0: Number): T;
    createShort(arg0: number): T;
    createString(arg0: string): T;
    empty(): T;
    emptyList(): T;
    emptyMap(): T;
    get(arg0: T, arg1: string): DataResult<T>;
    getBooleanValue(arg0: T): DataResult<boolean>;
    getByteBuffer(arg0: T): DataResult<ByteBuffer>;
    getGeneric(arg0: T, arg1: T): DataResult<T>;
    getIntStream(arg0: T): DataResult<IntStream>;
    getList(arg0: T): DataResult<(param0: Consumer<T>) => void>;
    getLongStream(arg0: T): DataResult<LongStream>;
    getMap(arg0: T): DataResult<MapLike<T>>;
    getMapEntries(arg0: T): DataResult<(param0: (param0: T, param1: T) => void) => void>;
    getMapValues(arg0: T): DataResult<Stream<Pair<T, T>>>;
    getNumberValue(arg0: T): DataResult<Number>;
    getNumberValue(arg0: T, arg1: Number): Number;
    getStream(arg0: T): DataResult<Stream<T>>;
    getStringValue(arg0: T): DataResult<string>;
    listBuilder(): ListBuilder<T>;
    mapBuilder(): RecordBuilder<T>;
    mergeToList(arg0: T, arg1: T): DataResult<T>;
    mergeToList(arg0: T, arg1: T[]): DataResult<T>;
    mergeToMap(arg0: T, arg1: T, arg2: T): DataResult<T>;
    mergeToMap(arg0: T, arg1: MapLike<T>): DataResult<T>;
    mergeToMap(arg0: T, arg1: JavaMap<T, T>): DataResult<T>;
    mergeToPrimitive(arg0: T, arg1: T): DataResult<T>;
    remove(arg0: T, arg1: string): T;
    set(arg0: T, arg1: string, arg2: T): T;
    update(arg0: T, arg1: string, arg2: (param0: T) => T): T;
    updateGeneric(arg0: T, arg1: T, arg2: (param0: T) => T): T;
    withDecoder<E extends unknown>(arg0: Decoder<E>): (param0: T) => DataResult<Pair<E, T>>;
    withEncoder<E extends unknown>(arg0: Encoder<E>): (param0: E) => DataResult<T>;
    withParser<E extends unknown>(arg0: Decoder<E>): (param0: T) => DataResult<E>;
}