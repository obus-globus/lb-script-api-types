import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export class LinkedQueueNode<E extends Object | number | string | boolean> extends Object {
    constructor()
    constructor(arg0: E)
    // private next: LinkedQueueNode<E>;
    // private value: E;
    getAndNullValue(): E;
    lpValue(): E;
    lvNext(): LinkedQueueNode<E>;
    soNext(arg0: LinkedQueueNode<E>): void;
    spNext(arg0: LinkedQueueNode<E>): void;
    spValue(arg0: E): void;
}