import type { TimeUnit } from '../../../../../java/util/concurrent/TimeUnit.d.ts'
import type { AbstractQueuedSynchronizer } from '../../../../../java/util/concurrent/locks/AbstractQueuedSynchronizer.d.ts'
export class ThreadLocalHandshake$Barrier extends AbstractQueuedSynchronizer {
    constructor(initialParties: number)
    arrive(): void;
    await(): void;
    await(timeout: number, unit: TimeUnit): boolean;
    getCount(): number;
    isTerminated(): boolean;
    register(): boolean;
    releaseAll(): void;
    tryAcquireShared(acquires: number): number;
    tryReleaseShared(releases: number): boolean;
}