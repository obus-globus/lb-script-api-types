import type { ReadWriteLock } from '../../../../../../java/util/concurrent/locks/ReadWriteLock.d.ts'
import type { ReentrantLock } from '../../../../../../java/util/concurrent/locks/ReentrantLock.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { LockingVisitors$ReadWriteLockVisitor } from '../../../../../../org/apache/commons/lang3/concurrent/locks/LockingVisitors$ReadWriteLockVisitor.d.ts'
import type { LockingVisitors$ReentrantLockVisitor } from '../../../../../../org/apache/commons/lang3/concurrent/locks/LockingVisitors$ReentrantLockVisitor.d.ts'
import type { LockingVisitors$StampedLockVisitor } from '../../../../../../org/apache/commons/lang3/concurrent/locks/LockingVisitors$StampedLockVisitor.d.ts'
export class LockingVisitors extends Object {
    static create<O extends unknown>(paramarg0: O, paramarg1: ReadWriteLock): LockingVisitors$ReadWriteLockVisitor<O>;
    static create<O extends unknown>(paramarg0: O, paramarg1: ReentrantLock): LockingVisitors$ReentrantLockVisitor<O>;
    static reentrantLockVisitor<O extends unknown>(paramarg0: O): LockingVisitors$ReentrantLockVisitor<O>;
    static reentrantReadWriteLockVisitor<O extends unknown>(paramarg0: O): LockingVisitors$ReadWriteLockVisitor<O>;
    static stampedLockVisitor<O extends unknown>(paramarg0: O): LockingVisitors$StampedLockVisitor<O>;
    constructor()
}