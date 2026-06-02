import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Function2 } from '../../../../kotlin/jvm/functions/Function2.d.ts'
import type { Continuation } from '../../../../kotlin/coroutines/Continuation.d.ts'
import type { CoroutineContext } from '../../../../kotlin/coroutines/CoroutineContext.d.ts'
import type { Flow } from '../../../../kotlinx/coroutines/flow/Flow.d.ts'
import type { ChannelFlow } from '../../../../kotlinx/coroutines/flow/internal/ChannelFlow.d.ts'
export class ChannelFlowKt extends Object {
    static asChannelFlow(paramarg0: Flow<Object>): ChannelFlow<Object>;
    static withContextUndispatched(paramarg0: CoroutineContext, paramarg1: Object | null, paramarg2: Object, paramarg3: Function2<Object, Object, Object>, paramarg4: Continuation<Object>): Object;
}