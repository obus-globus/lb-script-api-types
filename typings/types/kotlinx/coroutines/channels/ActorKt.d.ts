import type { Object } from '../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
import type { CoroutineContext } from '../../../kotlin/coroutines/CoroutineContext.d.ts'
import type { CoroutineScope } from '../../../kotlinx/coroutines/CoroutineScope.d.ts'
import type { CoroutineStart } from '../../../kotlinx/coroutines/CoroutineStart.d.ts'
import type { ActorScope } from '../../../kotlinx/coroutines/channels/ActorScope.d.ts'
import type { SendChannel } from '../../../kotlinx/coroutines/channels/SendChannel.d.ts'
export class ActorKt extends Object {
    static actor<E extends unknown>(self: CoroutineScope, context: CoroutineContext, capacity: number, start: CoroutineStart, onCompletion: ((param0: Throwable | null) => void) | null, block: (param0: ActorScope<E>) => void): SendChannel<E>;
}