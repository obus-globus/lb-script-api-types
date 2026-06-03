import type { Object } from '../../java/lang/Object.d.ts'
import type { CoroutineContext$Element } from '../../kotlin/coroutines/CoroutineContext$Element.d.ts'
import type { CoroutineContext$Key } from '../../kotlin/coroutines/CoroutineContext$Key.d.ts'
export abstract class AbstractCoroutineContextKey<B extends CoroutineContext$Element, E extends B> extends Object implements CoroutineContext$Key<E> {
    constructor(baseKey: CoroutineContext$Key<B>, safeCast: (param0: CoroutineContext$Element) => E | null)
    // private safeCast: (param0: CoroutineContext$Element) => E | null;
    // private topmostKey: CoroutineContext$Key<Object>;
    isSubKey(key: CoroutineContext$Key<Object>): boolean;
    tryCast(element: CoroutineContext$Element): E | null;
}