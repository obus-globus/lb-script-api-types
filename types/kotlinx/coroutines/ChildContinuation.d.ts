import type { Object } from '../../java/lang/Object.d.ts'
import type { Throwable } from '../../java/lang/Throwable.d.ts'
import type { CancellableContinuationImpl } from '../../kotlinx/coroutines/CancellableContinuationImpl.d.ts'
import type { JobNode } from '../../kotlinx/coroutines/JobNode.d.ts'
export class ChildContinuation extends JobNode {
    constructor(child: CancellableContinuationImpl<Object>)
    child: CancellableContinuationImpl<Object>;
    readonly onCancelling: boolean;
    invoke(cause: Throwable | null): void;
}