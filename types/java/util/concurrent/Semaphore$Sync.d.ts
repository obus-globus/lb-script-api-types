import type { AbstractQueuedSynchronizer } from '../../../java/util/concurrent/locks/AbstractQueuedSynchronizer.d.ts'
export abstract class Semaphore$Sync extends AbstractQueuedSynchronizer {
    constructor(arg0: number)
    drainPermits(): number;
    getPermits(): number;
    nonfairTryAcquireShared(arg0: number): number;
    reducePermits(arg0: number): void;
    tryReleaseShared(arg0: number): boolean;
}