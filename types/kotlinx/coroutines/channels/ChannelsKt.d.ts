import type { Comparator } from '../../../java/util/Comparator.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Function1 } from '../../../kotlin/jvm/functions/Function1.d.ts'
import type { Function2 } from '../../../kotlin/jvm/functions/Function2.d.ts'
import type { Function3 } from '../../../kotlin/jvm/functions/Function3.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
import type { Continuation } from '../../../kotlin/coroutines/Continuation.d.ts'
import type { CoroutineContext } from '../../../kotlin/coroutines/CoroutineContext.d.ts'
import type { BroadcastChannel } from '../../../kotlinx/coroutines/channels/BroadcastChannel.d.ts'
import type { ReceiveChannel } from '../../../kotlinx/coroutines/channels/ReceiveChannel.d.ts'
import type { SendChannel } from '../../../kotlinx/coroutines/channels/SendChannel.d.ts'
import type { SelectClause1 } from '../../../kotlinx/coroutines/selects/SelectClause1.d.ts'
export class ChannelsKt extends Object {
    static DEFAULT_CLOSE_MESSAGE: string;
    static any(paramarg0: ReceiveChannel<Object>, paramarg1: Continuation<Object>): Object;
    static cancelConsumed(paramarg0: ReceiveChannel<Object>, paramarg1: Throwable): void;
    static consume(paramarg0: BroadcastChannel<Object>, paramarg1: Function1<Object, Object>): Object | null;
    static consume(paramarg0: ReceiveChannel<Object>, paramarg1: Function1<Object, Object>): Object | null;
    static consumeEach(paramarg0: BroadcastChannel<Object>, paramarg1: Function1<Object, void>, paramarg2: Continuation<Object>): Object;
    static consumeEach(paramarg0: ReceiveChannel<Object>, paramarg1: Function1<Object, void>, paramarg2: Continuation<Object>): Object;
    static consumes(paramarg0: ReceiveChannel<Object>): Function1<Throwable, void>;
    static consumesAll(paramarg0: Object | null): Function1<Throwable, void>;
    static count(paramarg0: ReceiveChannel<Object>, paramarg1: Continuation<Object>): Object;
    static distinct(paramarg0: ReceiveChannel<Object>): ReceiveChannel<Object>;
    static distinctBy(paramarg0: ReceiveChannel<Object>, paramarg1: CoroutineContext, paramarg2: Function2<Object, Object, Object>): ReceiveChannel<Object>;
    static drop(paramarg0: ReceiveChannel<Object>, paramarg1: number, paramarg2: CoroutineContext): ReceiveChannel<Object>;
    static dropWhile(paramarg0: ReceiveChannel<Object>, paramarg1: CoroutineContext, paramarg2: Function2<Object, Object, Object>): ReceiveChannel<Object>;
    static elementAt(paramarg0: ReceiveChannel<Object>, paramarg1: number, paramarg2: Continuation<Object>): Object;
    static elementAtOrNull(paramarg0: ReceiveChannel<Object>, paramarg1: number, paramarg2: Continuation<Object>): Object;
    static filter(paramarg0: ReceiveChannel<Object>, paramarg1: CoroutineContext, paramarg2: Function2<Object, Object, Object>): ReceiveChannel<Object>;
    static filterIndexed(paramarg0: ReceiveChannel<Object>, paramarg1: CoroutineContext, paramarg2: Function3<Object, Object, Object, Object>): ReceiveChannel<Object>;
    static filterNot(paramarg0: ReceiveChannel<Object>, paramarg1: CoroutineContext, paramarg2: Function2<Object, Object, Object>): ReceiveChannel<Object>;
    static filterNotNull(paramarg0: ReceiveChannel<Object>): ReceiveChannel<Object>;
    static filterNotNullTo(paramarg0: ReceiveChannel<Object>, paramarg1: E[], paramarg2: Continuation<Object>): Object;
    static filterNotNullTo(paramarg0: ReceiveChannel<Object>, paramarg1: SendChannel<Object>, paramarg2: Continuation<Object>): Object;
    static first(paramarg0: ReceiveChannel<Object>, paramarg1: Continuation<Object>): Object;
    static firstOrNull(paramarg0: ReceiveChannel<Object>, paramarg1: Continuation<Object>): Object;
    static flatMap(paramarg0: ReceiveChannel<Object>, paramarg1: CoroutineContext, paramarg2: Function2<Object, Object, Object>): ReceiveChannel<Object>;
    static indexOf(paramarg0: ReceiveChannel<Object>, paramarg1: Object, paramarg2: Continuation<Object>): Object;
    static last(paramarg0: ReceiveChannel<Object>, paramarg1: Continuation<Object>): Object;
    static lastIndexOf(paramarg0: ReceiveChannel<Object>, paramarg1: Object, paramarg2: Continuation<Object>): Object;
    static lastOrNull(paramarg0: ReceiveChannel<Object>, paramarg1: Continuation<Object>): Object;
    static map(paramarg0: ReceiveChannel<Object>, paramarg1: CoroutineContext, paramarg2: Function2<Object, Object, Object>): ReceiveChannel<Object>;
    static mapIndexed(paramarg0: ReceiveChannel<Object>, paramarg1: CoroutineContext, paramarg2: Function3<Object, Object, Object, Object>): ReceiveChannel<Object>;
    static mapIndexedNotNull(paramarg0: ReceiveChannel<Object>, paramarg1: CoroutineContext, paramarg2: Function3<Object, Object, Object, Object>): ReceiveChannel<Object>;
    static mapNotNull(paramarg0: ReceiveChannel<Object>, paramarg1: CoroutineContext, paramarg2: Function2<Object, Object, Object>): ReceiveChannel<Object>;
    static maxWith(paramarg0: ReceiveChannel<Object>, paramarg1: (param0: Object | null) => kotlin.Boolean, paramarg2: Continuation<Object>): Object;
    static minWith(paramarg0: ReceiveChannel<Object>, paramarg1: (param0: Object | null) => kotlin.Boolean, paramarg2: Continuation<Object>): Object;
    static none(paramarg0: ReceiveChannel<Object>, paramarg1: Continuation<Object>): Object;
    static onReceiveOrNull(paramarg0: ReceiveChannel<Object>): SelectClause1<Object>;
    static receiveOrNull(paramarg0: ReceiveChannel<Object>, paramarg1: Continuation<Object>): Object;
    static requireNoNulls(paramarg0: ReceiveChannel<Object>): ReceiveChannel<Object>;
    static sendBlocking(paramarg0: SendChannel<Object>, paramarg1: Object): void;
    static single(paramarg0: ReceiveChannel<Object>, paramarg1: Continuation<Object>): Object;
    static singleOrNull(paramarg0: ReceiveChannel<Object>, paramarg1: Continuation<Object>): Object;
    static take(paramarg0: ReceiveChannel<Object>, paramarg1: number, paramarg2: CoroutineContext): ReceiveChannel<Object>;
    static takeWhile(paramarg0: ReceiveChannel<Object>, paramarg1: CoroutineContext, paramarg2: Function2<Object, Object, Object>): ReceiveChannel<Object>;
    static toChannel(paramarg0: ReceiveChannel<Object>, paramarg1: Object | null, paramarg2: Continuation<Object>): Object;
    static toCollection(paramarg0: ReceiveChannel<Object>, paramarg1: Object | null, paramarg2: Continuation<Object>): Object;
    static toList(paramarg0: ReceiveChannel<Object>, paramarg1: Continuation<Object>): Object;
    static toMap(paramarg0: ReceiveChannel<Object>, paramarg1: Object | null, paramarg2: Continuation<Object>): Object;
    static toMap(paramarg0: ReceiveChannel<Object>, paramarg1: Continuation<Object>): Object;
    static toMutableList(paramarg0: ReceiveChannel<Object>, paramarg1: Continuation<Object>): Object;
    static toMutableSet(paramarg0: ReceiveChannel<Object>, paramarg1: Continuation<Object>): Object;
    static toSet(paramarg0: ReceiveChannel<Object>, paramarg1: Continuation<Object>): Object;
    static trySendBlocking(paramarg0: SendChannel<Object>, paramarg1: Object | null): Object;
    static withIndex(paramarg0: ReceiveChannel<Object>, paramarg1: CoroutineContext): ReceiveChannel<Object>;
    static zip(paramarg0: ReceiveChannel<Object>, paramarg1: ReceiveChannel<Object>, paramarg2: CoroutineContext, paramarg3: Function2<Object, Object, Object>): ReceiveChannel<Object>;
    static zip(paramarg0: ReceiveChannel<Object>, paramarg1: ReceiveChannel<Object>): ReceiveChannel<Object>;
}