import type { Thread } from '../../../../java/lang/Thread.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class AbstractQueuedSynchronizer$Node extends Object {
    constructor()
    // private next: AbstractQueuedSynchronizer$Node;
    // private prev: AbstractQueuedSynchronizer$Node;
    // private status: number;
    // private waiter: Thread;
    casNext(arg0: AbstractQueuedSynchronizer$Node, arg1: AbstractQueuedSynchronizer$Node): boolean;
    casPrev(arg0: AbstractQueuedSynchronizer$Node, arg1: AbstractQueuedSynchronizer$Node): boolean;
    clearStatus(): void;
    getAndUnsetStatus(arg0: number): number;
    setPrevRelaxed(arg0: AbstractQueuedSynchronizer$Node): void;
    setStatusRelaxed(arg0: number): void;
}