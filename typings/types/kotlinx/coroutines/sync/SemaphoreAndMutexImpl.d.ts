import type { Object } from '../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../kotlin/coroutines/Continuation.d.ts'
import type { AtomicInt } from '../../../kotlinx/atomicfu/AtomicInt.d.ts'
import type { Waiter } from '../../../kotlinx/coroutines/Waiter.d.ts'
import type { SelectInstance } from '../../../kotlinx/coroutines/selects/SelectInstance.d.ts'
export class SemaphoreAndMutexImpl extends Object {
    constructor(permits: number, acquiredPermits: number)
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    acquire($completion: Continuation<void>): any;
    // private acquire<W extends unknown>(waiter: W, suspend: (param0: W) => boolean, onAcquired: (param0: W) => void): void;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    // private acquireSlowPath($completion: Continuation<void>): any;
    // private addAcquireToQueue(waiter: Waiter): boolean;
    // private coerceAvailablePermitsAtMaximum(): void;
    // private decPermits(): number;
    protected onAcquireRegFunction(select: SelectInstance<Object>, ignoredParam: Object | null): void;
    release(): void;
    tryAcquire(): boolean;
    // private tryResumeNextFromQueue(): boolean;
}