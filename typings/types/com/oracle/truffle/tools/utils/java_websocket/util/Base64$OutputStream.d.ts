import type { FilterOutputStream } from '../../../../../../../java/io/FilterOutputStream.d.ts'
import type { OutputStream } from '../../../../../../../java/io/OutputStream.d.ts'
export class Base64$OutputStream extends FilterOutputStream {
    static nullOutputStream(): OutputStream;
    constructor(arg0: OutputStream)
    constructor(arg0: OutputStream, arg1: number)
    // private b4: number[];
    // private breakLines: boolean;
    // private buffer: number[];
    // private bufferLength: number;
    // private decodabet: number[];
    // private encode: boolean;
    // private lineLength: number;
    // private options: number;
    // private position: number;
    // private suspendEncoding: boolean;
    close(): void;
    flushBase64(): void;
    write(arg0: number[]): void;
    write(arg0: number[], arg1: number, arg2: number): void;
    write(arg0: number): void;
}