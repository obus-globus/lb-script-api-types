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
import type { Tag } from '../../../net/minecraft/nbt/Tag.d.ts'
export class NbtOps extends Object implements DynamicOps<Tag> {
    static INSTANCE: NbtOps;
    private constructor()
    compressMaps(): boolean;
    convertList<U extends Object | number | string | boolean, T extends Object | number | string | boolean>(arg0: DynamicOps<U>, arg1: T): U;
    convertMap<U extends Object | number | string | boolean, T extends Object | number | string | boolean>(arg0: DynamicOps<U>, arg1: T): U;
    convertTo<U extends Object | number | string | boolean>(outOps: DynamicOps<U>, input: Tag): U;
    createBoolean<T extends Object | number | string | boolean>(arg0: boolean): T;
    createBoolean(value: boolean): Tag;
    createByte<T extends Object | number | string | boolean>(arg0: number): T;
    createByte(value: number): Tag;
    createByteList<T extends Object | number | string | boolean>(arg0: ByteBuffer): T;
    createByteList(input: ByteBuffer): Tag;
    createDouble<T extends Object | number | string | boolean>(arg0: number): T;
    createDouble(value: number): Tag;
    createFloat<T extends Object | number | string | boolean>(arg0: number): T;
    createFloat(value: number): Tag;
    createInt<T extends Object | number | string | boolean>(arg0: number): T;
    createInt(value: number): Tag;
    createIntList<T extends Object | number | string | boolean>(arg0: IntStream): T;
    createIntList(input: IntStream): Tag;
    createList(input: Stream<Tag>): Tag;
    createLong<T extends Object | number | string | boolean>(arg0: number): T;
    createLong(value: number): Tag;
    createLongList<T extends Object | number | string | boolean>(arg0: LongStream): T;
    createLongList(input: LongStream): Tag;
    createMap<T extends Object | number | string | boolean>(arg0: Map<T, T>): T;
    createMap(map: Stream<Pair<Tag, Tag>>): Tag;
    createNumeric(i: Number): Tag;
    createShort<T extends Object | number | string | boolean>(arg0: number): T;
    createShort(value: number): Tag;
    createString(value: string): Tag;
    empty(): Tag;
    emptyList<T extends Object | number | string | boolean>(): T;
    emptyList(): Tag;
    emptyMap<T extends Object | number | string | boolean>(): T;
    emptyMap(): Tag;
    get<T extends Object | number | string | boolean>(arg0: T, arg1: string): DataResult<T>;
    getBooleanValue<T extends Object | number | string | boolean>(arg0: T): DataResult<boolean>;
    getByteBuffer<T extends Object | number | string | boolean>(arg0: T): DataResult<ByteBuffer>;
    getByteBuffer(input: Tag): DataResult<ByteBuffer>;
    getGeneric<T extends Object | number | string | boolean>(arg0: T, arg1: T): DataResult<T>;
    getIntStream<T extends Object | number | string | boolean>(arg0: T): DataResult<IntStream>;
    getIntStream(input: Tag): DataResult<IntStream>;
    getList<T extends Object | number | string | boolean>(arg0: T): DataResult<(param0: (param0: T) => void) => void>;
    getList(input: Tag): DataResult<(param0: (param0: Tag) => void) => void>;
    getLongStream<T extends Object | number | string | boolean>(arg0: T): DataResult<LongStream>;
    getLongStream(input: Tag): DataResult<LongStream>;
    getMap<T extends Object | number | string | boolean>(arg0: T): DataResult<MapLike<T>>;
    getMap(input: Tag): DataResult<MapLike<Tag>>;
    getMapEntries<T extends Object | number | string | boolean>(arg0: T): DataResult<(param0: (param0: T, param1: T) => void) => void>;
    getMapEntries(input: Tag): DataResult<(param0: (param0: Tag, param1: Tag) => void) => void>;
    getMapValues(input: Tag): DataResult<Stream<Pair<Tag, Tag>>>;
    getNumberValue<T extends Object | number | string | boolean>(arg0: T, arg1: Number): Number;
    getNumberValue(input: Tag): DataResult<Number>;
    getStream(input: Tag): DataResult<Stream<Tag>>;
    getStringValue(input: Tag): DataResult<string>;
    listBuilder(): ListBuilder<T>;
    mapBuilder(): RecordBuilder<T>;
    mapBuilder(): RecordBuilder<Tag>;
    mergeToList<T extends Object | number | string | boolean>(arg0: T, arg1: T[]): DataResult<T>;
    mergeToList(list: Tag, values: Tag[]): DataResult<Tag>;
    mergeToList(list: Tag, value: Tag): DataResult<Tag>;
    mergeToMap<T extends Object | number | string | boolean>(arg0: T, arg1: MapLike<T>): DataResult<T>;
    mergeToMap<T extends Object | number | string | boolean>(arg0: T, arg1: Map<T, T>): DataResult<T>;
    mergeToMap(map: Tag, values: MapLike<Tag>): DataResult<Tag>;
    mergeToMap(map: Tag, values: Map<Tag, Tag>): DataResult<Tag>;
    mergeToMap(map: Tag, key: Tag, value: Tag): DataResult<Tag>;
    mergeToPrimitive<T extends Object | number | string | boolean>(arg0: T, arg1: T): DataResult<T>;
    remove(input: Tag, key: string): Tag;
    set<T extends Object | number | string | boolean>(arg0: T, arg1: string, arg2: T): T;
    toString(): string;
    update<T extends Object | number | string | boolean>(arg0: T, arg1: string, arg2: (param0: T) => T): T;
    updateGeneric<T extends Object | number | string | boolean>(arg0: T, arg1: T, arg2: (param0: T) => T): T;
    withDecoder(arg0: Decoder<E>): (param0: T) => DataResult<Pair<E, T>>;
    withEncoder(arg0: Encoder<E>): (param0: E) => DataResult<T>;
    withParser(arg0: Decoder<E>): (param0: T) => DataResult<E>;
}