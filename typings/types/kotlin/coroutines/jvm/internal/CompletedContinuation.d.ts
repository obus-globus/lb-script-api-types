import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Result } from '../../../../kotlin/Result.d.ts'
import type { Continuation } from '../../../../kotlin/coroutines/Continuation.d.ts'
import type { CoroutineContext } from '../../../../kotlin/coroutines/CoroutineContext.d.ts'
export class CompletedContinuation extends Object implements Continuation<Object> {
    static INSTANCE: CompletedContinuation;
    readonly context: CoroutineContext;
    resumeWith(result: Result<Object>): void;
    toString(): string;
}