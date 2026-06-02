import type { Object } from '../../../java/lang/Object.d.ts'
import type { Function0 } from '../../../kotlin/jvm/functions/Function0.d.ts'
import type { Function1 } from '../../../kotlin/jvm/functions/Function1.d.ts'
import type { Function2 } from '../../../kotlin/jvm/functions/Function2.d.ts'
import type { Continuation } from '../../../kotlin/coroutines/Continuation.d.ts'
import type { CoroutineContext } from '../../../kotlin/coroutines/CoroutineContext.d.ts'
import type { CoroutineScope } from '../../../kotlinx/coroutines/CoroutineScope.d.ts'
import type { CoroutineStart } from '../../../kotlinx/coroutines/CoroutineStart.d.ts'
import type { BufferOverflow } from '../../../kotlinx/coroutines/channels/BufferOverflow.d.ts'
import type { ProducerScope } from '../../../kotlinx/coroutines/channels/ProducerScope.d.ts'
import type { ReceiveChannel } from '../../../kotlinx/coroutines/channels/ReceiveChannel.d.ts'
export class ProduceKt extends Object {
    static awaitClose(paramarg0: ProducerScope<Object>, paramarg1: Function0<void>, paramarg2: Continuation<Object>): Object;
    static produce(paramarg0: CoroutineScope, paramarg1: CoroutineContext, paramarg2: number, paramarg3: Function2<Object, Object, Object>): ReceiveChannel<Object>;
    static produce(paramarg0: CoroutineScope, paramarg1: CoroutineContext, paramarg2: number, paramarg3: CoroutineStart, paramarg4: Function1<Object, void>, paramarg5: Function2<Object, Object, Object>): ReceiveChannel<Object>;
    static produce(paramarg0: CoroutineScope, paramarg1: CoroutineContext, paramarg2: number, paramarg3: BufferOverflow, paramarg4: CoroutineStart, paramarg5: Function1<Object, void>, paramarg6: Function2<Object, Object, Object>): ReceiveChannel<Object>;
}