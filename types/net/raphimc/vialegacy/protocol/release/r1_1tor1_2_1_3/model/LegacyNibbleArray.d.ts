import type { NibbleArray } from '../../../../../../../com/viaversion/viaversion/api/minecraft/chunks/NibbleArray.d.ts'
export class LegacyNibbleArray extends NibbleArray {
    constructor(arg0: number[])
    constructor(arg0: number[], arg1: number)
    constructor(arg0: number)
    constructor(arg0: number, arg1: number)
    // private depthBits: number;
    // private depthBitsPlusFour: number;
    get(arg0: number, arg1: number, arg2: number): number;
    index(arg0: number, arg1: number, arg2: number): number;
    set(arg0: number, arg1: number, arg2: number, arg3: number): void;
}