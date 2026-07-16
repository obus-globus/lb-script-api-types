import type { Supplier } from '../../../../../com/google/common/base/Supplier.d.ts'
import type { Striped } from '../../../../../com/google/common/util/concurrent/Striped.d.ts'
import type { Striped$PowerOfTwoStriped } from '../../../../../com/google/common/util/concurrent/Striped$PowerOfTwoStriped.d.ts'
import type { Striped$SmallLazyStriped$ArrayReference } from '../../../../../com/google/common/util/concurrent/Striped$SmallLazyStriped$ArrayReference.d.ts'
import type { ReferenceQueue } from '../../../../../java/lang/ref/ReferenceQueue.d.ts'
import type { Semaphore } from '../../../../../java/util/concurrent/Semaphore.d.ts'
import type { AtomicReferenceArray } from '../../../../../java/util/concurrent/atomic/AtomicReferenceArray.d.ts'
import type { Lock } from '../../../../../java/util/concurrent/locks/Lock.d.ts'
import type { ReadWriteLock } from '../../../../../java/util/concurrent/locks/ReadWriteLock.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Striped$SmallLazyStriped<L extends unknown> extends Striped$PowerOfTwoStriped<L> {
    static custom<L extends unknown>(paramstripes: number, paramsupplier: () => L): Striped<L>;
    static lazyWeakLock(paramstripes: number): Striped<Lock>;
    static lazyWeakReadWriteLock(paramstripes: number): Striped<ReadWriteLock>;
    static lazyWeakSemaphore(paramstripes: number, parampermits: number): Striped<Semaphore>;
    static lock(paramstripes: number): Striped<Lock>;
    static readWriteLock(paramstripes: number): Striped<ReadWriteLock>;
    static semaphore(paramstripes: number, parampermits: number): Striped<Semaphore>;
    constructor(stripes: number, supplier: () => L)
    // private locks: AtomicReferenceArray<Striped$SmallLazyStriped$ArrayReference<L>>;
    // private queue: ReferenceQueue<L>;
    // private size: number;
    // private supplier: () => L;
    // private drainQueue(): void;
    getAt(index: number): L;
    size(): number;
}