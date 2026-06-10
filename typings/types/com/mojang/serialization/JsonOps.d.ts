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
    convertList<U extends Object | number | string | boolean>(arg0: DynamicOps<U>, arg1: JsonElement): U;
    convertMap<U extends Object | number | string | boolean>(arg0: DynamicOps<U>, arg1: JsonElement): U;
    convertTo<U extends Object | number | string | boolean>(arg0: DynamicOps<U>, arg1: JsonElement): U;
    createBoolean(arg0: boolean): JsonElement;
    createByte(arg0: number): JsonElement;
    createByteList(arg0: ByteBuffer): JsonElement;
    createDouble(arg0: number): JsonElement;
    createFloat(arg0: number): JsonElement;
    createInt(arg0: number): JsonElement;
    createIntList(arg0: IntStream): JsonElement;
    createList(arg0: Stream<JsonElement>): JsonElement;
    createLong(arg0: number): JsonElement;
    createLongList(arg0: LongStream): JsonElement;
    createMap(arg0: Map<JsonElement, JsonElement>): JsonElement;
    createMap(arg0: Stream<Pair<JsonElement, JsonElement>>): JsonElement;
    createNumeric(arg0: Number): JsonElement;
    createShort(arg0: number): JsonElement;
    createString(arg0: string): JsonElement;
    empty(): JsonElement;
    emptyList(): JsonElement;
    emptyMap(): JsonElement;
    get(arg0: JsonElement, arg1: string): DataResult<JsonElement>;
    getBooleanValue(arg0: JsonElement): DataResult<boolean>;
    getByteBuffer(arg0: JsonElement): DataResult<ByteBuffer>;
    getGeneric(arg0: JsonElement, arg1: JsonElement): DataResult<JsonElement>;
    getIntStream(arg0: JsonElement): DataResult<IntStream>;
    getList(arg0: JsonElement): DataResult<(param0: Consumer<JsonElement>) => void>;
    getLongStream(arg0: JsonElement): DataResult<LongStream>;
    getMap(arg0: JsonElement): DataResult<MapLike<JsonElement>>;
    getMapEntries(arg0: JsonElement): DataResult<(param0: (param0: JsonElement, param1: JsonElement) => void) => void>;
    getMapValues(arg0: JsonElement): DataResult<Stream<Pair<JsonElement, JsonElement>>>;
    getNumberValue(arg0: JsonElement, arg1: Number): Number;
    getNumberValue(arg0: JsonElement): DataResult<Number>;
    getStream(arg0: JsonElement): DataResult<Stream<JsonElement>>;
    getStringValue(arg0: JsonElement): DataResult<string>;
    listBuilder(): ListBuilder<JsonElement>;
    mapBuilder(): RecordBuilder<JsonElement>;
    mergeToList(arg0: JsonElement, arg1: JsonElement[]): DataResult<JsonElement>;
    mergeToList(arg0: JsonElement, arg1: JsonElement): DataResult<JsonElement>;
    mergeToMap(arg0: JsonElement, arg1: MapLike<JsonElement>): DataResult<JsonElement>;
    mergeToMap(arg0: JsonElement, arg1: Map<JsonElement, JsonElement>): DataResult<JsonElement>;
    mergeToMap(arg0: JsonElement, arg1: JsonElement, arg2: JsonElement): DataResult<JsonElement>;
    mergeToPrimitive(arg0: JsonElement, arg1: JsonElement): DataResult<JsonElement>;
    remove(arg0: JsonElement, arg1: string): JsonElement;
    set(arg0: JsonElement, arg1: string, arg2: JsonElement): JsonElement;
    toString(): string;
    update(arg0: JsonElement, arg1: string, arg2: (param0: JsonElement) => JsonElement): JsonElement;
    updateGeneric(arg0: JsonElement, arg1: JsonElement, arg2: (param0: JsonElement) => JsonElement): JsonElement;
    withDecoder<E extends Object | number | string | boolean>(arg0: Decoder<E>): (param0: JsonElement) => DataResult<Pair<E, JsonElement>>;
    withEncoder<E extends Object | number | string | boolean>(arg0: Encoder<E>): (param0: E) => DataResult<JsonElement>;
    withParser<E extends Object | number | string | boolean>(arg0: Decoder<E>): (param0: JsonElement) => DataResult<E>;
}