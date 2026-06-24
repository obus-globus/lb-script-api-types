import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Thread } from '../../../../java/lang/Thread.d.ts'
import type { Date } from '../../../../java/util/Date.d.ts'
import type { TimeUnit } from '../../../../java/util/concurrent/TimeUnit.d.ts'
import type { AbstractQueuedSynchronizer } from '../../../../java/util/concurrent/locks/AbstractQueuedSynchronizer.d.ts'
import type { AbstractQueuedSynchronizer$ConditionNode } from '../../../../java/util/concurrent/locks/AbstractQueuedSynchronizer$ConditionNode.d.ts'
import type { Condition } from '../../../../java/util/concurrent/locks/Condition.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class AbstractQueuedSynchronizer$ConditionObject extends Object implements Serializable, Condition {
    constructor(null_: AbstractQueuedSynchronizer)
    // private firstWaiter: AbstractQueuedSynchronizer$ConditionNode;
    // private lastWaiter: AbstractQueuedSynchronizer$ConditionNode;
    await(): void;
    await(arg0: number, arg1: TimeUnit): boolean;
    awaitNanos(arg0: number): number;
    awaitUninterruptibly(): void;
    awaitUntil(arg0: Date): boolean;
    // private canReacquire(arg0: AbstractQueuedSynchronizer$ConditionNode): boolean;
    // private doSignal(arg0: AbstractQueuedSynchronizer$ConditionNode, arg1: boolean): void;
    // private enableWait(arg0: AbstractQueuedSynchronizer$ConditionNode): number;
    getWaitQueueLength(): number;
    getWaitingThreads(): Thread[];
    hasWaiters(): boolean;
    isOwnedBy(arg0: AbstractQueuedSynchronizer): boolean;
    // private newConditionNode(): AbstractQueuedSynchronizer$ConditionNode;
    signal(): void;
    signalAll(): void;
    // private unlinkCancelledWaiters(arg0: AbstractQueuedSynchronizer$ConditionNode): void;
}