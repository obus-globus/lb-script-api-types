import type { Object } from '../../java/lang/Object.d.ts'
import type { CoroutineContext } from '../../kotlin/coroutines/CoroutineContext.d.ts'
import type { CoroutineContext$Element } from '../../kotlin/coroutines/CoroutineContext$Element.d.ts'
import type { CoroutineContext$Key } from '../../kotlin/coroutines/CoroutineContext$Key.d.ts'
export class UndispatchedMarker extends Object implements CoroutineContext$Element, CoroutineContext$Key<UndispatchedMarker> {
    static INSTANCE: UndispatchedMarker;
    readonly key: CoroutineContext$Key<any>;
    fold<R extends Object | number | string | boolean>(initial: R, operation: (param0: R, param1: CoroutineContext$Element) => R): R;
    get<E extends CoroutineContext$Element>(key: CoroutineContext$Key<E>): E | null;
    minusKey(key: CoroutineContext$Key<any>): CoroutineContext;
}