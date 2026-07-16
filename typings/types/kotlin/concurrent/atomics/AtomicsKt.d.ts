import type { AtomicBoolean } from '../../../java/util/concurrent/atomic/AtomicBoolean.d.ts'
import type { AtomicInteger } from '../../../java/util/concurrent/atomic/AtomicInteger.d.ts'
import type { AtomicLong } from '../../../java/util/concurrent/atomic/AtomicLong.d.ts'
import type { AtomicReference } from '../../../java/util/concurrent/atomic/AtomicReference.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { AtomicsKt__Atomics_jvmKt } from '../../../kotlin/concurrent/atomics/AtomicsKt__Atomics_jvmKt.d.ts'
export class AtomicsKt extends AtomicsKt__Atomics_jvmKt {
    static asJavaAtomic<T extends unknown>(self: AtomicReference<T>): AtomicReference<T>;
    static asJavaAtomic(self: AtomicBoolean): AtomicBoolean;
    static asJavaAtomic(self: AtomicInteger): AtomicInteger;
    static asJavaAtomic(self: AtomicLong): AtomicLong;
    static asKotlinAtomic<T extends unknown>(self: AtomicReference<T>): AtomicReference<T>;
    static asKotlinAtomic(self: AtomicBoolean): AtomicBoolean;
    static asKotlinAtomic(self: AtomicInteger): AtomicInteger;
    static asKotlinAtomic(self: AtomicLong): AtomicLong;
    static decrementAndFetch(self: AtomicInteger): number;
    static decrementAndFetch(self: AtomicLong): number;
    static fetchAndDecrement(self: AtomicInteger): number;
    static fetchAndDecrement(self: AtomicLong): number;
    static fetchAndIncrement(self: AtomicInteger): number;
    static fetchAndIncrement(self: AtomicLong): number;
    static incrementAndFetch(self: AtomicInteger): number;
    static incrementAndFetch(self: AtomicLong): number;
    static minusAssign(self: AtomicInteger, delta: number): void;
    static minusAssign(self: AtomicLong, delta: number): void;
    static plusAssign(self: AtomicInteger, delta: number): void;
    static plusAssign(self: AtomicLong, delta: number): void;
}