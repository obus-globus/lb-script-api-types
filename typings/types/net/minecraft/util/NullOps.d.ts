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
import type { Unit } from '../../../net/minecraft/util/Unit.d.ts'
export class NullOps extends Object implements DynamicOps<Unit> {
    static INSTANCE: NullOps;
    private constructor()
    compressMaps(): boolean;
    convertList<U extends unknown>(arg0: DynamicOps<U>, arg1: Unit): U;
    convertMap<U extends unknown>(arg0: DynamicOps<U>, arg1: Unit): U;
    convertTo<U extends unknown>(outOps: DynamicOps<U>, input: Unit): U;
    createBoolean(value: boolean): Unit;
    createByte(arg0: number): Unit;
    createByte(value: number): Unit;
    createByteList(arg0: ByteBuffer): Unit;
    createByteList(input: ByteBuffer): Unit;
    createDouble(arg0: number): Unit;
    createDouble(value: number): Unit;
    createFloat(arg0: number): Unit;
    createFloat(value: number): Unit;
    createInt(arg0: number): Unit;
    createInt(value: number): Unit;
    createIntList(arg0: IntStream): Unit;
    createIntList(input: IntStream): Unit;
    createList(input: Stream<Unit>): Unit;
    createLong(arg0: number): Unit;
    createLong(value: number): Unit;
    createLongList(arg0: LongStream): Unit;
    createLongList(input: LongStream): Unit;
    createMap(arg0: JavaMap<Unit, Unit>): Unit;
    createMap(map: Stream<Pair<Unit, Unit>>): Unit;
    createMap(map: JavaMap<Unit, Unit>): Unit;
    createNumeric(value: Number): Unit;
    createShort(arg0: number): Unit;
    createShort(value: number): Unit;
    createString(value: string): Unit;
    empty(): Unit;
    emptyList(): Unit;
    emptyMap(): Unit;
    get(arg0: Unit, arg1: string): DataResult<Unit>;
    getBooleanValue(input: Unit): DataResult<boolean>;
    getByteBuffer(arg0: Unit): DataResult<ByteBuffer>;
    getByteBuffer(input: Unit): DataResult<ByteBuffer>;
    getGeneric(arg0: Unit, arg1: Unit): DataResult<Unit>;
    getIntStream(arg0: Unit): DataResult<IntStream>;
    getIntStream(input: Unit): DataResult<IntStream>;
    getList(arg0: Unit): DataResult<(param0: Consumer<Unit>) => void>;
    getList(input: Unit): DataResult<(param0: Consumer<Unit>) => void>;
    getLongStream(arg0: Unit): DataResult<LongStream>;
    getLongStream(input: Unit): DataResult<LongStream>;
    getMap(arg0: Unit): DataResult<MapLike<Unit>>;
    getMap(input: Unit): DataResult<MapLike<Unit>>;
    getMapEntries(arg0: Unit): DataResult<(param0: (param0: Unit, param1: Unit) => void) => void>;
    getMapEntries(input: Unit): DataResult<(param0: (param0: Unit, param1: Unit) => void) => void>;
    getMapValues(input: Unit): DataResult<Stream<Pair<Unit, Unit>>>;
    getNumberValue(arg0: Unit, arg1: Number): Number;
    getNumberValue(input: Unit): DataResult<Number>;
    getStream(input: Unit): DataResult<Stream<Unit>>;
    getStringValue(input: Unit): DataResult<string>;
    listBuilder(): ListBuilder<Unit>;
    mapBuilder(): RecordBuilder<Unit>;
    mergeToList(arg0: Unit, arg1: Unit[]): DataResult<Unit>;
    mergeToList(input: Unit, values: Unit[]): DataResult<Unit>;
    mergeToList(input: Unit, value: Unit): DataResult<Unit>;
    mergeToMap(arg0: Unit, arg1: MapLike<Unit>): DataResult<Unit>;
    mergeToMap(arg0: Unit, arg1: JavaMap<Unit, Unit>): DataResult<Unit>;
    mergeToMap(input: Unit, values: MapLike<Unit>): DataResult<Unit>;
    mergeToMap(input: Unit, values: JavaMap<Unit, Unit>): DataResult<Unit>;
    mergeToMap(input: Unit, key: Unit, value: Unit): DataResult<Unit>;
    mergeToPrimitive(arg0: Unit, arg1: Unit): DataResult<Unit>;
    remove(input: Unit, key: string): Unit;
    set(arg0: Unit, arg1: string, arg2: Unit): Unit;
    toString(): string;
    update(arg0: Unit, arg1: string, arg2: (param0: Unit) => Unit): Unit;
    updateGeneric(arg0: Unit, arg1: Unit, arg2: (param0: Unit) => Unit): Unit;
    withDecoder<E extends unknown>(arg0: Decoder<E>): (param0: Unit) => DataResult<Pair<E, Unit>>;
    withEncoder<E extends unknown>(arg0: Encoder<E>): (param0: E) => DataResult<Unit>;
    withParser<E extends unknown>(arg0: Decoder<E>): (param0: Unit) => DataResult<E>;
}