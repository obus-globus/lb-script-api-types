import type { ObjectInputStream } from '../../../../java/io/ObjectInputStream.d.ts'
import type { Thread } from '../../../../java/lang/Thread.d.ts'
import type { AbstractQueuedSynchronizer } from '../../../../java/util/concurrent/locks/AbstractQueuedSynchronizer.d.ts'
import type { AbstractQueuedSynchronizer$ConditionObject } from '../../../../java/util/concurrent/locks/AbstractQueuedSynchronizer$ConditionObject.d.ts'
export abstract class ReentrantLock$Sync extends AbstractQueuedSynchronizer {
    constructor()
    getHoldCount(): number;
    getOwner(): Thread;
    initialTryLock(): boolean;
    isHeldExclusively(): boolean;
    isLocked(): boolean;
    lock(): void;
    lockInterruptibly(): void;
    newCondition(): AbstractQueuedSynchronizer$ConditionObject;
    // private readObject(arg0: ObjectInputStream): void;
    tryLock(): boolean;
    tryLockNanos(arg0: number): boolean;
    tryRelease(arg0: number): boolean;
}