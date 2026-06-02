import type { CycleDetectingLockFactory$CycleDetectingReentrantReadWriteLock } from '../../../../../com/google/common/util/concurrent/CycleDetectingLockFactory$CycleDetectingReentrantReadWriteLock.d.ts'
import type { TimeUnit } from '../../../../../java/util/concurrent/TimeUnit.d.ts'
import type { ReentrantReadWriteLock$WriteLock } from '../../../../../java/util/concurrent/locks/ReentrantReadWriteLock$WriteLock.d.ts'
export class CycleDetectingLockFactory$CycleDetectingReentrantWriteLock extends ReentrantReadWriteLock$WriteLock {
    constructor(null_: CycleDetectingLockFactory$CycleDetectingReentrantWriteLock, readWriteLock: CycleDetectingLockFactory$CycleDetectingReentrantReadWriteLock)
    // private readWriteLock: CycleDetectingLockFactory$CycleDetectingReentrantReadWriteLock;
    lock(): void;
    lockInterruptibly(): void;
    tryLock(): boolean;
    tryLock(timeout: number, unit: TimeUnit): boolean;
    unlock(): void;
}