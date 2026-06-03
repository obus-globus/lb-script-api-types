import type { AtomicIntegerArray } from '../../../java/util/concurrent/atomic/AtomicIntegerArray.d.ts'
import type { AtomicLongArray } from '../../../java/util/concurrent/atomic/AtomicLongArray.d.ts'
import type { AtomicReferenceArray } from '../../../java/util/concurrent/atomic/AtomicReferenceArray.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { AtomicArraysKt__AtomicArrays_jvmKt } from '../../../kotlin/concurrent/atomics/AtomicArraysKt__AtomicArrays_jvmKt.d.ts'
export class AtomicArraysKt extends AtomicArraysKt__AtomicArrays_jvmKt {
    static AtomicArray(paramarg0: number, paramarg1: (param0: Object | null) => Object | null): AtomicReferenceArray<Object>;
    static AtomicIntArray(paramarg0: number, paramarg1: (param0: Object | null) => number): AtomicIntegerArray;
    static AtomicLongArray(paramarg0: number, paramarg1: (param0: Object | null) => number): AtomicLongArray;
    static asJavaAtomicArray(paramarg0: AtomicReferenceArray<Object>): AtomicReferenceArray<Object>;
    static asJavaAtomicArray(paramarg0: AtomicIntegerArray): AtomicIntegerArray;
    static asJavaAtomicArray(paramarg0: AtomicLongArray): AtomicLongArray;
    static asKotlinAtomicArray(paramarg0: AtomicReferenceArray<Object>): AtomicReferenceArray<Object>;
    static asKotlinAtomicArray(paramarg0: AtomicIntegerArray): AtomicIntegerArray;
    static asKotlinAtomicArray(paramarg0: AtomicLongArray): AtomicLongArray;
    static atomicArrayOfNulls(paramarg0: number): AtomicReferenceArray<Object>;
    static decrementAndFetchAt(paramarg0: AtomicIntegerArray, paramarg1: number): number;
    static decrementAndFetchAt(paramarg0: AtomicLongArray, paramarg1: number): number;
    static fetchAndDecrementAt(paramarg0: AtomicIntegerArray, paramarg1: number): number;
    static fetchAndDecrementAt(paramarg0: AtomicLongArray, paramarg1: number): number;
    static fetchAndIncrementAt(paramarg0: AtomicIntegerArray, paramarg1: number): number;
    static fetchAndIncrementAt(paramarg0: AtomicLongArray, paramarg1: number): number;
    static incrementAndFetchAt(paramarg0: AtomicIntegerArray, paramarg1: number): number;
    static incrementAndFetchAt(paramarg0: AtomicLongArray, paramarg1: number): number;
}