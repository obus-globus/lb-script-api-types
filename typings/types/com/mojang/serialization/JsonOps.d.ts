import type { JsonElement } from '../../../com/google/gson/JsonElement.d.ts'
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
export class JsonOps extends Object implements DynamicOps<JsonElement> {
    static COMPRESSED: JsonOps;
    static INSTANCE: JsonOps;
    constructor(arg0: boolean)
    // private compressed: boolean;
    compressMaps(): boolean;
    compressMaps(): boolean;
    convertList<U extends Object | number | string | boolean, T extends Object | number | string | boolean>(arg0: DynamicOps<U>, arg1: T): U;
    convertMap<U extends Object | number | string | boolean, T extends Object | number | string | boolean>(arg0: DynamicOps<U>, arg1: T): U;
    convertTo<U extends Object | number | string | boolean>(arg0: DynamicOps<U>, arg1: JsonElement): U;
    createBoolean<T extends Object | number | string | boolean>(arg0: boolean): T;
    createBoolean(arg0: boolean): JsonElement;
    createByte<T extends Object | number | string | boolean>(arg0: number): T;
    createByteList<T extends Object | number | string | boolean>(arg0: ByteBuffer): T;
    createDouble<T extends Object | number | string | boolean>(arg0: number): T;
    createFloat<T extends Object | number | string | boolean>(arg0: number): T;
    createInt<T extends Object | number | string | boolean>(arg0: number): T;
    createIntList<T extends Object | number | string | boolean>(arg0: IntStream): T;
    createList(arg0: Stream<JsonElement>): JsonElement;
    createLong<T extends Object | number | string | boolean>(arg0: number): T;
    createLongList<T extends Object | number | string | boolean>(arg0: LongStream): T;
    createMap<T extends Object | number | string | boolean>(arg0: Map<T, T>): T;
    createMap(arg0: Stream<Pair<JsonElement, JsonElement>>): JsonElement;
    createNumeric(arg0: Number): JsonElement;
    createShort<T extends Object | number | string | boolean>(arg0: number): T;
    createString(arg0: string): JsonElement;
    empty(): JsonElement;
    emptyList<T extends Object | number | string | boolean>(): T;
    emptyList(): JsonElement;
    emptyMap<T extends Object | number | string | boolean>(): T;
    emptyMap(): JsonElement;
    get<T extends Object | number | string | boolean>(arg0: T, arg1: string): DataResult<T>;
    getBooleanValue<T extends Object | number | string | boolean>(arg0: T): DataResult<boolean>;
    getBooleanValue(arg0: JsonElement): DataResult<boolean>;
    getByteBuffer<T extends Object | number | string | boolean>(arg0: T): DataResult<ByteBuffer>;
    getGeneric<T extends Object | number | string | boolean>(arg0: T, arg1: T): DataResult<T>;
    getIntStream<T extends Object | number | string | boolean>(arg0: T): DataResult<IntStream>;
    getList<T extends Object | number | string | boolean>(arg0: T): DataResult<(param0: (param0: T) => void) => void>;
    getList(arg0: JsonElement): DataResult<(param0: (param0: JsonElement) => void) => void>;
    getLongStream<T extends Object | number | string | boolean>(arg0: T): DataResult<LongStream>;
    getMap<T extends Object | number | string | boolean>(arg0: T): DataResult<MapLike<T>>;
    getMap(arg0: JsonElement): DataResult<MapLike<JsonElement>>;
    getMapEntries<T extends Object | number | string | boolean>(arg0: T): DataResult<(param0: (param0: T, param1: T) => void) => void>;
    getMapEntries(arg0: JsonElement): DataResult<(param0: (param0: JsonElement, param1: JsonElement) => void) => void>;
    getMapValues(arg0: JsonElement): DataResult<Stream<Pair<JsonElement, JsonElement>>>;
    getNumberValue<T extends Object | number | string | boolean>(arg0: T, arg1: Number): Number;
    getNumberValue(arg0: JsonElement): DataResult<Number>;
    getStream(arg0: JsonElement): DataResult<Stream<JsonElement>>;
    getStringValue(arg0: JsonElement): DataResult<string>;
    listBuilder(): ListBuilder<T>;
    listBuilder(): ListBuilder<JsonElement>;
    mapBuilder(): RecordBuilder<T>;
    mapBuilder(): RecordBuilder<JsonElement>;
    mergeToList<T extends Object | number | string | boolean>(arg0: T, arg1: T[]): DataResult<T>;
    mergeToList(arg0: JsonElement, arg1: JsonElement): DataResult<JsonElement>;
    mergeToList(arg0: JsonElement, arg1: JsonElement[]): DataResult<JsonElement>;
    mergeToMap<T extends Object | number | string | boolean>(arg0: T, arg1: MapLike<T>): DataResult<T>;
    mergeToMap<T extends Object | number | string | boolean>(arg0: T, arg1: Map<T, T>): DataResult<T>;
    mergeToMap(arg0: JsonElement, arg1: JsonElement, arg2: JsonElement): DataResult<JsonElement>;
    mergeToMap(arg0: JsonElement, arg1: MapLike<JsonElement>): DataResult<JsonElement>;
    mergeToPrimitive<T extends Object | number | string | boolean>(arg0: T, arg1: T): DataResult<T>;
    remove(arg0: JsonElement, arg1: string): JsonElement;
    set<T extends Object | number | string | boolean>(arg0: T, arg1: string, arg2: T): T;
    toString(): string;
    update<T extends Object | number | string | boolean>(arg0: T, arg1: string, arg2: (param0: T) => T): T;
    updateGeneric<T extends Object | number | string | boolean>(arg0: T, arg1: T, arg2: (param0: T) => T): T;
    withDecoder(arg0: Decoder<E>): (param0: T) => DataResult<Pair<E, T>>;
    withEncoder(arg0: Encoder<E>): (param0: E) => DataResult<T>;
    withParser(arg0: Decoder<E>): (param0: T) => DataResult<E>;
}