import type { Object } from '../../../java/lang/Object.d.ts'
import type { CancellableFlow } from '../../../kotlinx/coroutines/flow/CancellableFlow.d.ts'
import type { Flow } from '../../../kotlinx/coroutines/flow/Flow.d.ts'
import type { FlowCollector } from '../../../kotlinx/coroutines/flow/FlowCollector.d.ts'
export class CancellableFlowImpl<T extends Object | number | string | boolean> extends Object implements CancellableFlow<T> {
    constructor(flow: Flow<T>)
    // private flow: Flow<T>;
    collect(collector: FlowCollector<T>): void;
}