import type { Object } from '../../java/lang/Object.d.ts'
import type { AtomicBoolean } from '../../kotlinx/atomicfu/AtomicBoolean.d.ts'
import type { AtomicInt } from '../../kotlinx/atomicfu/AtomicInt.d.ts'
import type { AtomicLong } from '../../kotlinx/atomicfu/AtomicLong.d.ts'
import type { AtomicRef } from '../../kotlinx/atomicfu/AtomicRef.d.ts'
import type { TraceBase } from '../../kotlinx/atomicfu/TraceBase.d.ts'
export class AtomicFU extends Object {
    static atomic<T extends unknown>(initial: T): AtomicRef<T>;
    static atomic<T extends unknown>(initial: T, trace: TraceBase): AtomicRef<T>;
    static atomic(initial: boolean): AtomicBoolean;
    static atomic(initial: boolean, trace: TraceBase): AtomicBoolean;
    static atomic(initial: number): AtomicInt;
    static atomic(initial: number, trace: TraceBase): AtomicInt;
    static atomic(initial: number): AtomicLong;
    static atomic(initial: number, trace: TraceBase): AtomicLong;
}