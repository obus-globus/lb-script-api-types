import type { CycleDetectingLockFactory } from '../../../../../com/google/common/util/concurrent/CycleDetectingLockFactory.d.ts'
import type { CycleDetectingLockFactory$CycleDetectingLock } from '../../../../../com/google/common/util/concurrent/CycleDetectingLockFactory$CycleDetectingLock.d.ts'
import type { CycleDetectingLockFactory$CycleDetectingReentrantReadLock } from '../../../../../com/google/common/util/concurrent/CycleDetectingLockFactory$CycleDetectingReentrantReadLock.d.ts'
import type { CycleDetectingLockFactory$CycleDetectingReentrantWriteLock } from '../../../../../com/google/common/util/concurrent/CycleDetectingLockFactory$CycleDetectingReentrantWriteLock.d.ts'
import type { CycleDetectingLockFactory$LockGraphNode } from '../../../../../com/google/common/util/concurrent/CycleDetectingLockFactory$LockGraphNode.d.ts'
import type { ThreadLocal } from '../../../../../java/lang/ThreadLocal.d.ts'
import type { ReentrantReadWriteLock } from '../../../../../java/util/concurrent/locks/ReentrantReadWriteLock.d.ts'
import type { ReentrantReadWriteLock$ReadLock } from '../../../../../java/util/concurrent/locks/ReentrantReadWriteLock$ReadLock.d.ts'
import type { ReentrantReadWriteLock$WriteLock } from '../../../../../java/util/concurrent/locks/ReentrantReadWriteLock$WriteLock.d.ts'
export class CycleDetectingLockFactory$CycleDetectingReentrantReadWriteLock extends ReentrantReadWriteLock implements CycleDetectingLockFactory$CycleDetectingLock {
    constructor(null_: CycleDetectingLockFactory, arg1: CycleDetectingLockFactory$LockGraphNode, arg2: boolean, arg3: ThreadLocal<CycleDetectingLockFactory$LockGraphNode[]>)
    readonly lockGraphNode: CycleDetectingLockFactory$LockGraphNode;
    // private readLock: CycleDetectingLockFactory$CycleDetectingReentrantReadLock;
    // private writeLock: CycleDetectingLockFactory$CycleDetectingReentrantWriteLock;
    getLockGraphNode(): CycleDetectingLockFactory$LockGraphNode;
    isAcquiredByCurrentThread(): boolean;
    readLock(): ReentrantReadWriteLock$ReadLock;
    writeLock(): ReentrantReadWriteLock$WriteLock;
}