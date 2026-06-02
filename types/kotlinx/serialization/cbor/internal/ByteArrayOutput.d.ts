import type { Object } from '../../../../java/lang/Object.d.ts'
export class ByteArrayOutput extends Object {
    constructor()
    // private array: number[];
    // private position: number;
    copyFrom(src: ByteArrayOutput): void;
    // private ensureCapacity(elementsToAppend: number): void;
    toByteArray(): number[];
    write(buffer: number[], offset: number, count: number): void;
    write(byteValue: number): void;
}