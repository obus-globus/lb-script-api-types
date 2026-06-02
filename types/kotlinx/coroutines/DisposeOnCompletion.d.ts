import type { Throwable } from '../../java/lang/Throwable.d.ts'
import type { DisposableHandle } from '../../kotlinx/coroutines/DisposableHandle.d.ts'
import type { JobNode } from '../../kotlinx/coroutines/JobNode.d.ts'
export class DisposeOnCompletion extends JobNode {
    constructor(handle: DisposableHandle)
    // private handle: DisposableHandle;
    readonly onCancelling: boolean;
    invoke(cause: Throwable | null): void;
}