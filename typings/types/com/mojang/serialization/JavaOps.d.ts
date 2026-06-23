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
    convertList<U extends unknown>(arg0: DynamicOps<U>, arg1: Object): U;
    convertMap<U extends unknown>(arg0: DynamicOps<U>, arg1: Object): U;
    convertTo<U extends unknown>(arg0: DynamicOps<U>, arg1: Object): U;
    createBoolean(arg0: boolean): Object;
    createByte(arg0: number): Object;
    createByteList(arg0: ByteBuffer): Object;
    createDouble(arg0: number): Object;
    createFloat(arg0: number): Object;
    createInt(arg0: number): Object;
    createIntList(arg0: IntStream): Object;
    createList(arg0: Stream<Object>): Object;
    createLong(arg0: number): Object;
    createLongList(arg0: LongStream): Object;
    createMap(arg0: Map<Object, Object>): Object;
    createMap(arg0: Stream<Pair<Object, Object>>): Object;
    createNumeric(arg0: Number): Object;
    createShort(arg0: number): Object;
    createString(arg0: string): Object;
    empty(): Object;
    emptyList(): Object;
    emptyMap(): Object;
    get(arg0: Object, arg1: string): DataResult<Object>;
    getBooleanValue(arg0: Object): DataResult<boolean>;
    getByteBuffer(arg0: Object): DataResult<ByteBuffer>;
    getGeneric(arg0: Object, arg1: Object): DataResult<Object>;
    getIntStream(arg0: Object): DataResult<IntStream>;
    getList(arg0: Object): DataResult<(param0: Consumer<Object>) => void>;
    getLongStream(arg0: Object): DataResult<LongStream>;
    getMap(arg0: Object): DataResult<MapLike<Object>>;
    getMapEntries(arg0: Object): DataResult<(param0: (param0: Object, param1: Object) => void) => void>;
    getMapValues(arg0: Object): DataResult<Stream<Pair<Object, Object>>>;
    getNumberValue(arg0: Object, arg1: Number): Number;
    getNumberValue(arg0: Object): DataResult<Number>;
    getStream(arg0: Object): DataResult<Stream<Object>>;
    getStringValue(arg0: Object): DataResult<string>;
    listBuilder(): ListBuilder<Object>;
    mapBuilder(): RecordBuilder<Object>;
    mergeToList(arg0: Object, arg1: Object[]): DataResult<Object>;
    mergeToList(arg0: Object, arg1: Object): DataResult<Object>;
    mergeToMap(arg0: Object, arg1: MapLike<Object>): DataResult<Object>;
    mergeToMap(arg0: Object, arg1: Map<Object, Object>): DataResult<Object>;
    mergeToMap(arg0: Object, arg1: Object, arg2: Object): DataResult<Object>;
    mergeToPrimitive(arg0: Object, arg1: Object): DataResult<Object>;
    remove(arg0: Object, arg1: string): Object;
    set(arg0: Object, arg1: string, arg2: Object): Object;
    toString(): string;
    update(arg0: Object, arg1: string, arg2: (param0: Object) => Object): Object;
    updateGeneric(arg0: Object, arg1: Object, arg2: (param0: Object) => Object): Object;
    withDecoder<E extends unknown>(arg0: Decoder<E>): (param0: Object) => DataResult<Pair<E, Object>>;
    withEncoder<E extends unknown>(arg0: Encoder<E>): (param0: E) => DataResult<Object>;
    withParser<E extends unknown>(arg0: Decoder<E>): (param0: Object) => DataResult<E>;
}