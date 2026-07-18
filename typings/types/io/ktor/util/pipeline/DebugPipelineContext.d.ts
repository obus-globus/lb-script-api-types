import type { PipelineContext } from '../../../../io/ktor/util/pipeline/PipelineContext.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../../kotlin/coroutines/Continuation.d.ts'
import type { CoroutineContext } from '../../../../kotlin/coroutines/CoroutineContext.d.ts'
export class DebugPipelineContext<TSubject extends unknown, TContext extends unknown> extends PipelineContext<TSubject, TContext> {
    constructor(context: TContext, interceptors: (param0: PipelineContext<TSubject, TContext>, param1: TSubject) => void[], subject: TSubject, coroutineContext: CoroutineContext)
    readonly coroutineContext: CoroutineContext;
    // private index: number;
    // private interceptors: (param0: PipelineContext<TSubject, TContext>, param1: TSubject) => void[];
    subject: TSubject;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    execute(initial: TSubject, $completion: Continuation<TSubject>): any;
    finish(): void;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    proceed($completion: Continuation<TSubject>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    // private proceedLoop($completion: Continuation<TSubject>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    proceedWith(subject: TSubject, $completion: Continuation<TSubject>): any;
}