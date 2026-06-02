import type { ReadWriteLock } from '../../../../../../java/util/concurrent/locks/ReadWriteLock.d.ts'
import type { ReentrantLock } from '../../../../../../java/util/concurrent/locks/ReentrantLock.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { LockingVisitors$ReadWriteLockVisitor } from '../../../../../../org/apache/commons/lang3/concurrent/locks/LockingVisitors$ReadWriteLockVisitor.d.ts'
import type { LockingVisitors$ReentrantLockVisitor } from '../../../../../../org/apache/commons/lang3/concurrent/locks/LockingVisitors$ReentrantLockVisitor.d.ts'
import type { LockingVisitors$StampedLockVisitor } from '../../../../../../org/apache/commons/lang3/concurrent/locks/LockingVisitors$StampedLockVisitor.d.ts'
export class LockingVisitors extends Object {
    static create(paramarg0: Object | null, paramarg1: ReadWriteLock): LockingVisitors$ReadWriteLockVisitor<Object>;
    static create(paramarg0: Object | null, paramarg1: ReentrantLock): LockingVisitors$ReentrantLockVisitor<Object>;
    static reentrantLockVisitor(paramarg0: Object | null): LockingVisitors$ReentrantLockVisitor<Object>;
    static reentrantReadWriteLockVisitor(paramarg0: Object | null): LockingVisitors$ReadWriteLockVisitor<Object>;
    static stampedLockVisitor(paramarg0: Object | null): LockingVisitors$StampedLockVisitor<Object>;
    constructor()
}