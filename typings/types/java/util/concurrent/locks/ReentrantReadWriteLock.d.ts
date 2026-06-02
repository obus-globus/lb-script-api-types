import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Thread } from '../../../../java/lang/Thread.d.ts'
import type { Condition } from '../../../../java/util/concurrent/locks/Condition.d.ts'
import type { ReadWriteLock } from '../../../../java/util/concurrent/locks/ReadWriteLock.d.ts'
import type { ReentrantReadWriteLock$ReadLock } from '../../../../java/util/concurrent/locks/ReentrantReadWriteLock$ReadLock.d.ts'
import type { ReentrantReadWriteLock$Sync } from '../../../../java/util/concurrent/locks/ReentrantReadWriteLock$Sync.d.ts'
import type { ReentrantReadWriteLock$WriteLock } from '../../../../java/util/concurrent/locks/ReentrantReadWriteLock$WriteLock.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ReentrantReadWriteLock extends Object implements Serializable, ReadWriteLock {
    constructor()
    constructor(arg0: boolean)
    // private readerLock: ReentrantReadWriteLock$ReadLock;
    // private sync: ReentrantReadWriteLock$Sync;
    // private writerLock: ReentrantReadWriteLock$WriteLock;
    getOwner(): Thread;
    getQueueLength(): number;
    getQueuedReaderThreads(): E[];
    getQueuedThreads(): E[];
    getQueuedWriterThreads(): E[];
    getReadHoldCount(): number;
    getReadLockCount(): number;
    getWaitQueueLength(arg0: Condition): number;
    getWaitingThreads(arg0: Condition): E[];
    getWriteHoldCount(): number;
    hasQueuedThread(arg0: Thread): boolean;
    hasQueuedThreads(): boolean;
    hasWaiters(arg0: Condition): boolean;
    isFair(): boolean;
    isWriteLocked(): boolean;
    isWriteLockedByCurrentThread(): boolean;
    readLock(): ReentrantReadWriteLock$ReadLock;
    toString(): string;
    writeLock(): ReentrantReadWriteLock$WriteLock;
}