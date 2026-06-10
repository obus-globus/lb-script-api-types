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
    convertList<U extends Object | number | string | boolean>(arg0: DynamicOps<U>, arg1: Either<string, StringArgs>): U;
    convertMap<U extends Object | number | string | boolean>(arg0: DynamicOps<U>, arg1: Either<string, StringArgs>): U;
    convertTo<U extends Object | number | string | boolean>(arg0: DynamicOps<U>, arg1: Either<string, StringArgs>): U;
    createBoolean(arg0: boolean): Either<string, StringArgs>;
    createByte(arg0: number): Either<string, StringArgs>;
    createByteList(arg0: ByteBuffer): Either<string, StringArgs>;
    createDouble(arg0: number): Either<string, StringArgs>;
    createFloat(arg0: number): Either<string, StringArgs>;
    createInt(arg0: number): Either<string, StringArgs>;
    createIntList(arg0: IntStream): Either<string, StringArgs>;
    createList(arg0: Stream<Either<string, StringArgs>>): Either<string, StringArgs>;
    createLong(arg0: number): Either<string, StringArgs>;
    createLongList(arg0: LongStream): Either<string, StringArgs>;
    createMap(arg0: Map<Either<string, StringArgs>, Either<string, StringArgs>>): Either<string, StringArgs>;
    createMap(arg0: Stream<Pair<Either<string, StringArgs>, Either<string, StringArgs>>>): Either<string, StringArgs>;
    createNumeric(arg0: Number): Either<string, StringArgs>;
    createShort(arg0: number): Either<string, StringArgs>;
    createString(arg0: string): Either<string, StringArgs>;
    empty(): Either<string, StringArgs>;
    emptyList(): Either<string, StringArgs>;
    emptyMap(): Either<string, StringArgs>;
    get(arg0: Either<string, StringArgs>, arg1: string): DataResult<Either<string, StringArgs>>;
    getBooleanValue(arg0: Either<string, StringArgs>): DataResult<boolean>;
    getByteBuffer(arg0: Either<string, StringArgs>): DataResult<ByteBuffer>;
    getGeneric(arg0: Either<string, StringArgs>, arg1: Either<string, StringArgs>): DataResult<Either<string, StringArgs>>;
    getIntStream(arg0: Either<string, StringArgs>): DataResult<IntStream>;
    getList(arg0: Either<string, StringArgs>): DataResult<(param0: Consumer<Either<string, StringArgs>>) => void>;
    getLongStream(arg0: Either<string, StringArgs>): DataResult<LongStream>;
    getMap(arg0: Either<string, StringArgs>): DataResult<MapLike<Either<string, StringArgs>>>;
    getMapEntries(arg0: Either<string, StringArgs>): DataResult<(param0: (param0: Either<string, StringArgs>, param1: Either<string, StringArgs>) => void) => void>;
    getMapValues(arg0: Either<string, StringArgs>): DataResult<Stream<Pair<Either<string, StringArgs>, Either<string, StringArgs>>>>;
    getNumberValue(arg0: Either<string, StringArgs>, arg1: Number): Number;
    getNumberValue(arg0: Either<string, StringArgs>): DataResult<Number>;
    getStream(arg0: Either<string, StringArgs>): DataResult<Stream<Either<string, StringArgs>>>;
    getStringValue(arg0: Either<string, StringArgs>): DataResult<string>;
    listBuilder(): ListBuilder<Either<string, StringArgs>>;
    mapBuilder(): RecordBuilder<Either<string, StringArgs>>;
    mergeToList(arg0: Either<string, StringArgs>, arg1: Either<string, StringArgs>[]): DataResult<Either<string, StringArgs>>;
    mergeToList(arg0: Either<string, StringArgs>, arg1: Either<string, StringArgs>): DataResult<Either<string, StringArgs>>;
    mergeToMap(arg0: Either<string, StringArgs>, arg1: MapLike<Either<string, StringArgs>>): DataResult<Either<string, StringArgs>>;
    mergeToMap(arg0: Either<string, StringArgs>, arg1: Map<Either<string, StringArgs>, Either<string, StringArgs>>): DataResult<Either<string, StringArgs>>;
    mergeToMap(arg0: Either<string, StringArgs>, arg1: Either<string, StringArgs>, arg2: Either<string, StringArgs>): DataResult<Either<string, StringArgs>>;
    mergeToPrimitive(arg0: Either<string, StringArgs>, arg1: Either<string, StringArgs>): DataResult<Either<string, StringArgs>>;
    remove(arg0: Either<string, StringArgs>, arg1: string): Either<string, StringArgs>;
    set(arg0: Either<string, StringArgs>, arg1: string, arg2: Either<string, StringArgs>): Either<string, StringArgs>;
    update(arg0: Either<string, StringArgs>, arg1: string, arg2: (param0: Either<string, StringArgs>) => Either<string, StringArgs>): Either<string, StringArgs>;
    updateGeneric(arg0: Either<string, StringArgs>, arg1: Either<string, StringArgs>, arg2: (param0: Either<string, StringArgs>) => Either<string, StringArgs>): Either<string, StringArgs>;
    withDecoder<E extends Object | number | string | boolean>(arg0: Decoder<E>): (param0: Either<string, StringArgs>) => DataResult<Pair<E, Either<string, StringArgs>>>;
    withEncoder<E extends Object | number | string | boolean>(arg0: Encoder<E>): (param0: E) => DataResult<Either<string, StringArgs>>;
    withParser<E extends Object | number | string | boolean>(arg0: Decoder<E>): (param0: Either<string, StringArgs>) => DataResult<E>;
}