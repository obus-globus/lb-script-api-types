import type { FilterInputStream } from '../../../../../../java/io/FilterInputStream.d.ts'
import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { CircularByteBuffer } from '../../../../../../org/apache/commons/io/input/buffer/CircularByteBuffer.d.ts'
export class CircularBufferInputStream extends FilterInputStream {
    static nullInputStream(): InputStream;
    constructor(arg0: InputStream)
    constructor(arg0: InputStream, arg1: number)
    // private buffer: CircularByteBuffer;
    // private bufferSize: number;
    // private eof: boolean;
    close(): void;
    fillBuffer(): void;
    haveBytes(arg0: number): boolean;
    read(): number;
    read(arg0: number[]): number;
    read(arg0: number[], arg1: number, arg2: number): number;
}