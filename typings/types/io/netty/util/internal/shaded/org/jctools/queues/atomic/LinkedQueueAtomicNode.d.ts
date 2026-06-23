import type { AtomicReference } from '../../../../../../../../../java/util/concurrent/atomic/AtomicReference.d.ts'
import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
export class LinkedQueueAtomicNode<E extends unknown> extends AtomicReference<LinkedQueueAtomicNode<E>> {
    constructor()
    constructor(arg0: E)
    // private value: E;
    getAndNullValue(): E;
    lpValue(): E;
    lvNext(): LinkedQueueAtomicNode<E>;
    soNext(arg0: LinkedQueueAtomicNode<E>): void;
    spNext(arg0: LinkedQueueAtomicNode<E>): void;
    spValue(arg0: E): void;
}