import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export abstract class Tree extends Object {
    static NOT_PRESENT: number;
    static OUT_OF_BOUNDS: number;
    static PRESENT: number;
    static isOutOfBounds(paramarg0: number, paramarg1: number, paramarg2: number): boolean;
    constructor(arg0: number, arg1: number, arg2: number)
    // private offsetX: number;
    // private offsetY: number;
    // private offsetZ: number;
    // private tree: number[];
    add(arg0: number, arg1: number, arg2: number): boolean;
    getPresence(arg0: number, arg1: number, arg2: number): number;
}