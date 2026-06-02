import type { Object } from '../../../../java/lang/Object.d.ts'
export class BitQueue extends Object {
    constructor()
    constructor(arg0: number)
    // private head: number;
    // private queue: number[];
    // private tail: number;
    add(arg0: boolean): void;
    get(arg0: number): boolean;
    isEmpty(): boolean;
    peek(): boolean;
    poll(): boolean;
    // private resize(arg0: number): void;
    set(arg0: number, arg1: boolean): void;
    size(): number;
}