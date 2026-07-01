import type { StampedLock } from '../../../../../../java/util/concurrent/locks/StampedLock.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { LockingVisitors$LockVisitor } from '../../../../../../org/apache/commons/lang3/concurrent/locks/LockingVisitors$LockVisitor.d.ts'
import type { LockingVisitors$StampedLockVisitor$Builder } from '../../../../../../org/apache/commons/lang3/concurrent/locks/LockingVisitors$StampedLockVisitor$Builder.d.ts'
export class LockingVisitors$StampedLockVisitor<O extends unknown> extends LockingVisitors$LockVisitor<O, StampedLock> {
    static builder(): LockingVisitors$StampedLockVisitor$Builder<Object>;
    constructor(arg0: O, arg1: StampedLock)
    constructor(arg0: LockingVisitors$StampedLockVisitor$Builder<Object>, arg1: any)
}