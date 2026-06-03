import type { InputStream } from '../../java/io/InputStream.d.ts'
export class ObjectInputStream$PeekInputStream extends InputStream {
    static nullInputStream(): InputStream;
    constructor(arg0: InputStream)
    // private in: InputStream;
    // private peekb: number;
    // private totalBytesRead: number;
    available(): number;
    close(): void;
    getBytesRead(): number;
    peek(): number;
    read(): number;
    read(arg0: number[]): number;
    read(arg0: number[], arg1: number, arg2: number): number;
    readFully(arg0: number[], arg1: number, arg2: number): void;
    skip(arg0: number): number;
}