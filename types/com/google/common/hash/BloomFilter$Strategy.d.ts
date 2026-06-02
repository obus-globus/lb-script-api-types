import type { BloomFilterStrategies$LockFreeBitArray } from '../../../../com/google/common/hash/BloomFilterStrategies$LockFreeBitArray.d.ts'
import type { Funnel } from '../../../../com/google/common/hash/Funnel.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface BloomFilter$Strategy extends Serializable, Object{
    mightContain<T extends Object | number | string | boolean>(object: T, funnel: Funnel<T>, numHashFunctions: number, bits: BloomFilterStrategies$LockFreeBitArray): boolean;
    ordinal(): number;
    put<T extends Object | number | string | boolean>(object: T, funnel: Funnel<T>, numHashFunctions: number, bits: BloomFilterStrategies$LockFreeBitArray): boolean;
}