import type { Supplier } from '../../../../../com/google/common/base/Supplier.d.ts'
import type { Semaphore } from '../../../../../java/util/concurrent/Semaphore.d.ts'
import type { Lock } from '../../../../../java/util/concurrent/locks/Lock.d.ts'
import type { ReadWriteLock } from '../../../../../java/util/concurrent/locks/ReadWriteLock.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class Striped<L extends unknown> extends Object {
    static custom(paramstripes: number, paramsupplier: () => Object | null): Striped<Object>;
    static lazyWeakLock(paramstripes: number): Striped<Lock>;
    static lazyWeakReadWriteLock(paramstripes: number): Striped<ReadWriteLock>;
    static lazyWeakSemaphore(paramstripes: number, parampermits: number): Striped<Semaphore>;
    static lock(paramstripes: number): Striped<Lock>;
    static readWriteLock(paramstripes: number): Striped<ReadWriteLock>;
    static semaphore(paramstripes: number, parampermits: number): Striped<Semaphore>;
    private constructor()
    bulkGet(keys: (Object | null)[]): L[];
    get(key: Object): L;
    getAt(index: number): L;
    indexFor(key: Object): number;
    size(): number;
}