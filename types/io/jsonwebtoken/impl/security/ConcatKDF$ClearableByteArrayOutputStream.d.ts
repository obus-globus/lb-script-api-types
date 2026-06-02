import type { ByteArrayOutputStream } from '../../../../java/io/ByteArrayOutputStream.d.ts'
import type { OutputStream } from '../../../../java/io/OutputStream.d.ts'
export class ConcatKDF$ClearableByteArrayOutputStream extends ByteArrayOutputStream {
    static nullOutputStream(): OutputStream;
    constructor(arg0: number)
    reset(): void;
}