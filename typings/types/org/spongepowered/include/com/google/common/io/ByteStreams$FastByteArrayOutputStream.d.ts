import type { ByteArrayOutputStream } from '../../../../../../../java/io/ByteArrayOutputStream.d.ts'
import type { OutputStream } from '../../../../../../../java/io/OutputStream.d.ts'
export class ByteStreams$FastByteArrayOutputStream extends ByteArrayOutputStream {
    static nullOutputStream(): OutputStream;
    constructor(arg0: OutputStream)
    writeTo(arg0: OutputStream): void;
    writeTo(arg0: number[], arg1: number): void;
}