import type { Object } from '../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
import type { Continuation } from '../../../kotlin/coroutines/Continuation.d.ts'
import type { CancellableContinuationImpl } from '../../../kotlinx/coroutines/CancellableContinuationImpl.d.ts'
import type { UnbiasedSelectImplementation } from '../../../kotlinx/coroutines/selects/UnbiasedSelectImplementation.d.ts'
export class UnbiasedSelectBuilderImpl<R extends Object | number | string | boolean> extends UnbiasedSelectImplementation<R> {
    constructor(uCont: Continuation<R>)
    // private cont: CancellableContinuationImpl<R>;
    handleBuilderException(e: Throwable): void;
    initSelectResult(): Object | null;
}