import type { OutputStream } from '../../../../../../java/io/OutputStream.d.ts'
import type { ByteBuffer } from '../../../../../../java/nio/ByteBuffer.d.ts'
export class SevenZOutputFile$OutputStreamWrapper extends OutputStream {
    static nullOutputStream(): OutputStream;
    private constructor(null_: SevenZOutputFile$OutputStreamWrapper)
    // private buffer: ByteBuffer;
    close(): void;
    flush(): void;
    write(arg0: number[]): void;
    write(arg0: number[], arg1: number, arg2: number): void;
    write(arg0: number): void;
}