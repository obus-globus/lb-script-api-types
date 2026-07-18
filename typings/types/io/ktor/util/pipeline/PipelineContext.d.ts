import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../../kotlin/coroutines/Continuation.d.ts'
import type { CoroutineContext } from '../../../../kotlin/coroutines/CoroutineContext.d.ts'
import type { CoroutineScope } from '../../../../kotlinx/coroutines/CoroutineScope.d.ts'
export abstract class PipelineContext<TSubject extends unknown, TContext extends unknown> extends Object implements CoroutineScope {
    constructor(context: TContext)
    readonly context: TContext;
    /*not mapped: */ getCoroutineContext(): CoroutineContext;
    subject: TSubject;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    execute(initial: TSubject, $completion: Continuation<TSubject>): any;
    finish(): void;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    proceed($completion: Continuation<TSubject>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    proceedWith(subject: TSubject, $completion: Continuation<TSubject>): any;
}