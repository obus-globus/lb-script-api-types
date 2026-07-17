import type { JavaMap } from '../../../../../../../../JavaMap.d.ts'
import type { Tag } from '../../../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { DataConverter } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/DataConverter.d.ts'
import type { Codec } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/codec/Codec.d.ts'
import type { Result } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/model/Result.d.ts'
import type { SNbt } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/snbt/SNbt.d.ts'
import type { Consumer } from '../../../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Number } from '../../../../../../../../java/lang/Number.d.ts'
import type { Map$Entry } from '../../../../../../../../java/util/Map$Entry.d.ts'
export class NbtConverter_v1_20_3 extends Object implements DataConverter<Tag> {
    static INSTANCE: NbtConverter_v1_20_3;
    constructor()
    constructor(arg0: SNbt<Map$Entry<string, Tag>[]>)
    // private sNbt: SNbt<Map$Entry<string, Tag>[]>;
    // private stringConsumer: (param0: string) => void;
    asBoolean(arg0: Tag): Result<boolean>;
    asByteArray(arg0: Tag): Result<number[]>;
    asIntArray(arg0: Tag): Result<number[]>;
    asList(arg0: Tag): Result<Tag[]>;
    asLongArray(arg0: Tag): Result<number[]>;
    asMap(arg0: Tag): Result<JavaMap<Tag, Tag>>;
    asNumber(arg0: Tag): Result<Number>;
    asString(arg0: Tag): Result<string>;
    asStringTypeMap(arg0: Tag): Result<JavaMap<string, Tag>>;
    convertFrom<N extends unknown>(arg0: DataConverter<N>, arg1: N): Tag;
    convertList<N extends unknown>(arg0: DataConverter<N>, arg1: Tag): N;
    convertMap<N extends unknown>(arg0: DataConverter<N>, arg1: Tag): N;
    convertTo<N extends unknown>(arg0: DataConverter<N>, arg1: Tag): N;
    createBoolean(arg0: boolean): Tag;
    createByte(arg0: number): Tag;
    createByteArray(arg0: number[]): Tag;
    createDouble(arg0: number): Tag;
    createFloat(arg0: number): Tag;
    createInt(arg0: number): Tag;
    createIntArray(arg0: number[]): Tag;
    createList(arg0: Tag[]): Tag;
    createLong(arg0: number): Tag;
    createLongArray(arg0: number[]): Tag;
    createMergedMap(arg0: JavaMap<Tag, Tag>): Result<Tag>;
    createNumber(arg0: Number): Tag;
    createShort(arg0: number): Tag;
    createString(arg0: string): Tag;
    createUnsafeMap(arg0: JavaMap<Tag, Tag>): Tag;
    currentConsumer(): (param0: string) => void;
    empty(): Tag;
    emptyList(): Tag;
    emptyMap(): Tag;
    fork<O extends unknown>(arg0: DataConverter<O>): DataConverter<O>;
    forkIfDefault(): DataConverter<Tag>;
    mergeList(arg0: Tag, ...arg1: Tag[]): Result<Tag>;
    mergeList(arg0: Tag, arg1: Tag[]): Result<Tag>;
    mergeMap(arg0: Tag, arg1: Tag, arg2: Tag): Result<Tag>;
    mergeMap(arg0: Tag, ...arg1: Tag[]): Result<Tag>;
    mergeMap(arg0: Tag, arg1: JavaMap<Tag, Tag>): Result<Tag>;
    setCurrentConsumer(arg0: (param0: string) => void): void;
    toCodec(): Codec<Tag>;
}