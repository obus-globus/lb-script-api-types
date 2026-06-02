import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ArrayStack<T extends Object | number | string | boolean> extends Object {
    constructor(arg0: number)
    // private stack: T[];
    clear(): void;
    isEmpty(): boolean;
    pop(): T;
    push(arg0: T): void;
}