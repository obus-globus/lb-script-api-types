import type { HashCode } from '../../../com/google/common/hash/HashCode.d.ts'
import type { HashFunction } from '../../../com/google/common/hash/HashFunction.d.ts'
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
export class HashOps extends Object implements DynamicOps<HashCode> {
    static CRC32C_INSTANCE: HashOps;
    static EMPTY_LIST_PAYLOAD: number[];
    static EMPTY_MAP_PAYLOAD: number[];
    constructor(hashFunction: HashFunction)
    // private empty: HashCode;
    // private emptyList: HashCode;
    // private emptyMap: HashCode;
    // private falseHash: HashCode;
    // private hashFunction: HashFunction;
    // private trueHash: HashCode;
    compressMaps(): boolean;
    convertList<U extends Object | number | string | boolean>(arg0: DynamicOps<U>, arg1: HashCode): U;
    convertMap<U extends Object | number | string | boolean>(arg0: DynamicOps<U>, arg1: HashCode): U;
    convertTo<U extends Object | number | string | boolean>(outOps: DynamicOps<U>, input: HashCode): U;
    createBoolean(arg0: boolean): HashCode;
    createBoolean(value: boolean): HashCode;
    createByte(arg0: number): HashCode;
    createByte(value: number): HashCode;
    createByteList(arg0: ByteBuffer): HashCode;
    createByteList(input: ByteBuffer): HashCode;
    createDouble(arg0: number): HashCode;
    createDouble(value: number): HashCode;
    createFloat(arg0: number): HashCode;
    createFloat(value: number): HashCode;
    createInt(arg0: number): HashCode;
    createInt(value: number): HashCode;
    createIntList(arg0: IntStream): HashCode;
    createIntList(input: IntStream): HashCode;
    createList(input: Stream<HashCode>): HashCode;
    createLong(arg0: number): HashCode;
    createLong(value: number): HashCode;
    createLongList(arg0: LongStream): HashCode;
    createLongList(input: LongStream): HashCode;
    createMap(arg0: Map<HashCode, HashCode>): HashCode;
    createMap(map: Stream<Pair<HashCode, HashCode>>): HashCode;
    createMap(map: Map<HashCode, HashCode>): HashCode;
    createNumeric(value: Number): HashCode;
    createShort(arg0: number): HashCode;
    createShort(value: number): HashCode;
    createString(value: string): HashCode;
    empty(): HashCode;
    emptyList(): HashCode;
    emptyMap(): HashCode;
    get(arg0: HashCode, arg1: string): DataResult<HashCode>;
    get(input: HashCode, key: string): DataResult<HashCode>;
    getBooleanValue(arg0: HashCode): DataResult<boolean>;
    getBooleanValue(input: HashCode): DataResult<boolean>;
    getByteBuffer(arg0: HashCode): DataResult<ByteBuffer>;
    getByteBuffer(input: HashCode): DataResult<ByteBuffer>;
    getGeneric(arg0: HashCode, arg1: HashCode): DataResult<HashCode>;
    getGeneric(input: HashCode, key: HashCode): DataResult<HashCode>;
    getIntStream(arg0: HashCode): DataResult<IntStream>;
    getIntStream(input: HashCode): DataResult<IntStream>;
    getList(arg0: HashCode): DataResult<(param0: Consumer<HashCode>) => void>;
    getList(input: HashCode): DataResult<(param0: Consumer<HashCode>) => void>;
    getLongStream(arg0: HashCode): DataResult<LongStream>;
    getLongStream(input: HashCode): DataResult<LongStream>;
    getMap(arg0: HashCode): DataResult<MapLike<HashCode>>;
    getMap(input: HashCode): DataResult<MapLike<HashCode>>;
    getMapEntries(arg0: HashCode): DataResult<(param0: (param0: HashCode, param1: HashCode) => void) => void>;
    getMapEntries(input: HashCode): DataResult<(param0: (param0: HashCode, param1: HashCode) => void) => void>;
    getMapValues(input: HashCode): DataResult<Stream<Pair<HashCode, HashCode>>>;
    getNumberValue(arg0: HashCode, arg1: Number): Number;
    getNumberValue(input: HashCode): DataResult<Number>;
    getNumberValue(input: HashCode, defaultValue: Number): Number;
    getStream(input: HashCode): DataResult<Stream<HashCode>>;
    getStringValue(input: HashCode): DataResult<string>;
    // private isEmpty(value: HashCode): boolean;
    listBuilder(): ListBuilder<HashCode>;
    mapBuilder(): RecordBuilder<HashCode>;
    mergeToList(arg0: HashCode, arg1: HashCode[]): DataResult<HashCode>;
    mergeToList(prefix: HashCode, value: HashCode): DataResult<HashCode>;
    mergeToList(prefix: HashCode, values: HashCode[]): DataResult<HashCode>;
    mergeToMap(arg0: HashCode, arg1: MapLike<HashCode>): DataResult<HashCode>;
    mergeToMap(arg0: HashCode, arg1: Map<HashCode, HashCode>): DataResult<HashCode>;
    mergeToMap(prefix: HashCode, key: HashCode, value: HashCode): DataResult<HashCode>;
    mergeToMap(prefix: HashCode, values: MapLike<HashCode>): DataResult<HashCode>;
    mergeToMap(prefix: HashCode, values: Map<HashCode, HashCode>): DataResult<HashCode>;
    mergeToPrimitive(arg0: HashCode, arg1: HashCode): DataResult<HashCode>;
    remove(input: HashCode, key: string): HashCode;
    set(arg0: HashCode, arg1: string, arg2: HashCode): HashCode;
    set(input: HashCode, key: string, value: HashCode): HashCode;
    toString(): string;
    update(arg0: HashCode, arg1: string, arg2: (param0: HashCode) => HashCode): HashCode;
    update(input: HashCode, key: string, function_: (param0: HashCode) => HashCode): HashCode;
    updateGeneric(arg0: HashCode, arg1: HashCode, arg2: (param0: HashCode) => HashCode): HashCode;
    updateGeneric(input: HashCode, key: HashCode, function_: (param0: HashCode) => HashCode): HashCode;
    withDecoder<E extends Object | number | string | boolean>(arg0: Decoder<E>): (param0: HashCode) => DataResult<Pair<E, HashCode>>;
    withEncoder<E extends Object | number | string | boolean>(arg0: Encoder<E>): (param0: E) => DataResult<HashCode>;
    withParser<E extends Object | number | string | boolean>(arg0: Decoder<E>): (param0: HashCode) => DataResult<E>;
}