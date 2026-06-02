import type { Throwable } from '../../java/lang/Throwable.d.ts'
import type { Continuation } from '../../kotlin/coroutines/Continuation.d.ts'
import type { JobNode } from '../../kotlinx/coroutines/JobNode.d.ts'
export class ResumeOnCompletion extends JobNode {
    constructor(continuation: Continuation<void>)
    // private continuation: Continuation<void>;
    readonly onCancelling: boolean;
    invoke(cause: Throwable | null): void;
}