import type { StampedLock$Node } from '../../../../java/util/concurrent/locks/StampedLock$Node.d.ts'
export class StampedLock$ReaderNode extends StampedLock$Node {
    constructor()
    // private cowaiters: StampedLock$ReaderNode;
    casCowaiters(arg0: StampedLock$ReaderNode, arg1: StampedLock$ReaderNode): boolean;
    setCowaitersRelaxed(arg0: StampedLock$ReaderNode): void;
}