import type { ByteArrayOutputStream } from '../../../../java/io/ByteArrayOutputStream.d.ts'
import type { OutputStream } from '../../../../java/io/OutputStream.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
export class AbstractNonStreamingHashFunction$ExposedByteArrayOutputStream extends ByteArrayOutputStream {
    static nullOutputStream(): OutputStream;
    constructor(expectedInputSize: number)
    byteArray(): number[];
    length(): number;
    write(input: ByteBuffer): void;
}