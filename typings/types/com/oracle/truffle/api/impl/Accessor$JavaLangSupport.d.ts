import type { Thread } from '../../../../../java/lang/Thread.d.ts'
import type { ThreadLocal } from '../../../../../java/lang/ThreadLocal.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class Accessor$JavaLangSupport extends Object {
    constructor()
    createTerminatingThreadLocal<T extends unknown>(initialValue: () => T, onThreadTermination: (param0: T) => void): ThreadLocal<T>;
    currentCarrierThread(): Thread;
    registerVirtualThreadMountHooks(onMount: (param0: Thread) => void, onUnmount: (param0: Thread) => void): void;
    runInPinnedVirtualThread<T extends unknown>(action: () => T): T;
}