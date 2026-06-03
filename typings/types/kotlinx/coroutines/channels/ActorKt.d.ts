import type { Object } from '../../../java/lang/Object.d.ts'
import type { CoroutineContext } from '../../../kotlin/coroutines/CoroutineContext.d.ts'
import type { CoroutineScope } from '../../../kotlinx/coroutines/CoroutineScope.d.ts'
import type { CoroutineStart } from '../../../kotlinx/coroutines/CoroutineStart.d.ts'
import type { SendChannel } from '../../../kotlinx/coroutines/channels/SendChannel.d.ts'
export class ActorKt extends Object {
    static actor(paramarg0: CoroutineScope, paramarg1: CoroutineContext, paramarg2: number, paramarg3: CoroutineStart, paramarg4: (param0: Object | null) => void, paramarg5: (param0: Object | null, param1: Object | null) => Object | null): SendChannel<Object>;
}