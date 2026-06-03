import type { Either } from '../../../../com/mojang/datafixers/util/Either.d.ts'
import type { Pair } from '../../../../com/mojang/datafixers/util/Pair.d.ts'
import type { DataResult } from '../../../../com/mojang/serialization/DataResult.d.ts'
import type { Decoder } from '../../../../com/mojang/serialization/Decoder.d.ts'
import type { DynamicOps } from '../../../../com/mojang/serialization/DynamicOps.d.ts'
import type { Encoder } from '../../../../com/mojang/serialization/Encoder.d.ts'
import type { ListBuilder } from '../../../../com/mojang/serialization/ListBuilder.d.ts'
import type { MapLike } from '../../../../com/mojang/serialization/MapLike.d.ts'
import type { RecordBuilder } from '../../../../com/mojang/serialization/RecordBuilder.d.ts'
import type { StringArgs } from '../../../../eu/pb4/placeholders/api/arguments/StringArgs.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { BiConsumer } from '../../../../java/util/function/BiConsumer.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { IntStream } from '../../../../java/util/stream/IntStream.d.ts'
import type { LongStream } from '../../../../java/util/stream/LongStream.d.ts'
import type { Stream } from '../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Number } from '../../../../java/lang/Number.d.ts'
export class StringArgOps extends Object implements DynamicOps<Either<string, StringArgs>> {
    static INSTANCE: StringArgOps;
    constructor()
    compressMaps(): boolean;
    convertList<U extends Object | number | string | boolean, T extends Object | number | string | boolean>(arg0: DynamicOps<U>, arg1: T): U;
    convertMap<U extends Object | number | string | boolean, T extends Object | number | string | boolean>(arg0: DynamicOps<U>, arg1: T): U;
    convertTo<U extends Object | number | string | boolean>(arg0: DynamicOps<U>, arg1: Either<string, StringArgs>): U;
    createBoolean<T extends Object | number | string | boolean>(arg0: boolean): T;
    createByte<T extends Object | number | string | boolean>(arg0: number): T;
    createByteList<T extends Object | number | string | boolean>(arg0: ByteBuffer): T;
    createDouble<T extends Object | number | string | boolean>(arg0: number): T;
    createFloat<T extends Object | number | string | boolean>(arg0: number): T;
    createInt<T extends Object | number | string | boolean>(arg0: number): T;
    createIntList<T extends Object | number | string | boolean>(arg0: IntStream): T;
    createList(arg0: Stream<Either<string, StringArgs>>): Either<string, StringArgs>;
    createLong<T extends Object | number | string | boolean>(arg0: number): T;
    createLongList<T extends Object | number | string | boolean>(arg0: LongStream): T;
    createMap<T extends Object | number | string | boolean>(arg0: Map<T, T>): T;
    createMap(arg0: Stream<Pair<Either<string, StringArgs>, Either<string, StringArgs>>>): Either<string, StringArgs>;
    createMap(arg0: Map<Either<string, StringArgs>, Either<string, StringArgs>>): Either<string, StringArgs>;
    createNumeric(arg0: Number): Either<string, StringArgs>;
    createShort<T extends Object | number | string | boolean>(arg0: number): T;
    createString(arg0: string): Either<string, StringArgs>;
    empty(): Either<string, StringArgs>;
    emptyList<T extends Object | number | string | boolean>(): T;
    emptyMap<T extends Object | number | string | boolean>(): T;
    get<T extends Object | number | string | boolean>(arg0: T, arg1: string): DataResult<T>;
    getBooleanValue<T extends Object | number | string | boolean>(arg0: T): DataResult<boolean>;
    getByteBuffer<T extends Object | number | string | boolean>(arg0: T): DataResult<ByteBuffer>;
    getGeneric<T extends Object | number | string | boolean>(arg0: T, arg1: T): DataResult<T>;
    getIntStream<T extends Object | number | string | boolean>(arg0: T): DataResult<IntStream>;
    getList<T extends Object | number | string | boolean>(arg0: T): DataResult<(param0: (param0: T) => void) => void>;
    getLongStream<T extends Object | number | string | boolean>(arg0: T): DataResult<LongStream>;
    getMap<T extends Object | number | string | boolean>(arg0: T): DataResult<MapLike<T>>;
    getMapEntries<T extends Object | number | string | boolean>(arg0: T): DataResult<(param0: (param0: T, param1: T) => void) => void>;
    getMapValues(arg0: Either<string, StringArgs>): DataResult<Stream<Pair<Either<string, StringArgs>, Either<string, StringArgs>>>>;
    getNumberValue<T extends Object | number | string | boolean>(arg0: T, arg1: Number): Number;
    getNumberValue(arg0: Either<string, StringArgs>): DataResult<Number>;
    getNumberValue(arg0: Either<string, StringArgs>, arg1: Number): Number;
    getStream(arg0: Either<string, StringArgs>): DataResult<Stream<Either<string, StringArgs>>>;
    getStringValue(arg0: Either<string, StringArgs>): DataResult<string>;
    listBuilder(): ListBuilder<T>;
    mapBuilder(): RecordBuilder<T>;
    mergeToList<T extends Object | number | string | boolean>(arg0: T, arg1: T[]): DataResult<T>;
    mergeToList(arg0: Either<string, StringArgs>, arg1: Either<string, StringArgs>): DataResult<Either<string, StringArgs>>;
    mergeToList(arg0: Either<string, StringArgs>, arg1: Either<string, StringArgs>[]): DataResult<Either<string, StringArgs>>;
    mergeToMap<T extends Object | number | string | boolean>(arg0: T, arg1: MapLike<T>): DataResult<T>;
    mergeToMap<T extends Object | number | string | boolean>(arg0: T, arg1: Map<T, T>): DataResult<T>;
    mergeToMap(arg0: Either<string, StringArgs>, arg1: Either<string, StringArgs>, arg2: Either<string, StringArgs>): DataResult<Either<string, StringArgs>>;
    mergeToMap(arg0: Either<string, StringArgs>, arg1: MapLike<Either<string, StringArgs>>): DataResult<Either<string, StringArgs>>;
    mergeToMap(arg0: Either<string, StringArgs>, arg1: Map<Either<string, StringArgs>, Either<string, StringArgs>>): DataResult<Either<string, StringArgs>>;
    mergeToPrimitive<T extends Object | number | string | boolean>(arg0: T, arg1: T): DataResult<T>;
    remove(arg0: Either<string, StringArgs>, arg1: string): Either<string, StringArgs>;
    set<T extends Object | number | string | boolean>(arg0: T, arg1: string, arg2: T): T;
    update<T extends Object | number | string | boolean>(arg0: T, arg1: string, arg2: (param0: T) => T): T;
    updateGeneric<T extends Object | number | string | boolean>(arg0: T, arg1: T, arg2: (param0: T) => T): T;
    withDecoder(arg0: Decoder<E>): (param0: T) => DataResult<Pair<E, T>>;
    withEncoder(arg0: Encoder<E>): (param0: E) => DataResult<T>;
    withParser(arg0: Decoder<E>): (param0: T) => DataResult<E>;
}