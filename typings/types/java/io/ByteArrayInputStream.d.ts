import type { InputStream } from '../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../java/io/OutputStream.d.ts'
export class ByteArrayInputStream extends InputStream {
    static nullInputStream(): InputStream;
    constructor(arg0: number[])
    constructor(arg0: number[], arg1: number, arg2: number)
    // private buf: number[];
    // private count: number;
    // private mark: number;
    // private pos: number;
    available(): number;
    close(): void;
    mark(arg0: number): void;
    markSupported(): boolean;
    read(): number;
    read(arg0: number[]): number;
    read(arg0: number[], arg1: number, arg2: number): number;
    readAllBytes(): number[];
    readNBytes(arg0: number[], arg1: number, arg2: number): number;
    readNBytes(arg0: number): number[];
    reset(): void;
    skip(arg0: number): number;
    transferTo(arg0: OutputStream): number;
}