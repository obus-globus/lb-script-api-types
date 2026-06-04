import type { Throwable } from '../../java/lang/Throwable.d.ts'
import type { AtomicBoolean } from '../../kotlinx/atomicfu/AtomicBoolean.d.ts'
import type { JobNode } from '../../kotlinx/coroutines/JobNode.d.ts'
export class InvokeOnCancelling extends JobNode {
    constructor(handler: (param0: Throwable | null) => void)
    invoke(cause: Throwable | null): void;
}