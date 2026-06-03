import type { OutputStream } from '../../../../../../java/io/OutputStream.d.ts'
export class ByteString$Output extends OutputStream {
    static nullOutputStream(): OutputStream;
    constructor(arg0: number)
    // private buffer: number[];
    // private bufferPos: number;
    // private flushedBuffers: number[][];
    // private flushedBuffersTotalBytes: number;
    // private initialCapacity: number;
    // private copyArray(arg0: number[], arg1: number): number[];
    // private flushFullBuffer(arg0: number): void;
    // private flushLastBuffer(): void;
    size(): number;
    toByteString(): number[];
    toString(): string;
    write(arg0: number[]): void;
    write(arg0: number[], arg1: number, arg2: number): void;
    write(arg0: number): void;
}