import type { OutputStream } from '../../../java/io/OutputStream.d.ts'
import type { Writer } from '../../../java/io/Writer.d.ts'
import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { CharBuffer } from '../../../java/nio/CharBuffer.d.ts'
import type { Charset } from '../../../java/nio/charset/Charset.d.ts'
import type { CharsetEncoder } from '../../../java/nio/charset/CharsetEncoder.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class StreamEncoder extends Writer {
    static forOutputStreamWriter(paramarg0: OutputStream, paramarg1: Object, paramarg2: string): StreamEncoder;
    static forOutputStreamWriter(paramarg0: OutputStream, paramarg1: Object, paramarg2: Charset): StreamEncoder;
    static forOutputStreamWriter(paramarg0: OutputStream, paramarg1: Object, paramarg2: CharsetEncoder): StreamEncoder;
    static forOutputStreamWriter(paramarg0: OutputStream, paramarg1: CharsetEncoder): StreamEncoder;
    static nullWriter(): Writer;
    private constructor(arg0: OutputStream, arg1: CharsetEncoder)
    private constructor(arg0: OutputStream, arg1: Object, arg2: Charset)
    private constructor(arg0: OutputStream, arg1: Object, arg2: CharsetEncoder)
    // private bb: ByteBuffer;
    // private closed: boolean;
    // private cs: Charset;
    // private encoder: CharsetEncoder;
    // private haveLeftoverChar: boolean;
    // private lcb: CharBuffer;
    // private leftoverChar: string;
    // private maxBufferCapacity: number;
    // private out: OutputStream;
    close(): void;
    encodingName(): string;
    // private ensureOpen(): void;
    flush(): void;
    flushBuffer(): void;
    // private flushLeftoverChar(arg0: CharBuffer, arg1: boolean): void;
    getEncoding(): string;
    growByteBufferIfNeeded(arg0: number): void;
    implClose(): void;
    implFlush(): void;
    implFlushBuffer(): void;
    implWrite(arg0: CharBuffer): void;
    implWrite(arg0: string[], arg1: number, arg2: number): void;
    // private isOpen(): boolean;
    write(arg0: CharBuffer): void;
    write(arg0: string[], arg1: number, arg2: number): void;
    write(arg0: number): void;
    write(arg0: string, arg1: number, arg2: number): void;
    // private writeBytes(): void;
}