import type { ReentrantLock } from '../../../../../../java/util/concurrent/locks/ReentrantLock.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { LockingVisitors$LockVisitor$LVBuilder } from '../../../../../../org/apache/commons/lang3/concurrent/locks/LockingVisitors$LockVisitor$LVBuilder.d.ts'
import type { LockingVisitors$ReentrantLockVisitor } from '../../../../../../org/apache/commons/lang3/concurrent/locks/LockingVisitors$ReentrantLockVisitor.d.ts'
import type { FailableSupplier } from '../../../../../../org/apache/commons/lang3/function/FailableSupplier.d.ts'
export class LockingVisitors$ReentrantLockVisitor$Builder<O extends unknown> extends LockingVisitors$LockVisitor$LVBuilder<O, ReentrantLock, LockingVisitors$ReentrantLockVisitor$Builder<O>> {
    static NUL: () => Object | null;
    constructor()
    get(): LockingVisitors$ReentrantLockVisitor<O>;
    setLock(arg0: ReentrantLock): LockingVisitors$ReentrantLockVisitor$Builder<O>;
}