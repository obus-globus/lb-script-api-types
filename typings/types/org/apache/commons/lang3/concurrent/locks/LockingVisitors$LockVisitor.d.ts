import type { Lock } from '../../../../../../java/util/concurrent/locks/Lock.d.ts'
import type { Supplier } from '../../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { LockingVisitors$LockVisitor$LVBuilder } from '../../../../../../org/apache/commons/lang3/concurrent/locks/LockingVisitors$LockVisitor$LVBuilder.d.ts'
import type { FailableConsumer } from '../../../../../../org/apache/commons/lang3/function/FailableConsumer.d.ts'
import type { FailableFunction } from '../../../../../../org/apache/commons/lang3/function/FailableFunction.d.ts'
export class LockingVisitors$LockVisitor<O extends Object | number | string | boolean, L extends Object | number | string | boolean> extends Object {
    constructor(arg0: O, arg1: L, arg2: () => Lock, arg3: () => Lock)
    private constructor(arg0: LockingVisitors$LockVisitor$LVBuilder<O, L, any>)
    readonly lock: L;
    readonly object: O;
    // private readLockSupplier: () => Lock;
    // private writeLockSupplier: () => Lock;
    acceptReadLocked(arg0: (param0: O) => void): void;
    acceptWriteLocked(arg0: (param0: O) => void): void;
    applyReadLocked<T extends Object | number | string | boolean>(arg0: (param0: O) => T): T;
    applyWriteLocked<T extends Object | number | string | boolean>(arg0: (param0: O) => T): T;
    getLock(): L;
    getObject(): O;
    lockAcceptUnlock(arg0: () => Lock, arg1: (param0: O) => void): void;
    lockApplyUnlock<T extends Object | number | string | boolean>(arg0: () => Lock, arg1: (param0: O) => T): T;
}