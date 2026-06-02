import type { ForkJoinPool$ManagedBlocker } from '../../../../java/util/concurrent/ForkJoinPool$ManagedBlocker.d.ts'
import type { AbstractQueuedSynchronizer$Node } from '../../../../java/util/concurrent/locks/AbstractQueuedSynchronizer$Node.d.ts'
export class AbstractQueuedSynchronizer$ConditionNode extends AbstractQueuedSynchronizer$Node implements ForkJoinPool$ManagedBlocker {
    constructor()
    // private nextWaiter: AbstractQueuedSynchronizer$ConditionNode;
    block(): boolean;
    isReleasable(): boolean;
}