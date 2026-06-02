import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Thread } from '../../../../java/lang/Thread.d.ts'
import type { TimeUnit } from '../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Condition } from '../../../../java/util/concurrent/locks/Condition.d.ts'
import type { Lock } from '../../../../java/util/concurrent/locks/Lock.d.ts'
import type { ReentrantLock$Sync } from '../../../../java/util/concurrent/locks/ReentrantLock$Sync.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ReentrantLock extends Object implements Serializable, Lock {
    constructor()
    constructor(arg0: boolean)
    // private sync: ReentrantLock$Sync;
    getHoldCount(): number;
    getOwner(): Thread;
    getQueueLength(): number;
    getQueuedThreads(): E[];
    getWaitQueueLength(arg0: Condition): number;
    getWaitingThreads(arg0: Condition): E[];
    hasQueuedThread(arg0: Thread): boolean;
    hasQueuedThreads(): boolean;
    hasWaiters(arg0: Condition): boolean;
    isFair(): boolean;
    isHeldByCurrentThread(): boolean;
    isLocked(): boolean;
    lock(): void;
    lockInterruptibly(): void;
    newCondition(): Condition;
    toString(): string;
    tryLock(): boolean;
    tryLock(arg0: number, arg1: TimeUnit): boolean;
    unlock(): void;
}