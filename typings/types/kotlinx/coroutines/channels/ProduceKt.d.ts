import type { Object } from '../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../kotlin/coroutines/Continuation.d.ts'
import type { CoroutineContext } from '../../../kotlin/coroutines/CoroutineContext.d.ts'
import type { CoroutineScope } from '../../../kotlinx/coroutines/CoroutineScope.d.ts'
import type { CoroutineStart } from '../../../kotlinx/coroutines/CoroutineStart.d.ts'
import type { BufferOverflow } from '../../../kotlinx/coroutines/channels/BufferOverflow.d.ts'
import type { ProducerScope } from '../../../kotlinx/coroutines/channels/ProducerScope.d.ts'
import type { ReceiveChannel } from '../../../kotlinx/coroutines/channels/ReceiveChannel.d.ts'
export class ProduceKt extends Object {
    static awaitClose(paramarg0: ProducerScope<Object>, paramarg1: () => void, paramarg2: Continuation<Object>): Object;
    static produce(paramarg0: CoroutineScope, paramarg1: CoroutineContext, paramarg2: number, paramarg3: (param0: Object | null, param1: Object | null) => Object | null): ReceiveChannel<Object>;
    static produce(paramarg0: CoroutineScope, paramarg1: CoroutineContext, paramarg2: number, paramarg3: CoroutineStart, paramarg4: (param0: Object | null) => void, paramarg5: (param0: Object | null, param1: Object | null) => Object | null): ReceiveChannel<Object>;
    static produce(paramarg0: CoroutineScope, paramarg1: CoroutineContext, paramarg2: number, paramarg3: BufferOverflow, paramarg4: CoroutineStart, paramarg5: (param0: Object | null) => void, paramarg6: (param0: Object | null, param1: Object | null) => Object | null): ReceiveChannel<Object>;
}