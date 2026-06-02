import type { Thread } from '../../../../java/lang/Thread.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class StampedLock$Node extends Object {
    constructor()
    // private next: StampedLock$Node;
    // private prev: StampedLock$Node;
    // private status: number;
    // private waiter: Thread;
    casNext(arg0: StampedLock$Node, arg1: StampedLock$Node): boolean;
    casPrev(arg0: StampedLock$Node, arg1: StampedLock$Node): boolean;
    clearStatus(): void;
    getAndUnsetStatus(arg0: number): number;
    setPrevRelaxed(arg0: StampedLock$Node): void;
    setStatusRelaxed(arg0: number): void;
}