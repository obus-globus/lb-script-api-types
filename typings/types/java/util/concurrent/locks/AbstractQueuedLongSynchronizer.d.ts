import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Thread } from '../../../../java/lang/Thread.d.ts'
import type { AbstractOwnableSynchronizer } from '../../../../java/util/concurrent/locks/AbstractOwnableSynchronizer.d.ts'
import type { AbstractQueuedLongSynchronizer$ConditionNode } from '../../../../java/util/concurrent/locks/AbstractQueuedLongSynchronizer$ConditionNode.d.ts'
import type { AbstractQueuedLongSynchronizer$ConditionObject } from '../../../../java/util/concurrent/locks/AbstractQueuedLongSynchronizer$ConditionObject.d.ts'
import type { AbstractQueuedLongSynchronizer$Node } from '../../../../java/util/concurrent/locks/AbstractQueuedLongSynchronizer$Node.d.ts'
export abstract class AbstractQueuedLongSynchronizer extends AbstractOwnableSynchronizer implements Serializable {
    constructor()
    // private head: AbstractQueuedLongSynchronizer$Node;
    // private state: number;
    // private tail: AbstractQueuedLongSynchronizer$Node;
    acquire(arg0: AbstractQueuedLongSynchronizer$Node, arg1: number, arg2: boolean, arg3: boolean, arg4: boolean, arg5: number): number;
    acquire(arg0: number): void;
    acquireInterruptibly(arg0: number): void;
    // private acquireOnOOME(arg0: boolean, arg1: number): number;
    acquireShared(arg0: number): void;
    acquireSharedInterruptibly(arg0: number): void;
    apparentlyFirstQueuedIsExclusive(): boolean;
    // private cancelAcquire(arg0: AbstractQueuedLongSynchronizer$Node, arg1: boolean, arg2: boolean): number;
    // private casTail(arg0: AbstractQueuedLongSynchronizer$Node, arg1: AbstractQueuedLongSynchronizer$Node): boolean;
    // private cleanQueue(): void;
    compareAndSetState(arg0: number, arg1: number): boolean;
    enqueue(arg0: AbstractQueuedLongSynchronizer$ConditionNode): void;
    getExclusiveQueuedThreads(): Thread[];
    getFirstQueuedThread(): Thread;
    getQueueLength(): number;
    getQueuedThreads(): Thread[];
    getSharedQueuedThreads(): Thread[];
    getState(): number;
    getWaitQueueLength(arg0: AbstractQueuedLongSynchronizer$ConditionObject): number;
    getWaitingThreads(arg0: AbstractQueuedLongSynchronizer$ConditionObject): Thread[];
    hasContended(): boolean;
    hasQueuedPredecessors(): boolean;
    hasQueuedThreads(): boolean;
    hasWaiters(arg0: AbstractQueuedLongSynchronizer$ConditionObject): boolean;
    isEnqueued(arg0: AbstractQueuedLongSynchronizer$Node): boolean;
    isHeldExclusively(): boolean;
    isQueued(arg0: Thread): boolean;
    owns(arg0: AbstractQueuedLongSynchronizer$ConditionObject): boolean;
    // private reacquire(arg0: AbstractQueuedLongSynchronizer$Node, arg1: number): void;
    release(arg0: number): boolean;
    releaseShared(arg0: number): boolean;
    setState(arg0: number): void;
    toString(): string;
    tryAcquire(arg0: number): boolean;
    tryAcquireNanos(arg0: number, arg1: number): boolean;
    tryAcquireShared(arg0: number): number;
    tryAcquireSharedNanos(arg0: number, arg1: number): boolean;
    // private tryInitializeHead(): AbstractQueuedLongSynchronizer$Node;
    tryRelease(arg0: number): boolean;
    tryReleaseShared(arg0: number): boolean;
}