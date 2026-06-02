import type { Object } from '../../../../java/lang/Object.d.ts'
export interface Stack<K extends Object | number | string | boolean> extends Object{
    isEmpty(): boolean;
    peek(arg0: number): K;
    pop(): K;
    push(arg0: K): void;
    top(): K;
}