import type { StampedLock } from '../../../../../../java/util/concurrent/locks/StampedLock.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { LockingVisitors$LockVisitor$LVBuilder } from '../../../../../../org/apache/commons/lang3/concurrent/locks/LockingVisitors$LockVisitor$LVBuilder.d.ts'
import type { LockingVisitors$StampedLockVisitor } from '../../../../../../org/apache/commons/lang3/concurrent/locks/LockingVisitors$StampedLockVisitor.d.ts'
import type { FailableSupplier } from '../../../../../../org/apache/commons/lang3/function/FailableSupplier.d.ts'
export class LockingVisitors$StampedLockVisitor$Builder<O extends Object | number | string | boolean> extends LockingVisitors$LockVisitor$LVBuilder<O, StampedLock, LockingVisitors$StampedLockVisitor$Builder<O>> {
    static NUL: () => Object | null;
    constructor()
    get(): LockingVisitors$StampedLockVisitor<O>;
    setLock(arg0: StampedLock): LockingVisitors$StampedLockVisitor$Builder<O>;
}