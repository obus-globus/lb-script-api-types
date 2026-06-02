import type { Object } from '../../../java/lang/Object.d.ts'
import type { Function1 } from '../../../kotlin/jvm/functions/Function1.d.ts'
import type { Function2 } from '../../../kotlin/jvm/functions/Function2.d.ts'
import type { CoroutineContext } from '../../../kotlin/coroutines/CoroutineContext.d.ts'
import type { CoroutineScope } from '../../../kotlinx/coroutines/CoroutineScope.d.ts'
import type { CoroutineStart } from '../../../kotlinx/coroutines/CoroutineStart.d.ts'
import type { SendChannel } from '../../../kotlinx/coroutines/channels/SendChannel.d.ts'
export class ActorKt extends Object {
    static actor(paramarg0: CoroutineScope, paramarg1: CoroutineContext, paramarg2: number, paramarg3: CoroutineStart, paramarg4: Function1<Object, void>, paramarg5: Function2<Object, Object, Object>): SendChannel<Object>;
}