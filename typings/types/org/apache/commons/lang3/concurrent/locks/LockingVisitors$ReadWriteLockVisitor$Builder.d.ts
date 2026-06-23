import type { ReadWriteLock } from '../../../../../../java/util/concurrent/locks/ReadWriteLock.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { LockingVisitors$LockVisitor$LVBuilder } from '../../../../../../org/apache/commons/lang3/concurrent/locks/LockingVisitors$LockVisitor$LVBuilder.d.ts'
import type { LockingVisitors$ReadWriteLockVisitor } from '../../../../../../org/apache/commons/lang3/concurrent/locks/LockingVisitors$ReadWriteLockVisitor.d.ts'
import type { FailableSupplier } from '../../../../../../org/apache/commons/lang3/function/FailableSupplier.d.ts'
export class LockingVisitors$ReadWriteLockVisitor$Builder<O extends unknown> extends LockingVisitors$LockVisitor$LVBuilder<O, ReadWriteLock, LockingVisitors$ReadWriteLockVisitor$Builder<O>> {
    static NUL: () => Object | null;
    constructor()
    get(): LockingVisitors$ReadWriteLockVisitor<O>;
    setLock(arg0: ReadWriteLock): LockingVisitors$ReadWriteLockVisitor$Builder<O>;
}