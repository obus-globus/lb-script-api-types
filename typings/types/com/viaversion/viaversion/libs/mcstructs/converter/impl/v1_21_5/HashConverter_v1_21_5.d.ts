import type { DataConverter } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/DataConverter.d.ts'
import type { Codec } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/codec/Codec.d.ts'
import type { HashCode } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/hash/HashCode.d.ts'
import type { HashFunction } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/hash/HashFunction.d.ts'
import type { Result } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/model/Result.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Number } from '../../../../../../../../java/lang/Number.d.ts'
export class HashConverter_v1_21_5 extends Object implements DataConverter<HashCode> {
    static CRC32C: HashConverter_v1_21_5;
    constructor(arg0: HashFunction)
    // private emptyHash: HashCode;
    // private emptyListHash: HashCode;
    // private emptyMapHash: HashCode;
    // private falseHash: HashCode;
    // private hashFunction: HashFunction;
    // private trueHash: HashCode;
    asBoolean(arg0: HashCode): Result<boolean>;
    asByteArray(arg0: HashCode): Result<number[]>;
    asIntArray(arg0: HashCode): Result<number[]>;
    asList(arg0: HashCode): Result<HashCode[]>;
    asLongArray(arg0: HashCode): Result<number[]>;
    asMap(arg0: HashCode): Result<Map<HashCode, HashCode>>;
    asNumber(arg0: HashCode): Result<Number>;
    asString(arg0: HashCode): Result<string>;
    asStringTypeMap(arg0: HashCode): Result<{ [key: string]: HashCode }>;
    convertFrom<N extends unknown>(arg0: DataConverter<N>, arg1: N): HashCode;
    convertList<N extends unknown>(arg0: DataConverter<N>, arg1: HashCode): N;
    convertMap<N extends unknown>(arg0: DataConverter<N>, arg1: HashCode): N;
    convertTo<N extends unknown>(arg0: DataConverter<N>, arg1: HashCode): N;
    createBoolean(arg0: boolean): HashCode;
    createByte(arg0: number): HashCode;
    createByteArray(arg0: number[]): HashCode;
    createDouble(arg0: number): HashCode;
    createFloat(arg0: number): HashCode;
    createInt(arg0: number): HashCode;
    createIntArray(arg0: number[]): HashCode;
    createList(arg0: HashCode[]): HashCode;
    createLong(arg0: number): HashCode;
    createLongArray(arg0: number[]): HashCode;
    createMergedMap(arg0: Map<HashCode, HashCode>): Result<HashCode>;
    createNumber(arg0: Number): HashCode;
    createShort(arg0: number): HashCode;
    createString(arg0: string): HashCode;
    createUnsafeMap(arg0: Map<HashCode, HashCode>): HashCode;
    empty(): HashCode;
    emptyList(): HashCode;
    emptyMap(): HashCode;
    fork<O extends unknown>(arg0: DataConverter<O>): DataConverter<O>;
    forkIfDefault(): DataConverter<HashCode>;
    mergeList(arg0: HashCode, ...arg1: HashCode[]): Result<HashCode>;
    mergeList(arg0: HashCode, arg1: HashCode[]): Result<HashCode>;
    mergeMap(arg0: HashCode, arg1: HashCode, arg2: HashCode): Result<HashCode>;
    mergeMap(arg0: HashCode, ...arg1: HashCode[]): Result<HashCode>;
    mergeMap(arg0: HashCode, arg1: Map<HashCode, HashCode>): Result<HashCode>;
    toCodec(): Codec<HashCode>;
}