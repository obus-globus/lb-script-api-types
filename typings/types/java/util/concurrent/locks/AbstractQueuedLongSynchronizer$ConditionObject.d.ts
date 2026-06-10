import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Thread } from '../../../../java/lang/Thread.d.ts'
import type { Date } from '../../../../java/util/Date.d.ts'
import type { TimeUnit } from '../../../../java/util/concurrent/TimeUnit.d.ts'
import type { AbstractQueuedLongSynchronizer } from '../../../../java/util/concurrent/locks/AbstractQueuedLongSynchronizer.d.ts'
import type { AbstractQueuedLongSynchronizer$ConditionNode } from '../../../../java/util/concurrent/locks/AbstractQueuedLongSynchronizer$ConditionNode.d.ts'
import type { Condition } from '../../../../java/util/concurrent/locks/Condition.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class AbstractQueuedLongSynchronizer$ConditionObject extends Object implements Serializable, Condition {
    constructor(null_: AbstractQueuedLongSynchronizer$ConditionObject)
    // private firstWaiter: AbstractQueuedLongSynchronizer$ConditionNode;
    // private lastWaiter: AbstractQueuedLongSynchronizer$ConditionNode;
    await(): void;
    await(arg0: number, arg1: TimeUnit): boolean;
    awaitNanos(arg0: number): number;
    awaitUninterruptibly(): void;
    awaitUntil(arg0: Date): boolean;
    // private canReacquire(arg0: AbstractQueuedLongSynchronizer$ConditionNode): boolean;
    // private doSignal(arg0: AbstractQueuedLongSynchronizer$ConditionNode, arg1: boolean): void;
    // private enableWait(arg0: AbstractQueuedLongSynchronizer$ConditionNode): number;
    getWaitQueueLength(): number;
    getWaitingThreads(): Thread[];
    hasWaiters(): boolean;
    isOwnedBy(arg0: AbstractQueuedLongSynchronizer): boolean;
    // private newConditionNode(): AbstractQueuedLongSynchronizer$ConditionNode;
    signal(): void;
    signalAll(): void;
    // private unlinkCancelledWaiters(arg0: AbstractQueuedLongSynchronizer$ConditionNode): void;
}