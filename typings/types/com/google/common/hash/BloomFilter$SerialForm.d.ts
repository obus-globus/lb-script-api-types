import type { BloomFilter } from '../../../../com/google/common/hash/BloomFilter.d.ts'
import type { BloomFilter$Strategy } from '../../../../com/google/common/hash/BloomFilter$Strategy.d.ts'
import type { Funnel } from '../../../../com/google/common/hash/Funnel.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class BloomFilter$SerialForm<T extends unknown> extends Object implements Serializable {
    constructor(bf: BloomFilter<T>)
    // private data: number[];
    // private funnel: Funnel<T>;
    // private numHashFunctions: number;
    // private strategy: BloomFilter$Strategy;
    readResolve(): Object;
}