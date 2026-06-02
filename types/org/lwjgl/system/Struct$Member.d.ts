import type { Object } from '../../../java/lang/Object.d.ts'
export class Struct$Member extends Object {
    constructor(arg0: number, arg1: number, arg2: boolean)
    readonly alignment: number;
    // private forcedAlignment: boolean;
    // private offset: number;
    readonly size: number;
    getAlignment(): number;
    getAlignment(arg0: number): number;
    getSize(): number;
}