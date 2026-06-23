import type { RuntimeException } from '../../../../../../java/lang/RuntimeException.d.ts'
import type { Lock } from '../../../../../../java/util/concurrent/locks/Lock.d.ts'
import type { Supplier } from '../../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { AbstractSupplier } from '../../../../../../org/apache/commons/lang3/builder/AbstractSupplier.d.ts'
import type { LockingVisitors$LockVisitor } from '../../../../../../org/apache/commons/lang3/concurrent/locks/LockingVisitors$LockVisitor.d.ts'
import type { FailableSupplier } from '../../../../../../org/apache/commons/lang3/function/FailableSupplier.d.ts'
export class LockingVisitors$LockVisitor$LVBuilder<O extends unknown, L extends unknown, B extends LockingVisitors$LockVisitor$LVBuilder<O, L, B>> extends AbstractSupplier<LockingVisitors$LockVisitor<O, L>, B, RuntimeException> {
    static NUL: () => Object | null;
    constructor()
    // private lock: L;
    // private object: O;
    // private readLockSupplier: () => Lock;
    // private writeLockSupplier: () => Lock;
    get(): LockingVisitors$LockVisitor<O, L>;
    getReadLockSupplier(): () => Lock;
    getWriteLockSupplier(): () => Lock;
    setLock(arg0: L): B;
    setObject(arg0: O): B;
    setReadLockSupplier(arg0: () => Lock): B;
    setWriteLockSupplier(arg0: () => Lock): B;
}