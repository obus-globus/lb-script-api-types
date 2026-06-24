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
    convertList<U extends unknown>(arg0: DynamicOps<U>, arg1: Tag): U;
    convertMap<U extends unknown>(arg0: DynamicOps<U>, arg1: Tag): U;
    convertTo<U extends unknown>(outOps: DynamicOps<U>, input: Tag): U;
    createBoolean(value: boolean): Tag;
    createByte(arg0: number): Tag;
    createByte(value: number): Tag;
    createByteList(arg0: ByteBuffer): Tag;
    createByteList(input: ByteBuffer): Tag;
    createDouble(arg0: number): Tag;
    createDouble(value: number): Tag;
    createFloat(arg0: number): Tag;
    createFloat(value: number): Tag;
    createInt(arg0: number): Tag;
    createInt(value: number): Tag;
    createIntList(arg0: IntStream): Tag;
    createIntList(input: IntStream): Tag;
    createList(input: Stream<Tag>): Tag;
    createLong(arg0: number): Tag;
    createLong(value: number): Tag;
    createLongList(arg0: LongStream): Tag;
    createLongList(input: LongStream): Tag;
    createMap(arg0: Map<Tag, Tag>): Tag;
    createMap(map: Stream<Pair<Tag, Tag>>): Tag;
    createNumeric(i: Number): Tag;
    createShort(arg0: number): Tag;
    createShort(value: number): Tag;
    createString(value: string): Tag;
    empty(): Tag;
    emptyList(): Tag;
    emptyMap(): Tag;
    get(arg0: Tag, arg1: string): DataResult<Tag>;
    getBooleanValue(input: Tag): DataResult<boolean>;
    getByteBuffer(arg0: Tag): DataResult<ByteBuffer>;
    getByteBuffer(input: Tag): DataResult<ByteBuffer>;
    getGeneric(arg0: Tag, arg1: Tag): DataResult<Tag>;
    getIntStream(arg0: Tag): DataResult<IntStream>;
    getIntStream(input: Tag): DataResult<IntStream>;
    getList(arg0: Tag): DataResult<(param0: Consumer<Tag>) => void>;
    getList(input: Tag): DataResult<(param0: Consumer<Tag>) => void>;
    getLongStream(arg0: Tag): DataResult<LongStream>;
    getLongStream(input: Tag): DataResult<LongStream>;
    getMap(arg0: Tag): DataResult<MapLike<Tag>>;
    getMap(input: Tag): DataResult<MapLike<Tag>>;
    getMapEntries(arg0: Tag): DataResult<(param0: (param0: Tag, param1: Tag) => void) => void>;
    getMapEntries(input: Tag): DataResult<(param0: (param0: Tag, param1: Tag) => void) => void>;
    getMapValues(input: Tag): DataResult<Stream<Pair<Tag, Tag>>>;
    getNumberValue(arg0: Tag, arg1: Number): Number;
    getNumberValue(input: Tag): DataResult<Number>;
    getStream(input: Tag): DataResult<Stream<Tag>>;
    getStringValue(input: Tag): DataResult<string>;
    listBuilder(): ListBuilder<Tag>;
    mapBuilder(): RecordBuilder<Tag>;
    mergeToList(arg0: Tag, arg1: Tag[]): DataResult<Tag>;
    mergeToList(list: Tag, values: Tag[]): DataResult<Tag>;
    mergeToList(list: Tag, value: Tag): DataResult<Tag>;
    mergeToMap(arg0: Tag, arg1: MapLike<Tag>): DataResult<Tag>;
    mergeToMap(arg0: Tag, arg1: Map<Tag, Tag>): DataResult<Tag>;
    mergeToMap(map: Tag, values: MapLike<Tag>): DataResult<Tag>;
    mergeToMap(map: Tag, values: Map<Tag, Tag>): DataResult<Tag>;
    mergeToMap(map: Tag, key: Tag, value: Tag): DataResult<Tag>;
    mergeToPrimitive(arg0: Tag, arg1: Tag): DataResult<Tag>;
    remove(input: Tag, key: string): Tag;
    set(arg0: Tag, arg1: string, arg2: Tag): Tag;
    toString(): string;
    update(arg0: Tag, arg1: string, arg2: (param0: Tag) => Tag): Tag;
    updateGeneric(arg0: Tag, arg1: Tag, arg2: (param0: Tag) => Tag): Tag;
    withDecoder<E extends unknown>(arg0: Decoder<E>): (param0: Tag) => DataResult<Pair<E, Tag>>;
    withEncoder<E extends unknown>(arg0: Encoder<E>): (param0: E) => DataResult<Tag>;
    withParser<E extends unknown>(arg0: Decoder<E>): (param0: Tag) => DataResult<E>;
}