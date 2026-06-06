import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class TextStringReader extends Object {
    constructor(arg0: string)
    readonly index: number;
    // private s: string;
    canRead(): boolean;
    canRead(arg0: number): boolean;
    getIndex(): number;
    getLength(): number;
    getMark(): string;
    mark(): TextStringReader;
    peek(): string;
    peek(arg0: number): string;
    peekAt(arg0: number): string;
    read(): string;
    read(arg0: number): string;
    readUntil(arg0: string): string;
    reset(): TextStringReader;
    skip(): TextStringReader;
    skip(arg0: number): TextStringReader;
    // private verifyIndex(arg0: number): void;
}