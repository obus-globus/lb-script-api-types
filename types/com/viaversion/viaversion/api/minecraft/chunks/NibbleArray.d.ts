import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class NibbleArray extends Object {
    constructor(arg0: number[])
    constructor(arg0: number)
    readonly handle: number[];
    actualSize(): number;
    fill(arg0: number): void;
    get(arg0: number): number;
    get(arg0: number, arg1: number, arg2: number): number;
    getHandle(): number[];
    set(arg0: number, arg1: number): void;
    set(arg0: number, arg1: number, arg2: number, arg3: number): void;
    setHandle(arg0: number[]): void;
    size(): number;
}