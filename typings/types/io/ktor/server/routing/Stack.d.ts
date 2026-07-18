import type { Object } from '../../../../java/lang/Object.d.ts'
export class Stack<E extends unknown> extends Object {
    constructor()
    // private tower: E[];
    empty(): boolean;
    peek(): E;
    pop(): E;
    push(element: E): void;
}