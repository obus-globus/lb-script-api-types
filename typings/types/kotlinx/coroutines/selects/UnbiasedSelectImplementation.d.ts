import type { Object } from '../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../kotlin/coroutines/Continuation.d.ts'
import type { CoroutineContext } from '../../../kotlin/coroutines/CoroutineContext.d.ts'
import type { SelectImplementation } from '../../../kotlinx/coroutines/selects/SelectImplementation.d.ts'
import type { SelectImplementation$ClauseData } from '../../../kotlinx/coroutines/selects/SelectImplementation$ClauseData.d.ts'
export class UnbiasedSelectImplementation<R extends unknown> extends SelectImplementation<R> {
    constructor(context: CoroutineContext)
    // private clausesToRegister: SelectImplementation$ClauseData[];
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    doSelect($completion: Continuation<R>): any;
    // private shuffleAndRegisterClauses(): void;
}