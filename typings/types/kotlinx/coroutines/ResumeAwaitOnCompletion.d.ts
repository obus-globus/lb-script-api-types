import type { Object } from '../../java/lang/Object.d.ts'
import type { Throwable } from '../../java/lang/Throwable.d.ts'
import type { CancellableContinuationImpl } from '../../kotlinx/coroutines/CancellableContinuationImpl.d.ts'
import type { JobNode } from '../../kotlinx/coroutines/JobNode.d.ts'
export class ResumeAwaitOnCompletion<T extends unknown> extends JobNode {
    constructor(continuation: CancellableContinuationImpl<T>)
    // private continuation: CancellableContinuationImpl<T>;
    readonly onCancelling: boolean;
    invoke(cause: Throwable | null): void;
}