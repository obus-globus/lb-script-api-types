import type { Object } from '../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
import type { Continuation } from '../../../kotlin/coroutines/Continuation.d.ts'
import type { ReceiveChannel } from '../../../kotlinx/coroutines/channels/ReceiveChannel.d.ts'
import type { SelectClause1 } from '../../../kotlinx/coroutines/selects/SelectClause1.d.ts'
export class ChannelsKt__Channels_commonKt extends Object {
    static cancelConsumed(paramarg0: ReceiveChannel<Object>, paramarg1: Throwable): void;
    static consume<E extends unknown, R extends unknown>(paramarg0: ReceiveChannel<E>, paramarg1: (param0: Object) => R): R;
    static consumeEach<E extends unknown>(paramarg0: ReceiveChannel<E>, paramarg1: (param0: Object) => void, paramarg2: Continuation<Object>): Object;
    static consumeTo<E extends unknown, C extends E[]>(paramarg0: ReceiveChannel<E>, paramarg1: C, paramarg2: Continuation<Object>): Object;
    static onReceiveOrNull(paramarg0: ReceiveChannel<Object>): SelectClause1<Object>;
    static receiveOrNull(paramarg0: ReceiveChannel<Object>, paramarg1: Continuation<Object>): Object;
    static toList<E extends unknown>(paramarg0: ReceiveChannel<E>, paramarg1: Continuation<Object>): Object;
}