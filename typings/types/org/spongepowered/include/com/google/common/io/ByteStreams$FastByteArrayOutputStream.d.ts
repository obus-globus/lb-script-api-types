import type { ByteStreams$1 } from '../../../../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { ByteArrayOutputStream } from '../../../../../../../java/io/ByteArrayOutputStream.d.ts'
import type { OutputStream } from '../../../../../../../java/io/OutputStream.d.ts'
export class ByteStreams$FastByteArrayOutputStream extends ByteArrayOutputStream {
    static nullOutputStream(): OutputStream;
    private constructor()
    constructor(arg0: ByteStreams$1)
    writeTo(arg0: OutputStream): void;
    writeTo(arg0: number[], arg1: number): void;
}