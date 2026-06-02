import type { AbstractArrayBuffer } from '../../../../../../com/oracle/truffle/regex/tregex/buffer/AbstractArrayBuffer.d.ts'
export class CharArrayBuffer extends AbstractArrayBuffer {
    constructor()
    constructor(initialSize: number)
    // private buf: string[];
    add(c: string): void;
    get(i: number): string;
    getBuffer(): string[];
    getBufferLength(): number;
    grow(newSize: number): void;
    set(i: number, c: string): void;
    toArray(): string[];
}