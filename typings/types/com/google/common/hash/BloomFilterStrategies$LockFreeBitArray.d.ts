import type { AtomicLongArray } from '../../../../java/util/concurrent/atomic/AtomicLongArray.d.ts'
import type { LongAdder } from '../../../../java/util/concurrent/atomic/LongAdder.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class BloomFilterStrategies$LockFreeBitArray extends Object {
    static toPlainArray(paramatomicLongArray: AtomicLongArray): number[];
    constructor(bits: number)
    constructor(data: number[])
    // private bitCount: LongAdder;
    // private data: AtomicLongArray;
    bitCount(): number;
    bitSize(): number;
    copy(): BloomFilterStrategies$LockFreeBitArray;
    dataLength(): number;
    equals(o: Object | null): boolean;
    get(bitIndex: number): boolean;
    hashCode(): number;
    putAll(other: BloomFilterStrategies$LockFreeBitArray): void;
    putData(i: number, longValue: number): void;
    set(bitIndex: number): boolean;
}