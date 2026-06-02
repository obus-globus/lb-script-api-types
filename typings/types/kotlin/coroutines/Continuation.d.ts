import type { Object } from '../../java/lang/Object.d.ts'
import type { Result } from '../../kotlin/Result.d.ts'
import type { CoroutineContext } from '../../kotlin/coroutines/CoroutineContext.d.ts'
export interface Continuation<T extends Object | number | string | boolean> extends Object{
    readonly context: CoroutineContext;
    resumeWith(result: Result<T>): void;
}