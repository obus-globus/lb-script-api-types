import type { AtomicBoolean } from '../../../java/util/concurrent/atomic/AtomicBoolean.d.ts'
import type { AtomicInteger } from '../../../java/util/concurrent/atomic/AtomicInteger.d.ts'
import type { AtomicIntegerArray } from '../../../java/util/concurrent/atomic/AtomicIntegerArray.d.ts'
import type { AtomicLong } from '../../../java/util/concurrent/atomic/AtomicLong.d.ts'
import type { AtomicLongArray } from '../../../java/util/concurrent/atomic/AtomicLongArray.d.ts'
import type { AtomicReference } from '../../../java/util/concurrent/atomic/AtomicReference.d.ts'
import type { AtomicReferenceArray } from '../../../java/util/concurrent/atomic/AtomicReferenceArray.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class AtomicIntrinsicsKt extends Object {
    static compareAndExchange<T extends unknown>(self: AtomicReference<T>, expected: T, newValue: T): T;
    static compareAndExchange<T extends unknown>(self: AtomicReferenceArray<T>, index: number, expected: T, newValue: T): T;
    static compareAndExchange(self: AtomicBoolean, expected: boolean, newValue: boolean): boolean;
    static compareAndExchange(self: AtomicInteger, expected: number, newValue: number): number;
    static compareAndExchange(self: AtomicIntegerArray, index: number, expected: number, newValue: number): number;
    static compareAndExchange(self: AtomicLong, expected: number, newValue: number): number;
    static compareAndExchange(self: AtomicLongArray, index: number, expected: number, newValue: number): number;
}