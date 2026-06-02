import type { AtomicIntegerArray } from '../../../java/util/concurrent/atomic/AtomicIntegerArray.d.ts'
import type { AtomicLongArray } from '../../../java/util/concurrent/atomic/AtomicLongArray.d.ts'
import type { AtomicReferenceArray } from '../../../java/util/concurrent/atomic/AtomicReferenceArray.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Function1 } from '../../../kotlin/jvm/functions/Function1.d.ts'
export class AtomicArraysKt__AtomicArrays_commonKt extends Object {
    static AtomicArray(paramarg0: number, paramarg1: Function1<Object, Object>): AtomicReferenceArray<Object>;
    static AtomicIntArray(paramarg0: number, paramarg1: Function1<Object, number>): AtomicIntegerArray;
    static AtomicLongArray(paramarg0: number, paramarg1: Function1<Object, number>): AtomicLongArray;
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