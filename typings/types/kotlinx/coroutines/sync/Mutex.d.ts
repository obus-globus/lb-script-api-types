import type { Object } from '../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../kotlin/coroutines/Continuation.d.ts'
import type { SelectClause2 } from '../../../kotlinx/coroutines/selects/SelectClause2.d.ts'
export interface Mutex extends Object{
    /*not mapped: */ isLocked(): boolean;
    readonly onLock: SelectClause2<Object, Mutex>;
    holdsLock(owner: Object): boolean;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    lock(owner: Object | null, $completion: Continuation<void>): any;
    tryLock(owner: Object | null): boolean;
    unlock(owner: Object | null): void;
}