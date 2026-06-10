import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Thread } from '../../../../java/lang/Thread.d.ts'
import type { AbstractOwnableSynchronizer } from '../../../../java/util/concurrent/locks/AbstractOwnableSynchronizer.d.ts'
import type { AbstractQueuedSynchronizer$ConditionNode } from '../../../../java/util/concurrent/locks/AbstractQueuedSynchronizer$ConditionNode.d.ts'
import type { AbstractQueuedSynchronizer$ConditionObject } from '../../../../java/util/concurrent/locks/AbstractQueuedSynchronizer$ConditionObject.d.ts'
import type { AbstractQueuedSynchronizer$Node } from '../../../../java/util/concurrent/locks/AbstractQueuedSynchronizer$Node.d.ts'
export abstract class AbstractQueuedSynchronizer extends AbstractOwnableSynchronizer implements Serializable {
    constructor()
    // private head: AbstractQueuedSynchronizer$Node;
    // private state: number;
    // private tail: AbstractQueuedSynchronizer$Node;
    acquire(arg0: AbstractQueuedSynchronizer$Node, arg1: number, arg2: boolean, arg3: boolean, arg4: boolean, arg5: number): number;
    acquire(arg0: number): void;
    acquireInterruptibly(arg0: number): void;
    // private acquireOnOOME(arg0: boolean, arg1: number): number;
    acquireShared(arg0: number): void;
    acquireSharedInterruptibly(arg0: number): void;
    apparentlyFirstQueuedIsExclusive(): boolean;
    // private cancelAcquire(arg0: AbstractQueuedSynchronizer$Node, arg1: boolean, arg2: boolean): number;
    // private casTail(arg0: AbstractQueuedSynchronizer$Node, arg1: AbstractQueuedSynchronizer$Node): boolean;
    // private cleanQueue(): void;
    compareAndSetState(arg0: number, arg1: number): boolean;
    enqueue(arg0: AbstractQueuedSynchronizer$ConditionNode): void;
    getExclusiveQueuedThreads(): Thread[];
    getFirstQueuedThread(): Thread;
    getQueueLength(): number;
    getQueuedThreads(): Thread[];
    getSharedQueuedThreads(): Thread[];
    getState(): number;
    getWaitQueueLength(arg0: AbstractQueuedSynchronizer$ConditionObject): number;
    getWaitingThreads(arg0: AbstractQueuedSynchronizer$ConditionObject): Thread[];
    hasContended(): boolean;
    hasQueuedPredecessors(): boolean;
    hasQueuedThreads(): boolean;
    hasWaiters(arg0: AbstractQueuedSynchronizer$ConditionObject): boolean;
    isEnqueued(arg0: AbstractQueuedSynchronizer$Node): boolean;
    isHeldExclusively(): boolean;
    isQueued(arg0: Thread): boolean;
    owns(arg0: AbstractQueuedSynchronizer$ConditionObject): boolean;
    // private reacquire(arg0: AbstractQueuedSynchronizer$Node, arg1: number): void;
    release(arg0: number): boolean;
    releaseShared(arg0: number): boolean;
    setState(arg0: number): void;
    toString(): string;
    tryAcquire(arg0: number): boolean;
    tryAcquireNanos(arg0: number, arg1: number): boolean;
    tryAcquireShared(arg0: number): number;
    tryAcquireSharedNanos(arg0: number, arg1: number): boolean;
    // private tryInitializeHead(): AbstractQueuedSynchronizer$Node;
    tryRelease(arg0: number): boolean;
    tryReleaseShared(arg0: number): boolean;
}