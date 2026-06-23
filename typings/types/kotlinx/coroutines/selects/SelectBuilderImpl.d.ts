import type { Object } from '../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
import type { Continuation } from '../../../kotlin/coroutines/Continuation.d.ts'
import type { CancellableContinuationImpl } from '../../../kotlinx/coroutines/CancellableContinuationImpl.d.ts'
import type { SelectImplementation } from '../../../kotlinx/coroutines/selects/SelectImplementation.d.ts'
export class SelectBuilderImpl<R extends unknown> extends SelectImplementation<R> {
    constructor(uCont: Continuation<R>)
    // private cont: CancellableContinuationImpl<R>;
    getResult(): Object | null;
    handleBuilderException(e: Throwable): void;
}