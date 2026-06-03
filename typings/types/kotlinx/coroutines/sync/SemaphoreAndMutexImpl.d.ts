import type { Object } from '../../../java/lang/Object.d.ts'
import type { CancellableContinuation } from '../../../kotlinx/coroutines/CancellableContinuation.d.ts'
import type { Waiter } from '../../../kotlinx/coroutines/Waiter.d.ts'
import type { SelectInstance } from '../../../kotlinx/coroutines/selects/SelectInstance.d.ts'
export class SemaphoreAndMutexImpl extends Object {
    constructor(permits: number, acquiredPermits: number)
    acquire(): void;
    // private acquire<W extends Object | number | string | boolean>(waiter: W, suspend: (param0: W) => boolean, onAcquired: (param0: W) => void): void;
    protected acquire(waiter: CancellableContinuation<void>): void;
    // private acquireSlowPath(): void;
    // private addAcquireToQueue(waiter: Waiter): boolean;
    // private coerceAvailablePermitsAtMaximum(): void;
    // private decPermits(): number;
    protected onAcquireRegFunction(select: SelectInstance<Object>, ignoredParam: Object | null): void;
    release(): void;
    tryAcquire(): boolean;
    // private tryResumeNextFromQueue(): boolean;
}