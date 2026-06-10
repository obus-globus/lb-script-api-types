import type { DataConverter } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/DataConverter.d.ts'
import type { Codec } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/codec/Codec.d.ts'
import type { Result } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/model/Result.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Number } from '../../../../../../../java/lang/Number.d.ts'
export class DelegatingConverter<T extends Object | number | string | boolean> extends Object implements DataConverter<T> {
    constructor(arg0: DataConverter<T>)
    readonly delegate: DataConverter<T>;
    asBoolean(arg0: T): Result<boolean>;
    asByteArray(arg0: T): Result<number[]>;
    asIntArray(arg0: T): Result<number[]>;
    asList(arg0: T): Result<T[]>;
    asLongArray(arg0: T): Result<number[]>;
    asMap(arg0: T): Result<Map<T, T>>;
    asNumber(arg0: T): Result<Number>;
    asString(arg0: T): Result<string>;
    asStringTypeMap(arg0: T): Result<{ [key: string]: T }>;
    convertFrom<N extends Object | number | string | boolean>(arg0: DataConverter<N>, arg1: N): T;
    convertList<N extends Object | number | string | boolean>(arg0: DataConverter<N>, arg1: T): N;
    convertMap<N extends Object | number | string | boolean>(arg0: DataConverter<N>, arg1: T): N;
    convertTo<N extends Object | number | string | boolean>(arg0: DataConverter<N>, arg1: T): N;
    createBoolean(arg0: boolean): T;
    createByte(arg0: number): T;
    createByteArray(arg0: number[]): T;
    createDouble(arg0: number): T;
    createFloat(arg0: number): T;
    createInt(arg0: number): T;
    createIntArray(arg0: number[]): T;
    createList(arg0: T[]): T;
    createLong(arg0: number): T;
    createLongArray(arg0: number[]): T;
    createMergedMap(arg0: Map<T, T>): Result<T>;
    createNumber(arg0: Number): T;
    createShort(arg0: number): T;
    createString(arg0: string): T;
    createUnsafeMap(arg0: Map<T, T>): T;
    empty(): T;
    emptyList(): T;
    emptyMap(): T;
    fork<O extends Object | number | string | boolean>(arg0: DataConverter<O>): DataConverter<O>;
    forkIfDefault(): DataConverter<T>;
    getDelegate(): DataConverter<T>;
    mergeList(arg0: T, arg1: T[]): Result<T>;
    mergeMap(arg0: T, arg1: T, arg2: T): Result<T>;
    mergeMap(arg0: T, arg1: T[]): Result<T>;
    mergeMap(arg0: T, arg1: Map<T, T>): Result<T>;
    toCodec(): Codec<T>;
}