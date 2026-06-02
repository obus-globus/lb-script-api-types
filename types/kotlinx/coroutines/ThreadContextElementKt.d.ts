import type { ThreadLocal } from '../../java/lang/ThreadLocal.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Continuation } from '../../kotlin/coroutines/Continuation.d.ts'
import type { ThreadContextElement } from '../../kotlinx/coroutines/ThreadContextElement.d.ts'
export class ThreadContextElementKt extends Object {
    static asContextElement(paramarg0: ThreadLocal<Object>, paramarg1: Object | null): ThreadContextElement<Object>;
    static ensurePresent(paramarg0: ThreadLocal<Object>, paramarg1: Continuation<Object>): Object;
    static isPresent(paramarg0: ThreadLocal<Object>, paramarg1: Continuation<Object>): Object;
}