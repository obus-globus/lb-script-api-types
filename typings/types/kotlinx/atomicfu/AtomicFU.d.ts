import type { Object } from '../../java/lang/Object.d.ts'
import type { AtomicBoolean } from '../../kotlinx/atomicfu/AtomicBoolean.d.ts'
import type { AtomicInt } from '../../kotlinx/atomicfu/AtomicInt.d.ts'
import type { AtomicLong } from '../../kotlinx/atomicfu/AtomicLong.d.ts'
import type { AtomicRef } from '../../kotlinx/atomicfu/AtomicRef.d.ts'
import type { TraceBase } from '../../kotlinx/atomicfu/TraceBase.d.ts'
export class AtomicFU extends Object {
    static atomic(paramarg0: Object | null): AtomicRef<Object>;
    static atomic(paramarg0: Object | null, paramarg1: TraceBase): AtomicRef<Object>;
    static atomic(paramarg0: boolean): AtomicBoolean;
    static atomic(paramarg0: boolean, paramarg1: TraceBase): AtomicBoolean;
    static atomic(paramarg0: number): AtomicInt;
    static atomic(paramarg0: number, paramarg1: TraceBase): AtomicInt;
    static atomic(paramarg0: number): AtomicLong;
    static atomic(paramarg0: number, paramarg1: TraceBase): AtomicLong;
}