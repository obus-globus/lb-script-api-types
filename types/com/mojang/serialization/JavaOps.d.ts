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
export class JavaOps extends Object implements DynamicOps<Object> {
    static INSTANCE: JavaOps;
    private constructor()
    compressMaps(): boolean;
    convertList<U extends Object | number | string | boolean, T extends Object | number | string | boolean>(arg0: DynamicOps<U>, arg1: T): U;
    convertMap<U extends Object | number | string | boolean, T extends Object | number | string | boolean>(arg0: DynamicOps<U>, arg1: T): U;
    convertTo<U extends Object | number | string | boolean>(arg0: DynamicOps<U>, arg1: Object): U;
    createBoolean<T extends Object | number | string | boolean>(arg0: boolean): T;
    createBoolean(arg0: boolean): Object;
    createByte<T extends Object | number | string | boolean>(arg0: number): T;
    createByte(arg0: number): Object;
    createByteList<T extends Object | number | string | boolean>(arg0: ByteBuffer): T;
    createByteList(arg0: ByteBuffer): Object;
    createDouble<T extends Object | number | string | boolean>(arg0: number): T;
    createDouble(arg0: number): Object;
    createFloat<T extends Object | number | string | boolean>(arg0: number): T;
    createFloat(arg0: number): Object;
    createInt<T extends Object | number | string | boolean>(arg0: number): T;
    createInt(arg0: number): Object;
    createIntList<T extends Object | number | string | boolean>(arg0: IntStream): T;
    createIntList(arg0: IntStream): Object;
    createList(arg0: Stream<Object>): Object;
    createLong<T extends Object | number | string | boolean>(arg0: number): T;
    createLong(arg0: number): Object;
    createLongList<T extends Object | number | string | boolean>(arg0: LongStream): T;
    createLongList(arg0: LongStream): Object;
    createMap<T extends Object | number | string | boolean>(arg0: Map<T, T>): T;
    createMap(arg0: Stream<Pair<Object, Object>>): Object;
    createMap(arg0: Map<Object, Object>): Object;
    createNumeric(arg0: Number): Object;
    createShort<T extends Object | number | string | boolean>(arg0: number): T;
    createShort(arg0: number): Object;
    createString(arg0: string): Object;
    empty(): Object;
    emptyList<T extends Object | number | string | boolean>(): T;
    emptyList(): Object;
    emptyMap<T extends Object | number | string | boolean>(): T;
    emptyMap(): Object;
    get<T extends Object | number | string | boolean>(arg0: T, arg1: string): DataResult<T>;
    getBooleanValue<T extends Object | number | string | boolean>(arg0: T): DataResult<boolean>;
    getBooleanValue(arg0: Object): DataResult<boolean>;
    getByteBuffer<T extends Object | number | string | boolean>(arg0: T): DataResult<ByteBuffer>;
    getByteBuffer(arg0: Object): DataResult<ByteBuffer>;
    getGeneric<T extends Object | number | string | boolean>(arg0: T, arg1: T): DataResult<T>;
    getIntStream<T extends Object | number | string | boolean>(arg0: T): DataResult<IntStream>;
    getIntStream(arg0: Object): DataResult<IntStream>;
    getList<T extends Object | number | string | boolean>(arg0: T): DataResult<(param0: (param0: T) => void) => void>;
    getList(arg0: Object): DataResult<(param0: (param0: Object) => void) => void>;
    getLongStream<T extends Object | number | string | boolean>(arg0: T): DataResult<LongStream>;
    getLongStream(arg0: Object): DataResult<LongStream>;
    getMap<T extends Object | number | string | boolean>(arg0: T): DataResult<MapLike<T>>;
    getMap(arg0: Object): DataResult<MapLike<Object>>;
    getMapEntries<T extends Object | number | string | boolean>(arg0: T): DataResult<(param0: (param0: T, param1: T) => void) => void>;
    getMapEntries(arg0: Object): DataResult<(param0: (param0: Object, param1: Object) => void) => void>;
    getMapValues(arg0: Object): DataResult<Stream<Pair<Object, Object>>>;
    getNumberValue<T extends Object | number | string | boolean>(arg0: T, arg1: Number): Number;
    getNumberValue(arg0: Object): DataResult<Number>;
    getStream(arg0: Object): DataResult<Stream<Object>>;
    getStringValue(arg0: Object): DataResult<string>;
    listBuilder(): ListBuilder<T>;
    mapBuilder(): RecordBuilder<T>;
    mapBuilder(): RecordBuilder<Object>;
    mergeToList<T extends Object | number | string | boolean>(arg0: T, arg1: T[]): DataResult<T>;
    mergeToList(arg0: Object, arg1: Object): DataResult<Object>;
    mergeToList(arg0: Object, arg1: Object[]): DataResult<Object>;
    mergeToMap<T extends Object | number | string | boolean>(arg0: T, arg1: MapLike<T>): DataResult<T>;
    mergeToMap<T extends Object | number | string | boolean>(arg0: T, arg1: Map<T, T>): DataResult<T>;
    mergeToMap(arg0: Object, arg1: MapLike<Object>): DataResult<Object>;
    mergeToMap(arg0: Object, arg1: Object, arg2: Object): DataResult<Object>;
    mergeToMap(arg0: Object, arg1: Map<Object, Object>): DataResult<Object>;
    mergeToPrimitive<T extends Object | number | string | boolean>(arg0: T, arg1: T): DataResult<T>;
    remove(arg0: Object, arg1: string): Object;
    set<T extends Object | number | string | boolean>(arg0: T, arg1: string, arg2: T): T;
    toString(): string;
    update<T extends Object | number | string | boolean>(arg0: T, arg1: string, arg2: (param0: T) => T): T;
    updateGeneric<T extends Object | number | string | boolean>(arg0: T, arg1: T, arg2: (param0: T) => T): T;
    withDecoder(arg0: Decoder<E>): (param0: T) => DataResult<Pair<E, T>>;
    withEncoder(arg0: Encoder<E>): (param0: E) => DataResult<T>;
    withParser(arg0: Decoder<E>): (param0: T) => DataResult<E>;
}