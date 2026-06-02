import type { ThreadLocal } from '../../java/lang/ThreadLocal.d.ts'
import type { WeakReference } from '../../java/lang/ref/WeakReference.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class ThreadLocal$ThreadLocalMap$Entry extends WeakReference<ThreadLocal<Object>> {
    static reachabilityFence(paramarg0: Object): void;
    constructor(arg0: ThreadLocal<Object>, arg1: Object)
    // private value: Object;
}