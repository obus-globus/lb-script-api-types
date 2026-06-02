import type { Object } from '../../java/lang/Object.d.ts'
import type { Throwable } from '../../java/lang/Throwable.d.ts'
import type { JobNode } from '../../kotlinx/coroutines/JobNode.d.ts'
import type { SelectInstance } from '../../kotlinx/coroutines/selects/SelectInstance.d.ts'
export class JobSupport$SelectOnAwaitCompletionHandler extends JobNode {
    constructor(null_: JobSupport$SelectOnAwaitCompletionHandler, select: SelectInstance<Object>)
    readonly onCancelling: boolean;
    // private select: SelectInstance<Object>;
    invoke(cause: Throwable | null): void;
}