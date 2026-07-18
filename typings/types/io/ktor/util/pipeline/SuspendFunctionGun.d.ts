import type { PipelineContext } from '../../../../io/ktor/util/pipeline/PipelineContext.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Result } from '../../../../kotlin/Result.d.ts'
import type { Continuation } from '../../../../kotlin/coroutines/Continuation.d.ts'
import type { CoroutineContext } from '../../../../kotlin/coroutines/CoroutineContext.d.ts'
export class SuspendFunctionGun<TSubject extends unknown, TContext extends unknown> extends PipelineContext<TSubject, TContext> {
    constructor(initial: TSubject, context: TContext, interceptors: (param0: PipelineContext<TSubject, TContext>, param1: TSubject) => void[])
    // private continuation: Continuation<void>;
    /*not mapped: */ getContinuation$ktor_utils(): Continuation<void>;
    readonly coroutineContext: CoroutineContext;
    // private index: number;
    // private interceptors: (param0: PipelineContext<TSubject, TContext>, param1: TSubject) => void[];
    // private lastSuspensionIndex: number;
    subject: TSubject;
    // private suspensions: (Continuation<TSubject> | null)[];
    addContinuation(continuation: Continuation<TSubject>): void;
    // private discardLastRootContinuation(): void;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    execute(initial: TSubject, $completion: Continuation<TSubject>): any;
    finish(): void;
    // private loop(direct: boolean): boolean;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    proceed($completion: Continuation<TSubject>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    proceedWith(subject: TSubject, $completion: Continuation<TSubject>): any;
    // private resumeRootWith(result: Result<TSubject>): void;
}