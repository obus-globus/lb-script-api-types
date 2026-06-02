import type { Object } from '../../java/lang/Object.d.ts'
import type { Function2 } from '../../kotlin/jvm/functions/Function2.d.ts'
import type { CoroutineContext } from '../../kotlin/coroutines/CoroutineContext.d.ts'
import type { CoroutineContext$Element } from '../../kotlin/coroutines/CoroutineContext$Element.d.ts'
import type { CoroutineContext$Key } from '../../kotlin/coroutines/CoroutineContext$Key.d.ts'
export interface ThreadContextElement<S extends Object | number | string | boolean> extends Object, CoroutineContext$Element{
    fold<R extends Object | number | string | boolean>(initial: R, operation: Function2<R, CoroutineContext$Element, R>): R;
    get<E extends CoroutineContext$Element>(key: CoroutineContext$Key<E>): E | null;
    minusKey(key: CoroutineContext$Key<Object>): CoroutineContext;
    restoreThreadContext(context: CoroutineContext, oldState: S): void;
    updateThreadContext(context: CoroutineContext): S;
}