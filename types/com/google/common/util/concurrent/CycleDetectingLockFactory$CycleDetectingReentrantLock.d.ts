import type { CycleDetectingLockFactory$CycleDetectingLock } from '../../../../../com/google/common/util/concurrent/CycleDetectingLockFactory$CycleDetectingLock.d.ts'
import type { CycleDetectingLockFactory$LockGraphNode } from '../../../../../com/google/common/util/concurrent/CycleDetectingLockFactory$LockGraphNode.d.ts'
import type { TimeUnit } from '../../../../../java/util/concurrent/TimeUnit.d.ts'
import type { ReentrantLock } from '../../../../../java/util/concurrent/locks/ReentrantLock.d.ts'
export class CycleDetectingLockFactory$CycleDetectingReentrantLock extends ReentrantLock implements CycleDetectingLockFactory$CycleDetectingLock {
    private constructor(null_: CycleDetectingLockFactory$CycleDetectingReentrantLock, lockGraphNode: CycleDetectingLockFactory$LockGraphNode, fair: boolean)
    readonly lockGraphNode: CycleDetectingLockFactory$LockGraphNode;
    getLockGraphNode(): CycleDetectingLockFactory$LockGraphNode;
    isAcquiredByCurrentThread(): boolean;
    lock(): void;
    lockInterruptibly(): void;
    tryLock(): boolean;
    tryLock(timeout: number, unit: TimeUnit): boolean;
    unlock(): void;
}