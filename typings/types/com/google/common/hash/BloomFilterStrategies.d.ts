import type { BloomFilterStrategies$1 } from '../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { BloomFilter$Strategy } from '../../../../com/google/common/hash/BloomFilter$Strategy.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class BloomFilterStrategies extends Enum<BloomFilterStrategies> implements BloomFilter$Strategy {
    static MURMUR128_MITZ_32: BloomFilterStrategies;
    static MURMUR128_MITZ_64: BloomFilterStrategies;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): BloomFilterStrategies;
    static values(): (Object | null)[];
    private constructor()
    constructor(arg2: BloomFilterStrategies$1)
    ordinal(): number;
    name(): "MURMUR128_MITZ_32" | "MURMUR128_MITZ_64";
}