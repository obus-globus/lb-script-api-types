import type { Object } from '../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../kotlin/coroutines/Continuation.d.ts'
import type { CompletableJob } from '../../../kotlinx/coroutines/CompletableJob.d.ts'
import type { Job } from '../../../kotlinx/coroutines/Job.d.ts'
export class WebSocketWriter$FlushRequest extends Object {
    constructor(parent: Job | null)
    // private done: CompletableJob;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    await($completion: Continuation<void>): any;
    complete(): boolean;
}