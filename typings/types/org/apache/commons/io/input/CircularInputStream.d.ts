import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { AbstractInputStream } from '../../../../../org/apache/commons/io/input/AbstractInputStream.d.ts'
export class CircularInputStream extends AbstractInputStream {
    static nullInputStream(): InputStream;
    constructor(arg0: number[], arg1: number)
    // private byteCount: number;
    // private position: number;
    // private repeatedContent: number[];
    // private targetByteCount: number;
    available(): number;
    close(): void;
    read(): number;
    read(arg0: number[]): number;
    read(arg0: number[], arg1: number, arg2: number): number;
}