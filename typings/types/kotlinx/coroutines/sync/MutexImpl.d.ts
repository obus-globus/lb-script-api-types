import type { Object } from '../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
import type { Continuation } from '../../../kotlin/coroutines/Continuation.d.ts'
import type { CoroutineContext } from '../../../kotlin/coroutines/CoroutineContext.d.ts'
import type { AtomicRef } from '../../../kotlinx/atomicfu/AtomicRef.d.ts'
import type { SelectClause2 } from '../../../kotlinx/coroutines/selects/SelectClause2.d.ts'
import type { SelectInstance } from '../../../kotlinx/coroutines/selects/SelectInstance.d.ts'
import type { Mutex } from '../../../kotlinx/coroutines/sync/Mutex.d.ts'
import type { SemaphoreAndMutexImpl } from '../../../kotlinx/coroutines/sync/SemaphoreAndMutexImpl.d.ts'
export class MutexImpl extends SemaphoreAndMutexImpl implements Mutex {
    constructor(locked: boolean)
    holdsLock(owner: Object): boolean;
    // private holdsLockImpl(owner: Object | null): number;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    lock(owner: Object | null, $completion: Continuation<void>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    // private lockSuspend(owner: Object | null, $completion: Continuation<void>): any;
    protected onLockProcessResult(owner: Object | null, result: Object | null): Object | null;
    protected onLockRegFunction(select: SelectInstance<Object>, owner: Object | null): void;
    toString(): string;
    tryLock(owner: Object | null): boolean;
    // private tryLockImpl(owner: Object | null): number;
    unlock(owner: Object | null): void;
}