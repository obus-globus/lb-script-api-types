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
import type { Unit } from '../../../net/minecraft/util/Unit.d.ts'
export class NullOps extends Object implements DynamicOps<Unit> {
    static INSTANCE: NullOps;
    private constructor()
    compressMaps(): boolean;
    convertList<U extends Object | number | string | boolean, T extends Object | number | string | boolean>(arg0: DynamicOps<U>, arg1: T): U;
    convertMap<U extends Object | number | string | boolean, T extends Object | number | string | boolean>(arg0: DynamicOps<U>, arg1: T): U;
    convertTo<U extends Object | number | string | boolean>(outOps: DynamicOps<U>, input: Unit): U;
    createBoolean<T extends Object | number | string | boolean>(arg0: boolean): T;
    createBoolean(value: boolean): Unit;
    createByte<T extends Object | number | string | boolean>(arg0: number): T;
    createByte(value: number): Unit;
    createByteList<T extends Object | number | string | boolean>(arg0: ByteBuffer): T;
    createByteList(input: ByteBuffer): Unit;
    createDouble<T extends Object | number | string | boolean>(arg0: number): T;
    createDouble(value: number): Unit;
    createFloat<T extends Object | number | string | boolean>(arg0: number): T;
    createFloat(value: number): Unit;
    createInt<T extends Object | number | string | boolean>(arg0: number): T;
    createInt(value: number): Unit;
    createIntList<T extends Object | number | string | boolean>(arg0: IntStream): T;
    createIntList(input: IntStream): Unit;
    createList(input: Stream<Unit>): Unit;
    createLong<T extends Object | number | string | boolean>(arg0: number): T;
    createLong(value: number): Unit;
    createLongList<T extends Object | number | string | boolean>(arg0: LongStream): T;
    createLongList(input: LongStream): Unit;
    createMap<T extends Object | number | string | boolean>(arg0: Map<T, T>): T;
    createMap(map: Stream<Pair<Unit, Unit>>): Unit;
    createMap(map: { [key in Unit]: Unit }): Unit;
    createNumeric(value: Number): Unit;
    createShort<T extends Object | number | string | boolean>(arg0: number): T;
    createShort(value: number): Unit;
    createString(value: string): Unit;
    empty(): Unit;
    emptyList<T extends Object | number | string | boolean>(): T;
    emptyList(): Unit;
    emptyMap<T extends Object | number | string | boolean>(): T;
    emptyMap(): Unit;
    get<T extends Object | number | string | boolean>(arg0: T, arg1: string): DataResult<T>;
    getBooleanValue<T extends Object | number | string | boolean>(arg0: T): DataResult<boolean>;
    getBooleanValue(input: Unit): DataResult<boolean>;
    getByteBuffer<T extends Object | number | string | boolean>(arg0: T): DataResult<ByteBuffer>;
    getByteBuffer(input: Unit): DataResult<ByteBuffer>;
    getGeneric<T extends Object | number | string | boolean>(arg0: T, arg1: T): DataResult<T>;
    getIntStream<T extends Object | number | string | boolean>(arg0: T): DataResult<IntStream>;
    getIntStream(input: Unit): DataResult<IntStream>;
    getList<T extends Object | number | string | boolean>(arg0: T): DataResult<(param0: (param0: T) => void) => void>;
    getList(input: Unit): DataResult<(param0: (param0: Unit) => void) => void>;
    getLongStream<T extends Object | number | string | boolean>(arg0: T): DataResult<LongStream>;
    getLongStream(input: Unit): DataResult<LongStream>;
    getMap<T extends Object | number | string | boolean>(arg0: T): DataResult<MapLike<T>>;
    getMap(input: Unit): DataResult<MapLike<Unit>>;
    getMapEntries<T extends Object | number | string | boolean>(arg0: T): DataResult<(param0: (param0: T, param1: T) => void) => void>;
    getMapEntries(input: Unit): DataResult<(param0: (param0: Unit, param1: Unit) => void) => void>;
    getMapValues(input: Unit): DataResult<Stream<Pair<Unit, Unit>>>;
    getNumberValue<T extends Object | number | string | boolean>(arg0: T, arg1: Number): Number;
    getNumberValue(input: Unit): DataResult<Number>;
    getStream(input: Unit): DataResult<Stream<Unit>>;
    getStringValue(input: Unit): DataResult<string>;
    listBuilder(): ListBuilder<T>;
    listBuilder(): ListBuilder<Unit>;
    mapBuilder(): RecordBuilder<T>;
    mapBuilder(): RecordBuilder<Unit>;
    mergeToList<T extends Object | number | string | boolean>(arg0: T, arg1: T[]): DataResult<T>;
    mergeToList(input: Unit, values: Unit[]): DataResult<Unit>;
    mergeToList(input: Unit, value: Unit): DataResult<Unit>;
    mergeToMap<T extends Object | number | string | boolean>(arg0: T, arg1: MapLike<T>): DataResult<T>;
    mergeToMap<T extends Object | number | string | boolean>(arg0: T, arg1: Map<T, T>): DataResult<T>;
    mergeToMap(input: Unit, values: MapLike<Unit>): DataResult<Unit>;
    mergeToMap(input: Unit, values: { [key in Unit]: Unit }): DataResult<Unit>;
    mergeToMap(input: Unit, key: Unit, value: Unit): DataResult<Unit>;
    mergeToPrimitive<T extends Object | number | string | boolean>(arg0: T, arg1: T): DataResult<T>;
    remove(input: Unit, key: string): Unit;
    set<T extends Object | number | string | boolean>(arg0: T, arg1: string, arg2: T): T;
    toString(): string;
    update<T extends Object | number | string | boolean>(arg0: T, arg1: string, arg2: (param0: T) => T): T;
    updateGeneric<T extends Object | number | string | boolean>(arg0: T, arg1: T, arg2: (param0: T) => T): T;
    withDecoder(arg0: Decoder<E>): (param0: T) => DataResult<Pair<E, T>>;
    withEncoder(arg0: Encoder<E>): (param0: E) => DataResult<T>;
    withParser(arg0: Decoder<E>): (param0: T) => DataResult<E>;
}