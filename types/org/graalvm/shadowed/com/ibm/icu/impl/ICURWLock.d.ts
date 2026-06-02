import type { ReentrantReadWriteLock } from '../../../../../../../java/util/concurrent/locks/ReentrantReadWriteLock.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ICURWLock$Stats } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/ICURWLock$Stats.d.ts'
export class ICURWLock extends Object {
    constructor()
    // private rwl: ReentrantReadWriteLock;
    readonly stats: ICURWLock$Stats;
    acquireRead(): void;
    acquireWrite(): void;
    clearStats(): ICURWLock$Stats;
    getStats(): ICURWLock$Stats;
    releaseRead(): void;
    releaseWrite(): void;
    resetStats(): ICURWLock$Stats;
}