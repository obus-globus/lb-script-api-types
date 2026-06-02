import type { Object } from '../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../kotlin/coroutines/Continuation.d.ts'
import type { DisposableHandle } from '../../../kotlinx/coroutines/DisposableHandle.d.ts'
import type { SharedFlowImpl } from '../../../kotlinx/coroutines/flow/SharedFlowImpl.d.ts'
export class SharedFlowImpl$Emitter extends Object implements DisposableHandle {
    constructor(flow: SharedFlowImpl<Object>, index: number, value: Object | null, cont: Continuation<void>)
    cont: Continuation<void>;
    flow: SharedFlowImpl<Object>;
    index: number;
    value: Object | null;
    dispose(): void;
}