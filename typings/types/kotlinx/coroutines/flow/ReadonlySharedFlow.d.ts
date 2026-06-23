import type { Object } from '../../../java/lang/Object.d.ts'
import type { CoroutineContext } from '../../../kotlin/coroutines/CoroutineContext.d.ts'
import type { Job } from '../../../kotlinx/coroutines/Job.d.ts'
import type { BufferOverflow } from '../../../kotlinx/coroutines/channels/BufferOverflow.d.ts'
import type { CancellableFlow } from '../../../kotlinx/coroutines/flow/CancellableFlow.d.ts'
import type { Flow } from '../../../kotlinx/coroutines/flow/Flow.d.ts'
import type { FlowCollector } from '../../../kotlinx/coroutines/flow/FlowCollector.d.ts'
import type { SharedFlow } from '../../../kotlinx/coroutines/flow/SharedFlow.d.ts'
import type { FusibleFlow } from '../../../kotlinx/coroutines/flow/internal/FusibleFlow.d.ts'
export class ReadonlySharedFlow<T extends unknown> extends Object implements CancellableFlow<T>, SharedFlow<T>, FusibleFlow<T> {
    constructor(flow: SharedFlow<T>, job: Job | null)
    // private job: Job | null;
    readonly replayCache: T[];
    collect(collector: FlowCollector<T>): void;
    fuse(context: CoroutineContext, capacity: number, onBufferOverflow: BufferOverflow): Flow<T>;
}