import type { DataConverter } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/DataConverter.d.ts'
import type { Codec } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/codec/Codec.d.ts'
import type { Result } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/model/Result.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Number } from '../../../../../../../../java/lang/Number.d.ts'
export class JavaConverter_v1_20_3 extends Object implements DataConverter<Object> {
    static INSTANCE: JavaConverter_v1_20_3;
    constructor()
    asBoolean(arg0: Object): Result<boolean>;
    asByteArray(arg0: Object): Result<number[]>;
    asIntArray(arg0: Object): Result<number[]>;
    asList(arg0: Object): Result<Object[]>;
    asLongArray(arg0: Object): Result<number[]>;
    asMap(arg0: Object): Result<Map<Object, Object>>;
    asNumber(arg0: Object): Result<Number>;
    asString(arg0: Object): Result<string>;
    asStringTypeMap(arg0: Object): Result<{ [key: string]: Object }>;
    convertFrom<T extends Object | number | string | boolean, N extends Object | number | string | boolean>(arg0: DataConverter<N>, arg1: N): T;
    convertList<N extends Object | number | string | boolean, T extends Object | number | string | boolean>(arg0: DataConverter<N>, arg1: T): N;
    convertMap<N extends Object | number | string | boolean, T extends Object | number | string | boolean>(arg0: DataConverter<N>, arg1: T): N;
    convertTo<N extends Object | number | string | boolean>(arg0: DataConverter<N>, arg1: Object): N;
    createBoolean(arg0: boolean): Object;
    createByte<T extends Object | number | string | boolean>(arg0: number): T;
    createByteArray(arg0: number[]): Object;
    createDouble<T extends Object | number | string | boolean>(arg0: number): T;
    createFloat<T extends Object | number | string | boolean>(arg0: number): T;
    createInt<T extends Object | number | string | boolean>(arg0: number): T;
    createIntArray(arg0: number[]): Object;
    createList<T extends Object | number | string | boolean>(arg0: T[]): T;
    createLong<T extends Object | number | string | boolean>(arg0: number): T;
    createLongArray(arg0: number[]): Object;
    createMergedMap(arg0: Map<T, T>): Result<T>;
    createNumber(arg0: Number): Object;
    createShort<T extends Object | number | string | boolean>(arg0: number): T;
    createString(arg0: string): Object;
    createUnsafeMap(arg0: Map<Object, Object>): Object;
    empty<T extends Object | number | string | boolean>(): T;
    emptyList<T extends Object | number | string | boolean>(): T;
    emptyMap<T extends Object | number | string | boolean>(): T;
    fork(arg0: DataConverter<O>): DataConverter<O>;
    forkIfDefault(): DataConverter<T>;
    mergeList<T extends Object | number | string | boolean>(arg0: T, arg1: T[]): Result<T>;
    mergeList(arg0: Object, arg1: Object[]): Result<Object>;
    mergeList(arg0: Object, arg1: Object[]): Result<Object>;
    mergeMap<T extends Object | number | string | boolean>(arg0: T, arg1: T, arg2: T): Result<T>;
    mergeMap<T extends Object | number | string | boolean>(arg0: T, arg1: T[]): Result<T>;
    mergeMap(arg0: Object, arg1: Object, arg2: Object): Result<Object>;
    mergeMap(arg0: Object, arg1: Object[]): Result<Object>;
    mergeMap(arg0: Object, arg1: Map<Object, Object>): Result<Object>;
    toCodec(): Codec<T>;
}