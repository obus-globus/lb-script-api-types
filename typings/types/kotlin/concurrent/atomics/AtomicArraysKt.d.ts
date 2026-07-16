import type { AtomicIntegerArray } from '../../../java/util/concurrent/atomic/AtomicIntegerArray.d.ts'
import type { AtomicLongArray } from '../../../java/util/concurrent/atomic/AtomicLongArray.d.ts'
import type { AtomicReferenceArray } from '../../../java/util/concurrent/atomic/AtomicReferenceArray.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { AtomicArraysKt__AtomicArrays_jvmKt } from '../../../kotlin/concurrent/atomics/AtomicArraysKt__AtomicArrays_jvmKt.d.ts'
export class AtomicArraysKt extends AtomicArraysKt__AtomicArrays_jvmKt {
    static AtomicArray<T extends unknown>(size: number, init: (param0: number) => T): AtomicReferenceArray<T>;
    static AtomicIntArray(size: number, init: (param0: number) => number): AtomicIntegerArray;
    static AtomicLongArray(size: number, init: (param0: number) => number): AtomicLongArray;
    static asJavaAtomicArray<T extends unknown>(self: AtomicReferenceArray<T>): AtomicReferenceArray<T>;
    static asJavaAtomicArray(self: AtomicIntegerArray): AtomicIntegerArray;
    static asJavaAtomicArray(self: AtomicLongArray): AtomicLongArray;
    static asKotlinAtomicArray<T extends unknown>(self: AtomicReferenceArray<T>): AtomicReferenceArray<T>;
    static asKotlinAtomicArray(self: AtomicIntegerArray): AtomicIntegerArray;
    static asKotlinAtomicArray(self: AtomicLongArray): AtomicLongArray;
    static atomicArrayOfNulls<T extends unknown>(size: number): AtomicReferenceArray<T>;
    static decrementAndFetchAt(self: AtomicIntegerArray, index: number): number;
    static decrementAndFetchAt(self: AtomicLongArray, index: number): number;
    static fetchAndDecrementAt(self: AtomicIntegerArray, index: number): number;
    static fetchAndDecrementAt(self: AtomicLongArray, index: number): number;
    static fetchAndIncrementAt(self: AtomicIntegerArray, index: number): number;
    static fetchAndIncrementAt(self: AtomicLongArray, index: number): number;
    static incrementAndFetchAt(self: AtomicIntegerArray, index: number): number;
    static incrementAndFetchAt(self: AtomicLongArray, index: number): number;
}