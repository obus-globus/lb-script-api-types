import type { Predicate } from '../../../../com/google/common/base/Predicate.d.ts'
import type { BloomFilter$Strategy } from '../../../../com/google/common/hash/BloomFilter$Strategy.d.ts'
import type { BloomFilterStrategies$LockFreeBitArray } from '../../../../com/google/common/hash/BloomFilterStrategies$LockFreeBitArray.d.ts'
import type { Funnel } from '../../../../com/google/common/hash/Funnel.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { ObjectInputStream } from '../../../../java/io/ObjectInputStream.d.ts'
import type { OutputStream } from '../../../../java/io/OutputStream.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Collector } from '../../../../java/util/stream/Collector.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class BloomFilter<T extends Object | number | string | boolean> extends Object implements Predicate<T>, Serializable {
    static create(paramfunnel: Funnel<Object>, paramexpectedInsertions: number): BloomFilter<Object>;
    static create(paramfunnel: Funnel<Object>, paramexpectedInsertions: number, paramfpp: number): BloomFilter<Object>;
    static create(paramfunnel: Funnel<Object>, paramexpectedInsertions: number): BloomFilter<Object>;
    static create(paramfunnel: Funnel<Object>, paramexpectedInsertions: number, paramfpp: number): BloomFilter<Object>;
    static readFrom(paramin: InputStream, paramfunnel: Funnel<Object>): BloomFilter<Object>;
    static toBloomFilter(paramfunnel: Funnel<Object>, paramexpectedInsertions: number): Collector<Object, Object, Object>;
    static toBloomFilter(paramfunnel: Funnel<Object>, paramexpectedInsertions: number, paramfpp: number): Collector<Object, Object, Object>;
    private constructor(bits: BloomFilterStrategies$LockFreeBitArray, numHashFunctions: number, funnel: Funnel<T>, strategy: BloomFilter$Strategy)
    // private bits: BloomFilterStrategies$LockFreeBitArray;
    // private funnel: Funnel<T>;
    // private numHashFunctions: number;
    // private strategy: BloomFilter$Strategy;
    apply(input: T): boolean;
    approximateElementCount(): number;
    bitSize(): number;
    copy(): BloomFilter<T>;
    equals(object: Object | null): boolean;
    expectedFpp(): number;
    hashCode(): number;
    isCompatible(that: BloomFilter<T>): boolean;
    mightContain(object: T): boolean;
    put(object: T): boolean;
    putAll(that: BloomFilter<T>): void;
    // private readObject(stream: ObjectInputStream): void;
    test(input: T): boolean;
    test(input: T): boolean;
    // private writeReplace(): Object;
    writeTo(out: OutputStream): void;
}