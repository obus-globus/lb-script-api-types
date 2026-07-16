import type { AtomicInteger } from '../../../java/util/concurrent/atomic/AtomicInteger.d.ts'
import type { AtomicLong } from '../../../java/util/concurrent/atomic/AtomicLong.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class AtomicsKt__Atomics_commonKt extends Object {
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