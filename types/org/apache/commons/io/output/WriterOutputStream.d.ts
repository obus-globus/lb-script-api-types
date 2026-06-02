import type { OutputStream } from '../../../../../java/io/OutputStream.d.ts'
import type { Writer } from '../../../../../java/io/Writer.d.ts'
import type { ByteBuffer } from '../../../../../java/nio/ByteBuffer.d.ts'
import type { CharBuffer } from '../../../../../java/nio/CharBuffer.d.ts'
import type { Charset } from '../../../../../java/nio/charset/Charset.d.ts'
import type { CharsetDecoder } from '../../../../../java/nio/charset/CharsetDecoder.d.ts'
import type { WriterOutputStream$Builder } from '../../../../../org/apache/commons/io/output/WriterOutputStream$Builder.d.ts'
export class WriterOutputStream extends OutputStream {
    static builder(): WriterOutputStream$Builder;
    static nullOutputStream(): OutputStream;
    constructor(arg0: Writer)
    constructor(arg0: Writer, arg1: Charset)
    constructor(arg0: Writer, arg1: Charset, arg2: number, arg3: boolean)
    constructor(arg0: Writer, arg1: CharsetDecoder)
    constructor(arg0: Writer, arg1: CharsetDecoder, arg2: number, arg3: boolean)
    constructor(arg0: Writer, arg1: string)
    constructor(arg0: Writer, arg1: string, arg2: number, arg3: boolean)
    private constructor(arg0: WriterOutputStream$Builder)
    // private decoder: CharsetDecoder;
    // private decoderIn: ByteBuffer;
    // private decoderOut: CharBuffer;
    // private writeImmediately: boolean;
    // private writer: Writer;
    close(): void;
    flush(): void;
    // private flushOutput(): void;
    // private processInput(arg0: boolean): void;
    write(arg0: number[]): void;
    write(arg0: number[], arg1: number, arg2: number): void;
    write(arg0: number): void;
}