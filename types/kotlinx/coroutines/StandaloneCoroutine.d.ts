import type { Throwable } from '../../java/lang/Throwable.d.ts'
import type { CoroutineContext } from '../../kotlin/coroutines/CoroutineContext.d.ts'
import type { AbstractCoroutine } from '../../kotlinx/coroutines/AbstractCoroutine.d.ts'
import type { Job$Key } from '../../kotlinx/coroutines/Job$Key.d.ts'
export class StandaloneCoroutine extends AbstractCoroutine<void> {
    static Key: Job$Key;
    constructor(parentContext: CoroutineContext, active: boolean)
    protected handleJobException(exception: Throwable): boolean;
}