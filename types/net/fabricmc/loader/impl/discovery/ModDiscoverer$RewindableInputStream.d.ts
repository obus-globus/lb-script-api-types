import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { ByteBuffer } from '../../../../../java/nio/ByteBuffer.d.ts'
export class ModDiscoverer$RewindableInputStream extends InputStream {
    static nullInputStream(): InputStream;
    constructor(arg0: InputStream)
    readonly buffer: ByteBuffer;
    // private pos: number;
    getBuffer(): ByteBuffer;
    read(): number;
    read(arg0: number[], arg1: number, arg2: number): number;
    rewind(): void;
}