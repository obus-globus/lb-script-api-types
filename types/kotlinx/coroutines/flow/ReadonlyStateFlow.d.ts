import type { Object } from '../../../java/lang/Object.d.ts'
import type { CoroutineContext } from '../../../kotlin/coroutines/CoroutineContext.d.ts'
import type { Job } from '../../../kotlinx/coroutines/Job.d.ts'
import type { BufferOverflow } from '../../../kotlinx/coroutines/channels/BufferOverflow.d.ts'
import type { CancellableFlow } from '../../../kotlinx/coroutines/flow/CancellableFlow.d.ts'
import type { Flow } from '../../../kotlinx/coroutines/flow/Flow.d.ts'
import type { FlowCollector } from '../../../kotlinx/coroutines/flow/FlowCollector.d.ts'
import type { StateFlow } from '../../../kotlinx/coroutines/flow/StateFlow.d.ts'
import type { FusibleFlow } from '../../../kotlinx/coroutines/flow/internal/FusibleFlow.d.ts'
export class ReadonlyStateFlow<T extends Object | number | string | boolean> extends Object implements CancellableFlow<T>, StateFlow<T>, FusibleFlow<T> {
    constructor(flow: StateFlow<T>, job: Job | null)
    // private job: Job | null;
    readonly replayCache: T[];
    readonly value: T;
    collect(collector: FlowCollector<T>): void;
    fuse(context: CoroutineContext, capacity: number, onBufferOverflow: BufferOverflow): Flow<T>;
}