import type { BloomFilter$Strategy } from '../../../../com/google/common/hash/BloomFilter$Strategy.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class BloomFilterStrategies extends Enum<BloomFilterStrategies> implements BloomFilter$Strategy {
    static MURMUR128_MITZ_32: BloomFilterStrategies;
    static MURMUR128_MITZ_64: BloomFilterStrategies;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): BloomFilterStrategies;
    static values(): BloomFilterStrategies[];
    constructor(arg2: BloomFilterStrategies)
    ordinal(): number;
    name(): "MURMUR128_MITZ_32" | "MURMUR128_MITZ_64";
}