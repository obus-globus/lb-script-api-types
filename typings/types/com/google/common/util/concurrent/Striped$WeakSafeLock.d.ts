import type { ForwardingLock } from '../../../../../com/google/common/util/concurrent/ForwardingLock.d.ts'
import type { Striped$WeakSafeReadWriteLock } from '../../../../../com/google/common/util/concurrent/Striped$WeakSafeReadWriteLock.d.ts'
import type { Condition } from '../../../../../java/util/concurrent/locks/Condition.d.ts'
import type { Lock } from '../../../../../java/util/concurrent/locks/Lock.d.ts'
export class Striped$WeakSafeLock extends ForwardingLock {
    constructor(delegate: Lock, strongReference: Striped$WeakSafeReadWriteLock)
    // private delegate: Lock;
    // private strongReference: Striped$WeakSafeReadWriteLock;
    delegate(): Lock;
    newCondition(): Condition;
}