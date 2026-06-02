import type { Object } from '../../../../java/lang/Object.d.ts'
export class ByteArrayInput extends Object {
    constructor(array: number[])
    // private array: number[];
    readonly availableBytes: number;
    // private position: number;
    read(): number;
    read(b: number[], offset: number, length: number): number;
    skip(length: number): void;
}