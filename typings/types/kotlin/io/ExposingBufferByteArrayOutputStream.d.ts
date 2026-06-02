import type { ByteArrayOutputStream } from '../../java/io/ByteArrayOutputStream.d.ts'
import type { OutputStream } from '../../java/io/OutputStream.d.ts'
export class ExposingBufferByteArrayOutputStream extends ByteArrayOutputStream {
    static nullOutputStream(): OutputStream;
    constructor(size: number)
    readonly buffer: number[];
}