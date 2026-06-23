import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ArrayStack<T extends unknown> extends Object {
    constructor(arg0: number)
    // private stack: T[];
    clear(): void;
    isEmpty(): boolean;
    pop(): T;
    push(arg0: T): void;
}