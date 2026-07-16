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
export class BloomFilter<T extends unknown> extends Object implements Predicate<T>, Serializable {
    static create<T extends unknown>(paramfunnel: Funnel<Object>, paramexpectedInsertions: number): BloomFilter<T>;
    static create<T extends unknown>(paramfunnel: Funnel<Object>, paramexpectedInsertions: number, paramfpp: number): BloomFilter<T>;
    static readFrom<T extends unknown>(paramin: InputStream, paramfunnel: Funnel<Object>): BloomFilter<T>;
    static toBloomFilter<T extends unknown>(paramfunnel: Funnel<Object>, paramexpectedInsertions: number): Collector<T, Object, BloomFilter<T>>;
    static toBloomFilter<T extends unknown>(paramfunnel: Funnel<Object>, paramexpectedInsertions: number, paramfpp: number): Collector<T, Object, BloomFilter<T>>;
    constructor(arg0: BloomFilterStrategies$LockFreeBitArray, arg1: number, arg2: Funnel<Object>, arg3: BloomFilter$Strategy, arg4: any)
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
    serializedSize(): number;
    test(input: T): boolean;
    // private writeReplace(): Object;
    writeTo(out: OutputStream): void;
}