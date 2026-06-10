import type { Object } from '../../../java/lang/Object.d.ts'
import type { CoroutineContext } from '../../../kotlin/coroutines/CoroutineContext.d.ts'
import type { CoroutineScope } from '../../../kotlinx/coroutines/CoroutineScope.d.ts'
import type { CoroutineStart } from '../../../kotlinx/coroutines/CoroutineStart.d.ts'
import type { BroadcastChannel } from '../../../kotlinx/coroutines/channels/BroadcastChannel.d.ts'
import type { ReceiveChannel } from '../../../kotlinx/coroutines/channels/ReceiveChannel.d.ts'
export class BroadcastKt extends Object {
    static broadcast(paramarg0: CoroutineScope, paramarg1: CoroutineContext, paramarg2: number, paramarg3: CoroutineStart, paramarg4: (param0: Object) => void, paramarg5: (param0: Object, param1: Object) => Object): BroadcastChannel<Object>;
    static broadcast(paramarg0: ReceiveChannel<Object>, paramarg1: number, paramarg2: CoroutineStart): BroadcastChannel<Object>;
}