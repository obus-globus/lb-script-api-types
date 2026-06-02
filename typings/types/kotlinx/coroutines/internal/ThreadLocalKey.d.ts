import type { ThreadLocal } from '../../../java/lang/ThreadLocal.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CoroutineContext$Key } from '../../../kotlin/coroutines/CoroutineContext$Key.d.ts'
import type { ThreadLocalElement } from '../../../kotlinx/coroutines/internal/ThreadLocalElement.d.ts'
export class ThreadLocalKey extends Object implements CoroutineContext$Key<ThreadLocalElement<Object>> {
    constructor(threadLocal: ThreadLocal<Object>)
    // private threadLocal: ThreadLocal<Object>;
    // private component1(): ThreadLocal<Object>;
    copy(threadLocal: ThreadLocal<Object>): ThreadLocalKey;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}