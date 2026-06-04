import type { Throwable } from '../../java/lang/Throwable.d.ts'
import type { AtomicRef } from '../../kotlinx/atomicfu/AtomicRef.d.ts'
import type { AwaitAll$DisposeHandlersOnCancel } from '../../kotlinx/coroutines/AwaitAll$DisposeHandlersOnCancel.d.ts'
import type { CancellableContinuation } from '../../kotlinx/coroutines/CancellableContinuation.d.ts'
import type { JobNode } from '../../kotlinx/coroutines/JobNode.d.ts'
export class AwaitAll$AwaitAllNode extends JobNode {
    constructor(null_: AwaitAll$AwaitAllNode, continuation: CancellableContinuation<T[]>)
    invoke(cause: Throwable | null): void;
}