import type { ThreadLocal } from '../../../../java/lang/ThreadLocal.d.ts'
import type { ReentrantReadWriteLock$Sync$HoldCounter } from '../../../../java/util/concurrent/locks/ReentrantReadWriteLock$Sync$HoldCounter.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ReentrantReadWriteLock$Sync$ThreadLocalHoldCounter extends ThreadLocal<ReentrantReadWriteLock$Sync$HoldCounter> {
    static withInitial(paramarg0: () => Object | null): ThreadLocal<Object>;
    constructor()
    initialValue(): ReentrantReadWriteLock$Sync$HoldCounter;
}