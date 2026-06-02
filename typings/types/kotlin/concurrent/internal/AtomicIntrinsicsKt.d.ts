import type { AtomicBoolean } from '../../../java/util/concurrent/atomic/AtomicBoolean.d.ts'
import type { AtomicInteger } from '../../../java/util/concurrent/atomic/AtomicInteger.d.ts'
import type { AtomicIntegerArray } from '../../../java/util/concurrent/atomic/AtomicIntegerArray.d.ts'
import type { AtomicLong } from '../../../java/util/concurrent/atomic/AtomicLong.d.ts'
import type { AtomicLongArray } from '../../../java/util/concurrent/atomic/AtomicLongArray.d.ts'
import type { AtomicReference } from '../../../java/util/concurrent/atomic/AtomicReference.d.ts'
import type { AtomicReferenceArray } from '../../../java/util/concurrent/atomic/AtomicReferenceArray.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class AtomicIntrinsicsKt extends Object {
    static compareAndExchange(paramarg0: AtomicReference<Object>, paramarg1: Object | null, paramarg2: Object | null): Object | null;
    static compareAndExchange(paramarg0: AtomicReferenceArray<Object>, paramarg1: number, paramarg2: Object | null, paramarg3: Object | null): Object | null;
    static compareAndExchange(paramarg0: AtomicBoolean, paramarg1: boolean, paramarg2: boolean): boolean;
    static compareAndExchange(paramarg0: AtomicInteger, paramarg1: number, paramarg2: number): number;
    static compareAndExchange(paramarg0: AtomicIntegerArray, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static compareAndExchange(paramarg0: AtomicLong, paramarg1: number, paramarg2: number): number;
    static compareAndExchange(paramarg0: AtomicLongArray, paramarg1: number, paramarg2: number, paramarg3: number): number;
}