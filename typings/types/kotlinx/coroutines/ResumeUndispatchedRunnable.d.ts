import type { Runnable } from '../../java/lang/Runnable.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { CancellableContinuation } from '../../kotlinx/coroutines/CancellableContinuation.d.ts'
import type { CoroutineDispatcher } from '../../kotlinx/coroutines/CoroutineDispatcher.d.ts'
export class ResumeUndispatchedRunnable extends Object implements Runnable {
    constructor(dispatcher: CoroutineDispatcher, continuation: CancellableContinuation<void>)
    // private continuation: CancellableContinuation<void>;
    // private dispatcher: CoroutineDispatcher;
    run(): void;
}