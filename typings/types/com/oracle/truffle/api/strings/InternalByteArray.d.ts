import type { Object } from '../../../../../java/lang/Object.d.ts'
export class InternalByteArray extends Object {
    constructor(array: number[], offset: number, length: number)
    readonly array: number[];
    readonly length: number;
    readonly offset: number;
    get(index: number): number;
    getArray(): number[];
    getEnd(): number;
    getLength(): number;
    getOffset(): number;
}