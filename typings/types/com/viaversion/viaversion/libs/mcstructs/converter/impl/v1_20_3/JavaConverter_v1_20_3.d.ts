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
    convertFrom<N extends unknown>(arg0: DataConverter<N>, arg1: N): Object;
    convertList<N extends unknown>(arg0: DataConverter<N>, arg1: Object): N;
    convertMap<N extends unknown>(arg0: DataConverter<N>, arg1: Object): N;
    convertTo<N extends unknown>(arg0: DataConverter<N>, arg1: Object): N;
    createBoolean(arg0: boolean): Object;
    createByte(arg0: number): Object;
    createByteArray(arg0: number[]): Object;
    createDouble(arg0: number): Object;
    createFloat(arg0: number): Object;
    createInt(arg0: number): Object;
    createIntArray(arg0: number[]): Object;
    createList(arg0: Object[]): Object;
    createLong(arg0: number): Object;
    createLongArray(arg0: number[]): Object;
    createMergedMap(arg0: Map<Object, Object>): Result<Object>;
    createNumber(arg0: Number): Object;
    createShort(arg0: number): Object;
    createString(arg0: string): Object;
    createUnsafeMap(arg0: Map<Object, Object>): Object;
    empty(): Object;
    emptyList(): Object;
    emptyMap(): Object;
    fork<O extends unknown>(arg0: DataConverter<O>): DataConverter<O>;
    forkIfDefault(): DataConverter<Object>;
    mergeList(arg0: Object, ...arg1: Object[]): Result<Object>;
    mergeList(arg0: Object, arg1: Object[]): Result<Object>;
    mergeMap(arg0: Object, arg1: Object, arg2: Object): Result<Object>;
    mergeMap(arg0: Object, ...arg1: Object[]): Result<Object>;
    mergeMap(arg0: Object, arg1: Map<Object, Object>): Result<Object>;
    toCodec(): Codec<Object>;
}