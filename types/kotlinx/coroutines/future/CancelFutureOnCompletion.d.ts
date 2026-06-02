import type { Future } from '../../../java/util/concurrent/Future.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
import type { JobNode } from '../../../kotlinx/coroutines/JobNode.d.ts'
export class CancelFutureOnCompletion extends JobNode {
    constructor(future: Future<Object>)
    // private future: Future<Object>;
    readonly onCancelling: boolean;
    invoke(cause: Throwable | null): void;
}