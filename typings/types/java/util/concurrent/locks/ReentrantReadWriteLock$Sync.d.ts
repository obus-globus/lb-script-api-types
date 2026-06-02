import type { ObjectInputStream } from '../../../../java/io/ObjectInputStream.d.ts'
import type { Thread } from '../../../../java/lang/Thread.d.ts'
import type { AbstractQueuedLongSynchronizer } from '../../../../java/util/concurrent/locks/AbstractQueuedLongSynchronizer.d.ts'
import type { AbstractQueuedLongSynchronizer$ConditionObject } from '../../../../java/util/concurrent/locks/AbstractQueuedLongSynchronizer$ConditionObject.d.ts'
import type { ReentrantReadWriteLock$Sync$HoldCounter } from '../../../../java/util/concurrent/locks/ReentrantReadWriteLock$Sync$HoldCounter.d.ts'
import type { ReentrantReadWriteLock$Sync$ThreadLocalHoldCounter } from '../../../../java/util/concurrent/locks/ReentrantReadWriteLock$Sync$ThreadLocalHoldCounter.d.ts'
export abstract class ReentrantReadWriteLock$Sync extends AbstractQueuedLongSynchronizer {
    constructor()
    // private cachedHoldCounter: ReentrantReadWriteLock$Sync$HoldCounter;
    // private firstReader: Thread;
    // private firstReaderHoldCount: number;
    // private readHolds: ReentrantReadWriteLock$Sync$ThreadLocalHoldCounter;
    fullTryAcquireShared(arg0: Thread): number;
    getCount(): number;
    getOwner(): Thread;
    getReadHoldCount(): number;
    getReadLockCount(): number;
    getWriteHoldCount(): number;
    isHeldExclusively(): boolean;
    isWriteLocked(): boolean;
    newCondition(): AbstractQueuedLongSynchronizer$ConditionObject;
    // private readObject(arg0: ObjectInputStream): void;
    readerShouldBlock(): boolean;
    tryAcquire(arg0: number): boolean;
    tryAcquireShared(arg0: number): number;
    tryReadLock(): boolean;
    tryRelease(arg0: number): boolean;
    tryReleaseShared(arg0: number): boolean;
    tryWriteLock(): boolean;
    writerShouldBlock(): boolean;
}