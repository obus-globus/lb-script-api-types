import type { Function1 } from '../../kotlin/jvm/functions/Function1.d.ts'
import type { Throwable } from '../../java/lang/Throwable.d.ts'
import type { JobNode } from '../../kotlinx/coroutines/JobNode.d.ts'
export class InvokeOnCancelling extends JobNode {
    constructor(handler: Function1<Throwable, void>)
    invoke(cause: Throwable | null): void;
}