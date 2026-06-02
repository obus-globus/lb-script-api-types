import type { Object } from '../../../../java/lang/Object.d.ts'
export class PackedBitStorage extends Object {
    constructor(bits: number, size: number)
    constructor(bits: number, size: number, data: number[])
    readonly bits: number;
    // private data: number[];
    // private mask: number;
    // private size: number;
    get(index: number): number;
    getBits(): number;
    getRaw(): number[];
    set(index: number, value: number): void;
}