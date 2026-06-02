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
    asMap(arg0: Tag): Result<Map<Tag, Tag>>;
    asNumber(arg0: Tag): Result<Number>;
    asString(arg0: Tag): Result<string>;
    asStringTypeMap(arg0: Tag): Result<{ [key: string]: Tag }>;
    convertFrom<T extends Object | number | string | boolean, N extends Object | number | string | boolean>(arg0: DataConverter<N>, arg1: N): T;
    convertList<N extends Object | number | string | boolean, T extends Object | number | string | boolean>(arg0: DataConverter<N>, arg1: T): N;
    convertMap<N extends Object | number | string | boolean, T extends Object | number | string | boolean>(arg0: DataConverter<N>, arg1: T): N;
    convertTo<N extends Object | number | string | boolean>(arg0: DataConverter<N>, arg1: Tag): N;
    createBoolean(arg0: boolean): Tag;
    createByte<T extends Object | number | string | boolean>(arg0: number): T;
    createByte(arg0: number): Tag;
    createByteArray(arg0: number[]): Tag;
    createDouble<T extends Object | number | string | boolean>(arg0: number): T;
    createDouble(arg0: number): Tag;
    createFloat<T extends Object | number | string | boolean>(arg0: number): T;
    createFloat(arg0: number): Tag;
    createInt<T extends Object | number | string | boolean>(arg0: number): T;
    createInt(arg0: number): Tag;
    createIntArray(arg0: number[]): Tag;
    createList<T extends Object | number | string | boolean>(arg0: T[]): T;
    createLong<T extends Object | number | string | boolean>(arg0: number): T;
    createLong(arg0: number): Tag;
    createLongArray(arg0: number[]): Tag;
    createMergedMap(arg0: Map<T, T>): Result<T>;
    createNumber(arg0: Number): Tag;
    createShort<T extends Object | number | string | boolean>(arg0: number): T;
    createShort(arg0: number): Tag;
    createString(arg0: string): Tag;
    createUnsafeMap(arg0: Map<Tag, Tag>): Tag;
    currentConsumer(): (param0: string) => void;
    empty<T extends Object | number | string | boolean>(): T;
    emptyList<T extends Object | number | string | boolean>(): T;
    emptyMap<T extends Object | number | string | boolean>(): T;
    fork(arg0: DataConverter<O>): DataConverter<O>;
    forkIfDefault(): DataConverter<T>;
    forkIfDefault(): DataConverter<Tag>;
    mergeList<T extends Object | number | string | boolean>(arg0: T, arg1: T[]): Result<T>;
    mergeList(arg0: Tag, arg1: Tag[]): Result<Tag>;
    mergeMap<T extends Object | number | string | boolean>(arg0: T, arg1: T, arg2: T): Result<T>;
    mergeMap<T extends Object | number | string | boolean>(arg0: T, arg1: T[]): Result<T>;
    mergeMap(arg0: Tag, arg1: Map<Tag, Tag>): Result<Tag>;
    setCurrentConsumer(arg0: (param0: string) => void): void;
    toCodec(): Codec<T>;
}