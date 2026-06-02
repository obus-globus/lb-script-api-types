import type { AtomicInteger } from '../../../java/util/concurrent/atomic/AtomicInteger.d.ts'
import type { AtomicLong } from '../../../java/util/concurrent/atomic/AtomicLong.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class AtomicsKt__Atomics_commonKt extends Object {
    static decrementAndFetch(paramarg0: AtomicInteger): number;
    static decrementAndFetch(paramarg0: AtomicLong): number;
    static fetchAndDecrement(paramarg0: AtomicInteger): number;
    static fetchAndDecrement(paramarg0: AtomicLong): number;
    static fetchAndIncrement(paramarg0: AtomicInteger): number;
    static fetchAndIncrement(paramarg0: AtomicLong): number;
    static incrementAndFetch(paramarg0: AtomicInteger): number;
    static incrementAndFetch(paramarg0: AtomicLong): number;
    static minusAssign(paramarg0: AtomicInteger, paramarg1: number): void;
    static minusAssign(paramarg0: AtomicLong, paramarg1: number): void;
    static plusAssign(paramarg0: AtomicInteger, paramarg1: number): void;
    static plusAssign(paramarg0: AtomicLong, paramarg1: number): void;
}