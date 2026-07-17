import type { ReadWriteLock } from '../../../../../../java/util/concurrent/locks/ReadWriteLock.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { LockingVisitors$LockVisitor } from '../../../../../../org/apache/commons/lang3/concurrent/locks/LockingVisitors$LockVisitor.d.ts'
import type { LockingVisitors$ReadWriteLockVisitor$Builder } from '../../../../../../org/apache/commons/lang3/concurrent/locks/LockingVisitors$ReadWriteLockVisitor$Builder.d.ts'
export class LockingVisitors$ReadWriteLockVisitor<O extends unknown> extends LockingVisitors$LockVisitor<O, ReadWriteLock> {
    static builder<O extends unknown>(): LockingVisitors$ReadWriteLockVisitor$Builder<O>;
    constructor(arg0: O, arg1: ReadWriteLock)
}