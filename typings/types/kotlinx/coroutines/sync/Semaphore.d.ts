import type { Object } from '../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../kotlin/coroutines/Continuation.d.ts'
export interface Semaphore extends Object{
    readonly availablePermits: number;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    acquire($completion: Continuation<void>): any;
    release(): void;
    tryAcquire(): boolean;
}