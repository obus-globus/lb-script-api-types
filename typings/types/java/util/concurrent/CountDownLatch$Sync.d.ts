import type { AbstractQueuedSynchronizer } from '../../../java/util/concurrent/locks/AbstractQueuedSynchronizer.d.ts'
export class CountDownLatch$Sync extends AbstractQueuedSynchronizer {
    constructor(arg0: number)
    getCount(): number;
    tryAcquireShared(arg0: number): number;
    tryReleaseShared(arg0: number): boolean;
}