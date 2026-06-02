import type { Thread } from '../../java/lang/Thread.d.ts'
import type { ThreadLocal$ThreadLocalMap } from '../../java/lang/ThreadLocal$ThreadLocalMap.d.ts'
import type { Supplier } from '../../java/util/function/Supplier.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class ThreadLocal<T extends Object | number | string | boolean> extends Object {
    static withInitial(paramarg0: () => Object | null): ThreadLocal<Object>;
    constructor()
    // private threadLocalHashCode: number;
    childValue(arg0: T): T;
    createMap(arg0: Thread, arg1: T): void;
    get(): T;
    // private get(arg0: Thread): T;
    getCarrierThreadLocal(): T;
    getMap(arg0: Thread): ThreadLocal$ThreadLocalMap;
    initialValue(): T;
    // private printStackTrace(): void;
    remove(): void;
    // private remove(arg0: Thread): void;
    removeCarrierThreadLocal(): void;
    set(arg0: T): void;
    // private set(arg0: Thread, arg1: T): void;
    setCarrierThreadLocal(arg0: T): void;
    // private setInitialValue(arg0: Thread): T;
}