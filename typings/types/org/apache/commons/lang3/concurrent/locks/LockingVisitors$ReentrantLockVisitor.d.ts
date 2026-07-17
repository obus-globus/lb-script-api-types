import type { ReentrantLock } from '../../../../../../java/util/concurrent/locks/ReentrantLock.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { LockingVisitors$LockVisitor } from '../../../../../../org/apache/commons/lang3/concurrent/locks/LockingVisitors$LockVisitor.d.ts'
import type { LockingVisitors$ReentrantLockVisitor$Builder } from '../../../../../../org/apache/commons/lang3/concurrent/locks/LockingVisitors$ReentrantLockVisitor$Builder.d.ts'
export class LockingVisitors$ReentrantLockVisitor<O extends unknown> extends LockingVisitors$LockVisitor<O, ReentrantLock> {
    static builder<O extends unknown>(): LockingVisitors$ReentrantLockVisitor$Builder<O>;
    constructor(arg0: O, arg1: ReentrantLock)
}