import type { OutputStream } from '../../../../../../java/io/OutputStream.d.ts'
import type { ByteBuffer } from '../../../../../../java/nio/ByteBuffer.d.ts'
import type { SevenZOutputFile } from '../../../../../../org/apache/commons/compress/archivers/sevenz/SevenZOutputFile.d.ts'
import type { CountingOutputStream } from '../../../../../../org/apache/commons/io/output/CountingOutputStream.d.ts'
export class SevenZOutputFile$OutputStreamWrapper extends OutputStream {
    static nullOutputStream(): OutputStream;
    constructor(null_: SevenZOutputFile, arg1: CountingOutputStream)
    // private buffer: ByteBuffer;
    close(): void;
    flush(): void;
    write(arg0: number[]): void;
    write(arg0: number[], arg1: number, arg2: number): void;
    write(arg0: number): void;
}