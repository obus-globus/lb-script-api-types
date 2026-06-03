import type { Continuation } from '../../kotlin/coroutines/Continuation.d.ts'
import type { CoroutineContext } from '../../kotlin/coroutines/CoroutineContext.d.ts'
import type { CoroutineScope } from '../../kotlinx/coroutines/CoroutineScope.d.ts'
import type { Job$Key } from '../../kotlinx/coroutines/Job$Key.d.ts'
import type { StandaloneCoroutine } from '../../kotlinx/coroutines/StandaloneCoroutine.d.ts'
export class LazyStandaloneCoroutine extends StandaloneCoroutine {
    static Key: Job$Key;
    constructor(parentContext: CoroutineContext, block: (param0: CoroutineScope) => void)
    // private continuation: Continuation<void>;
    protected onStart(): void;
}