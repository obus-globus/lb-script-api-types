import type { AbstractArrayBuffer } from '../../../../../../com/oracle/truffle/regex/tregex/buffer/AbstractArrayBuffer.d.ts'
export class ByteArrayBuffer extends AbstractArrayBuffer {
    constructor()
    constructor(initialSize: number)
    // private buf: number[];
    add(b: number): void;
    get(i: number): number;
    getBufferLength(): number;
    grow(newSize: number): void;
    set(i: number, b: number): void;
    toArray(): number[];
}