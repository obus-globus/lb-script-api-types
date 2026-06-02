import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Result } from '../../../../kotlin/Result.d.ts'
import type { Continuation } from '../../../../kotlin/coroutines/Continuation.d.ts'
import type { CoroutineContext } from '../../../../kotlin/coroutines/CoroutineContext.d.ts'
export class RunSuspend extends Object implements Continuation<void> {
    constructor()
    readonly context: CoroutineContext;
    result: Result<void> | null;
    await(): void;
    resumeWith(result: Result<void>): void;
}