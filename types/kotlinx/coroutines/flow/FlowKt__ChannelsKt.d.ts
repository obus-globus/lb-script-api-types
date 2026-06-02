import type { Object } from '../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../kotlin/coroutines/Continuation.d.ts'
import type { CoroutineScope } from '../../../kotlinx/coroutines/CoroutineScope.d.ts'
import type { ReceiveChannel } from '../../../kotlinx/coroutines/channels/ReceiveChannel.d.ts'
import type { Flow } from '../../../kotlinx/coroutines/flow/Flow.d.ts'
import type { FlowCollector } from '../../../kotlinx/coroutines/flow/FlowCollector.d.ts'
export class FlowKt__ChannelsKt extends Object {
    static consumeAsFlow(paramarg0: ReceiveChannel<Object>): Flow<Object>;
    static emitAll(paramarg0: FlowCollector<Object>, paramarg1: ReceiveChannel<Object>, paramarg2: Continuation<Object>): Object;
    static produceIn(paramarg0: Flow<Object>, paramarg1: CoroutineScope): ReceiveChannel<Object>;
    static receiveAsFlow(paramarg0: ReceiveChannel<Object>): Flow<Object>;
}