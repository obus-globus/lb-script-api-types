import type { ForkJoinPool$ManagedBlocker } from '../../../../java/util/concurrent/ForkJoinPool$ManagedBlocker.d.ts'
import type { AbstractQueuedLongSynchronizer$Node } from '../../../../java/util/concurrent/locks/AbstractQueuedLongSynchronizer$Node.d.ts'
export class AbstractQueuedLongSynchronizer$ConditionNode extends AbstractQueuedLongSynchronizer$Node implements ForkJoinPool$ManagedBlocker {
    constructor()
    // private nextWaiter: AbstractQueuedLongSynchronizer$ConditionNode;
    block(): boolean;
    isReleasable(): boolean;
}