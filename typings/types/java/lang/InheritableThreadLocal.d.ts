import type { Thread } from '../../java/lang/Thread.d.ts'
import type { ThreadLocal } from '../../java/lang/ThreadLocal.d.ts'
import type { ThreadLocal$ThreadLocalMap } from '../../java/lang/ThreadLocal$ThreadLocalMap.d.ts'
import type { Supplier } from '../../java/util/function/Supplier.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class InheritableThreadLocal<T extends unknown> extends ThreadLocal<T> {
    static withInitial(paramarg0: () => Object | null): ThreadLocal<Object>;
    constructor()
    childValue(arg0: T): T;
    createMap(arg0: Thread, arg1: T): void;
    getMap(arg0: Thread): ThreadLocal$ThreadLocalMap;
}