import type { AtomicBoolean } from '../../../java/util/concurrent/atomic/AtomicBoolean.d.ts'
import type { AtomicInteger } from '../../../java/util/concurrent/atomic/AtomicInteger.d.ts'
import type { AtomicLong } from '../../../java/util/concurrent/atomic/AtomicLong.d.ts'
import type { AtomicReference } from '../../../java/util/concurrent/atomic/AtomicReference.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { AtomicsKt__Atomics_jvmKt } from '../../../kotlin/concurrent/atomics/AtomicsKt__Atomics_jvmKt.d.ts'
export class AtomicsKt extends AtomicsKt__Atomics_jvmKt {
    static asJavaAtomic(paramarg0: AtomicReference<Object>): AtomicReference<Object>;
    static asJavaAtomic(paramarg0: AtomicBoolean): AtomicBoolean;
    static asJavaAtomic(paramarg0: AtomicInteger): AtomicInteger;
    static asJavaAtomic(paramarg0: AtomicLong): AtomicLong;
    static asKotlinAtomic(paramarg0: AtomicReference<Object>): AtomicReference<Object>;
    static asKotlinAtomic(paramarg0: AtomicBoolean): AtomicBoolean;
    static asKotlinAtomic(paramarg0: AtomicInteger): AtomicInteger;
    static asKotlinAtomic(paramarg0: AtomicLong): AtomicLong;
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