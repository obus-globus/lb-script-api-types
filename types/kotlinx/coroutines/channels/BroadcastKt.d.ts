import type { Object } from '../../../java/lang/Object.d.ts'
import type { Function1 } from '../../../kotlin/jvm/functions/Function1.d.ts'
import type { Function2 } from '../../../kotlin/jvm/functions/Function2.d.ts'
import type { CoroutineContext } from '../../../kotlin/coroutines/CoroutineContext.d.ts'
import type { CoroutineScope } from '../../../kotlinx/coroutines/CoroutineScope.d.ts'
import type { CoroutineStart } from '../../../kotlinx/coroutines/CoroutineStart.d.ts'
import type { BroadcastChannel } from '../../../kotlinx/coroutines/channels/BroadcastChannel.d.ts'
import type { ReceiveChannel } from '../../../kotlinx/coroutines/channels/ReceiveChannel.d.ts'
export class BroadcastKt extends Object {
    static broadcast(paramarg0: CoroutineScope, paramarg1: CoroutineContext, paramarg2: number, paramarg3: CoroutineStart, paramarg4: Function1<Object, void>, paramarg5: Function2<Object, Object, Object>): BroadcastChannel<Object>;
    static broadcast(paramarg0: ReceiveChannel<Object>, paramarg1: number, paramarg2: CoroutineStart): BroadcastChannel<Object>;
}