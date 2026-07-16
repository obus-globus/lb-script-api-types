import type { Object } from '../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../kotlin/coroutines/Continuation.d.ts'
import type { CoroutineScope } from '../../../kotlinx/coroutines/CoroutineScope.d.ts'
import type { ReceiveChannel } from '../../../kotlinx/coroutines/channels/ReceiveChannel.d.ts'
import type { Flow } from '../../../kotlinx/coroutines/flow/Flow.d.ts'
import type { FlowCollector } from '../../../kotlinx/coroutines/flow/FlowCollector.d.ts'
export class FlowKt__ChannelsKt extends Object {
    static consumeAsFlow<T extends unknown>(paramarg0: ReceiveChannel<T>): Flow<T>;
    static emitAll<T extends unknown>(paramarg0: FlowCollector<Object>, paramarg1: ReceiveChannel<T>, paramarg2: Continuation<Object>): Object;
    static produceIn<T extends unknown>(paramarg0: Flow<T>, paramarg1: CoroutineScope): ReceiveChannel<T>;
    static receiveAsFlow<T extends unknown>(paramarg0: ReceiveChannel<T>): Flow<T>;
}