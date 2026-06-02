import type { Object } from '../../../java/lang/Object.d.ts'
import type { Function1 } from '../../../kotlin/jvm/functions/Function1.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
import type { Continuation } from '../../../kotlin/coroutines/Continuation.d.ts'
import type { ReceiveChannel } from '../../../kotlinx/coroutines/channels/ReceiveChannel.d.ts'
import type { SelectClause1 } from '../../../kotlinx/coroutines/selects/SelectClause1.d.ts'
export class ChannelsKt__Channels_commonKt extends Object {
    static cancelConsumed(paramarg0: ReceiveChannel<Object>, paramarg1: Throwable): void;
    static consume(paramarg0: ReceiveChannel<Object>, paramarg1: Function1<Object, Object>): Object | null;
    static consumeEach(paramarg0: ReceiveChannel<Object>, paramarg1: Function1<Object, void>, paramarg2: Continuation<Object>): Object;
    static onReceiveOrNull(paramarg0: ReceiveChannel<Object>): SelectClause1<Object>;
    static receiveOrNull(paramarg0: ReceiveChannel<Object>, paramarg1: Continuation<Object>): Object;
    static toList(paramarg0: ReceiveChannel<Object>, paramarg1: Continuation<Object>): Object;
}