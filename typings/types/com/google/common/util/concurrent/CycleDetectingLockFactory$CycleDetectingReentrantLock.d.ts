import type { CycleDetectingLockFactory$1 } from '../../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { CycleDetectingLockFactory } from '../../../../../com/google/common/util/concurrent/CycleDetectingLockFactory.d.ts'
import type { CycleDetectingLockFactory$CycleDetectingLock } from '../../../../../com/google/common/util/concurrent/CycleDetectingLockFactory$CycleDetectingLock.d.ts'
import type { CycleDetectingLockFactory$LockGraphNode } from '../../../../../com/google/common/util/concurrent/CycleDetectingLockFactory$LockGraphNode.d.ts'
import type { TimeUnit } from '../../../../../java/util/concurrent/TimeUnit.d.ts'
import type { ReentrantLock } from '../../../../../java/util/concurrent/locks/ReentrantLock.d.ts'
export class CycleDetectingLockFactory$CycleDetectingReentrantLock extends ReentrantLock implements CycleDetectingLockFactory$CycleDetectingLock {
    private constructor(null_: CycleDetectingLockFactory, lockGraphNode: CycleDetectingLockFactory$LockGraphNode, fair: boolean)
    constructor(null_: CycleDetectingLockFactory, arg1: CycleDetectingLockFactory$LockGraphNode, arg2: boolean, arg3: CycleDetectingLockFactory$1)
    readonly lockGraphNode: CycleDetectingLockFactory$LockGraphNode;
    getLockGraphNode(): CycleDetectingLockFactory$LockGraphNode;
    isAcquiredByCurrentThread(): boolean;
    lock(): void;
    lockInterruptibly(): void;
    tryLock(): boolean;
    tryLock(timeout: number, unit: TimeUnit): boolean;
    unlock(): void;
}