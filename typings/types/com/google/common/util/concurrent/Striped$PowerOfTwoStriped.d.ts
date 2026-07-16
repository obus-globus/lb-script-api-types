import type { Supplier } from '../../../../../com/google/common/base/Supplier.d.ts'
import type { Striped } from '../../../../../com/google/common/util/concurrent/Striped.d.ts'
import type { Semaphore } from '../../../../../java/util/concurrent/Semaphore.d.ts'
import type { Lock } from '../../../../../java/util/concurrent/locks/Lock.d.ts'
import type { ReadWriteLock } from '../../../../../java/util/concurrent/locks/ReadWriteLock.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class Striped$PowerOfTwoStriped<L extends unknown> extends Striped<L> {
    static custom<L extends unknown>(paramstripes: number, paramsupplier: () => L): Striped<L>;
    static lazyWeakLock(paramstripes: number): Striped<Lock>;
    static lazyWeakReadWriteLock(paramstripes: number): Striped<ReadWriteLock>;
    static lazyWeakSemaphore(paramstripes: number, parampermits: number): Striped<Semaphore>;
    static lock(paramstripes: number): Striped<Lock>;
    static readWriteLock(paramstripes: number): Striped<ReadWriteLock>;
    static semaphore(paramstripes: number, parampermits: number): Striped<Semaphore>;
    constructor(stripes: number)
    // private mask: number;
    get(key: Object): L;
    indexFor(key: Object): number;
}