import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../../../java/io/OutputStream.d.ts'
export class BoundedInputStream extends InputStream {
    static nullInputStream(): InputStream;
    constructor(arg0: number, arg1: InputStream)
    // private in: InputStream;
    // private max: number;
    readonly pos: number;
    available(): number;
    getPos(): number;
    hasHitBound(): boolean;
    mark(arg0: number): void;
    markSupported(): boolean;
    read(): number;
    read(arg0: number[]): number;
    read(arg0: number[], arg1: number, arg2: number): number;
    readNBytes(arg0: number[], arg1: number, arg2: number): number;
    readNBytes(arg0: number): number[];
    reset(): void;
    skip(arg0: number): number;
    transferTo(arg0: OutputStream): number;
}