import type { CycleDetectingLockFactory$CycleDetectingReentrantReadWriteLock } from '../../../../../com/google/common/util/concurrent/CycleDetectingLockFactory$CycleDetectingReentrantReadWriteLock.d.ts'
import type { TimeUnit } from '../../../../../java/util/concurrent/TimeUnit.d.ts'
import type { ReentrantReadWriteLock$ReadLock } from '../../../../../java/util/concurrent/locks/ReentrantReadWriteLock$ReadLock.d.ts'
export class CycleDetectingLockFactory$CycleDetectingReentrantReadLock extends ReentrantReadWriteLock$ReadLock {
    constructor(null_: CycleDetectingLockFactory$CycleDetectingReentrantReadLock, readWriteLock: CycleDetectingLockFactory$CycleDetectingReentrantReadWriteLock)
    // private readWriteLock: CycleDetectingLockFactory$CycleDetectingReentrantReadWriteLock;
    lock(): void;
    lockInterruptibly(): void;
    tryLock(): boolean;
    tryLock(timeout: number, unit: TimeUnit): boolean;
    unlock(): void;
}