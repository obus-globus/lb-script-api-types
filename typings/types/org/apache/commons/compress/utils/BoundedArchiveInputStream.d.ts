import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { ByteBuffer } from '../../../../../java/nio/ByteBuffer.d.ts'
export abstract class BoundedArchiveInputStream extends InputStream {
    static nullInputStream(): InputStream;
    constructor(arg0: number, arg1: number)
    // private end: number;
    // private loc: number;
    // private singleByteBuffer: ByteBuffer;
    read(): number;
    read(arg0: number[]): number;
    read(arg0: number[], arg1: number, arg2: number): number;
    read(arg0: number, arg1: ByteBuffer): number;
}