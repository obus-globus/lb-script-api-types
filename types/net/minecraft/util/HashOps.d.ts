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
    convertList<U extends Object | number | string | boolean, T extends Object | number | string | boolean>(arg0: DynamicOps<U>, arg1: T): U;
    convertMap<U extends Object | number | string | boolean, T extends Object | number | string | boolean>(arg0: DynamicOps<U>, arg1: T): U;
    convertTo<U extends Object | number | string | boolean>(outOps: DynamicOps<U>, input: HashCode): U;
    createBoolean<T extends Object | number | string | boolean>(arg0: boolean): T;
    createBoolean(value: boolean): HashCode;
    createByte<T extends Object | number | string | boolean>(arg0: number): T;
    createByte(value: number): HashCode;
    createByteList<T extends Object | number | string | boolean>(arg0: ByteBuffer): T;
    createByteList(input: ByteBuffer): HashCode;
    createDouble<T extends Object | number | string | boolean>(arg0: number): T;
    createDouble(value: number): HashCode;
    createFloat<T extends Object | number | string | boolean>(arg0: number): T;
    createFloat(value: number): HashCode;
    createInt<T extends Object | number | string | boolean>(arg0: number): T;
    createInt(value: number): HashCode;
    createIntList<T extends Object | number | string | boolean>(arg0: IntStream): T;
    createIntList(input: IntStream): HashCode;
    createList(input: Stream<HashCode>): HashCode;
    createLong<T extends Object | number | string | boolean>(arg0: number): T;
    createLong(value: number): HashCode;
    createLongList<T extends Object | number | string | boolean>(arg0: LongStream): T;
    createLongList(input: LongStream): HashCode;
    createMap<T extends Object | number | string | boolean>(arg0: Map<T, T>): T;
    createMap(map: Stream<Pair<HashCode, HashCode>>): HashCode;
    createMap(map: Map<HashCode, HashCode>): HashCode;
    createNumeric(value: Number): HashCode;
    createShort<T extends Object | number | string | boolean>(arg0: number): T;
    createShort(value: number): HashCode;
    createString(value: string): HashCode;
    empty(): HashCode;
    emptyList<T extends Object | number | string | boolean>(): T;
    emptyList(): HashCode;
    emptyMap<T extends Object | number | string | boolean>(): T;
    emptyMap(): HashCode;
    get<T extends Object | number | string | boolean>(arg0: T, arg1: string): DataResult<T>;
    get(input: HashCode, key: string): DataResult<HashCode>;
    getBooleanValue<T extends Object | number | string | boolean>(arg0: T): DataResult<boolean>;
    getBooleanValue(input: HashCode): DataResult<boolean>;
    getByteBuffer<T extends Object | number | string | boolean>(arg0: T): DataResult<ByteBuffer>;
    getByteBuffer(input: HashCode): DataResult<ByteBuffer>;
    getGeneric<T extends Object | number | string | boolean>(arg0: T, arg1: T): DataResult<T>;
    getGeneric(input: HashCode, key: HashCode): DataResult<HashCode>;
    getIntStream<T extends Object | number | string | boolean>(arg0: T): DataResult<IntStream>;
    getIntStream(input: HashCode): DataResult<IntStream>;
    getList<T extends Object | number | string | boolean>(arg0: T): DataResult<(param0: (param0: T) => void) => void>;
    getList(input: HashCode): DataResult<(param0: (param0: HashCode) => void) => void>;
    getLongStream<T extends Object | number | string | boolean>(arg0: T): DataResult<LongStream>;
    getLongStream(input: HashCode): DataResult<LongStream>;
    getMap<T extends Object | number | string | boolean>(arg0: T): DataResult<MapLike<T>>;
    getMap(input: HashCode): DataResult<MapLike<HashCode>>;
    getMapEntries<T extends Object | number | string | boolean>(arg0: T): DataResult<(param0: (param0: T, param1: T) => void) => void>;
    getMapEntries(input: HashCode): DataResult<(param0: (param0: HashCode, param1: HashCode) => void) => void>;
    getMapValues(input: HashCode): DataResult<Stream<Pair<HashCode, HashCode>>>;
    getNumberValue<T extends Object | number | string | boolean>(arg0: T, arg1: Number): Number;
    getNumberValue(input: HashCode): DataResult<Number>;
    getNumberValue(input: HashCode, defaultValue: Number): Number;
    getStream(input: HashCode): DataResult<Stream<HashCode>>;
    getStringValue(input: HashCode): DataResult<string>;
    // private isEmpty(value: HashCode): boolean;
    listBuilder(): ListBuilder<T>;
    listBuilder(): ListBuilder<HashCode>;
    mapBuilder(): RecordBuilder<T>;
    mapBuilder(): RecordBuilder<HashCode>;
    mergeToList<T extends Object | number | string | boolean>(arg0: T, arg1: T[]): DataResult<T>;
    mergeToList(prefix: HashCode, value: HashCode): DataResult<HashCode>;
    mergeToList(prefix: HashCode, values: HashCode[]): DataResult<HashCode>;
    mergeToMap<T extends Object | number | string | boolean>(arg0: T, arg1: MapLike<T>): DataResult<T>;
    mergeToMap<T extends Object | number | string | boolean>(arg0: T, arg1: Map<T, T>): DataResult<T>;
    mergeToMap(prefix: HashCode, key: HashCode, value: HashCode): DataResult<HashCode>;
    mergeToMap(prefix: HashCode, values: MapLike<HashCode>): DataResult<HashCode>;
    mergeToMap(prefix: HashCode, values: Map<HashCode, HashCode>): DataResult<HashCode>;
    mergeToPrimitive<T extends Object | number | string | boolean>(arg0: T, arg1: T): DataResult<T>;
    remove(input: HashCode, key: string): HashCode;
    set<T extends Object | number | string | boolean>(arg0: T, arg1: string, arg2: T): T;
    set(input: HashCode, key: string, value: HashCode): HashCode;
    toString(): string;
    update<T extends Object | number | string | boolean>(arg0: T, arg1: string, arg2: (param0: T) => T): T;
    update(input: HashCode, key: string, function_: (param0: HashCode) => HashCode): HashCode;
    updateGeneric<T extends Object | number | string | boolean>(arg0: T, arg1: T, arg2: (param0: T) => T): T;
    updateGeneric(input: HashCode, key: HashCode, function_: (param0: HashCode) => HashCode): HashCode;
    withDecoder(arg0: Decoder<E>): (param0: T) => DataResult<Pair<E, T>>;
    withEncoder(arg0: Encoder<E>): (param0: E) => DataResult<T>;
    withParser(arg0: Decoder<E>): (param0: T) => DataResult<E>;
}