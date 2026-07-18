import type { Object } from '../../../../java/lang/Object.d.ts'
export class ResolveSource$Node<T extends unknown> extends Object {
    constructor(arg0: T)
    constructor(arg0: T, arg1: ResolveSource$Node<T>)
    // private next: ResolveSource$Node<T>;
    // private value: T;
    head(): T;
    last(): T;
    prepend(arg0: T): ResolveSource$Node<T>;
    reverse(): ResolveSource$Node<T>;
    tail(): ResolveSource$Node<T>;
    toString(): string;
}