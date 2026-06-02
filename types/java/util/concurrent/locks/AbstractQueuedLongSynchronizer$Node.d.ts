import type { Thread } from '../../../../java/lang/Thread.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class AbstractQueuedLongSynchronizer$Node extends Object {
    constructor()
    // private next: AbstractQueuedLongSynchronizer$Node;
    // private prev: AbstractQueuedLongSynchronizer$Node;
    // private status: number;
    // private waiter: Thread;
    casNext(arg0: AbstractQueuedLongSynchronizer$Node, arg1: AbstractQueuedLongSynchronizer$Node): boolean;
    casPrev(arg0: AbstractQueuedLongSynchronizer$Node, arg1: AbstractQueuedLongSynchronizer$Node): boolean;
    clearStatus(): void;
    getAndUnsetStatus(arg0: number): number;
    setPrevRelaxed(arg0: AbstractQueuedLongSynchronizer$Node): void;
    setStatusRelaxed(arg0: number): void;
}