import type { ThreadLocal } from '../../../java/lang/ThreadLocal.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CoroutineContext } from '../../../kotlin/coroutines/CoroutineContext.d.ts'
import type { CoroutineContext$Element } from '../../../kotlin/coroutines/CoroutineContext$Element.d.ts'
import type { CoroutineContext$Key } from '../../../kotlin/coroutines/CoroutineContext$Key.d.ts'
import type { ThreadContextElement } from '../../../kotlinx/coroutines/ThreadContextElement.d.ts'
export class ThreadLocalElement<T extends Object | number | string | boolean> extends Object implements ThreadContextElement<T> {
    constructor(value: T, threadLocal: ThreadLocal<T>)
    readonly key: CoroutineContext$Key<Object>;
    // private threadLocal: ThreadLocal<T>;
    // private value: T;
    get<E extends CoroutineContext$Element>(key: CoroutineContext$Key<E>): E | null;
    minusKey(key: CoroutineContext$Key<Object>): CoroutineContext;
    restoreThreadContext(context: CoroutineContext, oldState: T): void;
    toString(): string;
    updateThreadContext(context: CoroutineContext): T;
}