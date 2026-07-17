import type { OutputStream } from '../../../../../../java/io/OutputStream.d.ts'
import type { ByteBuffer } from '../../../../../../java/nio/ByteBuffer.d.ts'
import type { SevenZOutputFile } from '../../../../../../org/apache/commons/compress/archivers/sevenz/SevenZOutputFile.d.ts'
export class SevenZOutputFile$OutputStreamWrapper extends OutputStream {
    static nullOutputStream(): OutputStream;
    private constructor(null_: SevenZOutputFile)
    // private buffer: ByteBuffer;
    close(): void;
    flush(): void;
    write(arg0: number[]): void;
    write(arg0: number[], arg1: number, arg2: number): void;
    write(arg0: number): void;
}