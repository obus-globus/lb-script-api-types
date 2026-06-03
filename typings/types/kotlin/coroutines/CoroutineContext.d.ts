import type { Object } from '../../java/lang/Object.d.ts'
import type { CoroutineContext$Element } from '../../kotlin/coroutines/CoroutineContext$Element.d.ts'
import type { CoroutineContext$Key } from '../../kotlin/coroutines/CoroutineContext$Key.d.ts'
export interface CoroutineContext extends Object{
    fold<R extends Object | number | string | boolean>(initial: R, operation: (param0: R, param1: CoroutineContext$Element) => R): R;
    get<E extends CoroutineContext$Element>(key: CoroutineContext$Key<E>): E | null;
    minusKey(key: CoroutineContext$Key<Object>): CoroutineContext;
    plus(context: CoroutineContext): CoroutineContext;
}