import type { Object } from '../../java/lang/Object.d.ts'
import type { Function1 } from '../../kotlin/jvm/functions/Function1.d.ts'
import type { AtomicArray } from '../../kotlinx/atomicfu/AtomicArray.d.ts'
import type { AtomicBoolean } from '../../kotlinx/atomicfu/AtomicBoolean.d.ts'
import type { AtomicInt } from '../../kotlinx/atomicfu/AtomicInt.d.ts'
import type { AtomicLong } from '../../kotlinx/atomicfu/AtomicLong.d.ts'
import type { AtomicRef } from '../../kotlinx/atomicfu/AtomicRef.d.ts'
export class AtomicFU_commonKt extends Object {
    static atomicArrayOfNulls(paramarg0: number): AtomicArray<Object>;
    static getAndUpdate(paramarg0: AtomicRef<Object>, paramarg1: Function1<Object, Object>): Object | null;
    static getAndUpdate(paramarg0: AtomicBoolean, paramarg1: Function1<Object, boolean>): boolean;
    static getAndUpdate(paramarg0: AtomicInt, paramarg1: Function1<Object, number>): number;
    static getAndUpdate(paramarg0: AtomicLong, paramarg1: Function1<Object, number>): number;
    static loop(paramarg0: AtomicRef<Object>, paramarg1: Function1<Object, void>): void;
    static loop(paramarg0: AtomicBoolean, paramarg1: Function1<Object, void>): void;
    static loop(paramarg0: AtomicInt, paramarg1: Function1<Object, void>): void;
    static loop(paramarg0: AtomicLong, paramarg1: Function1<Object, void>): void;
    static update(paramarg0: AtomicRef<Object>, paramarg1: Function1<Object, Object>): void;
    static update(paramarg0: AtomicBoolean, paramarg1: Function1<Object, boolean>): void;
    static update(paramarg0: AtomicInt, paramarg1: Function1<Object, number>): void;
    static update(paramarg0: AtomicLong, paramarg1: Function1<Object, number>): void;
    static updateAndGet(paramarg0: AtomicRef<Object>, paramarg1: Function1<Object, Object>): Object | null;
    static updateAndGet(paramarg0: AtomicBoolean, paramarg1: Function1<Object, boolean>): boolean;
    static updateAndGet(paramarg0: AtomicInt, paramarg1: Function1<Object, number>): number;
    static updateAndGet(paramarg0: AtomicLong, paramarg1: Function1<Object, number>): number;
}