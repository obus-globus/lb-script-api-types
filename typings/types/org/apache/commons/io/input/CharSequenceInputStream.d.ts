import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { ByteBuffer } from '../../../../../java/nio/ByteBuffer.d.ts'
import type { CharBuffer } from '../../../../../java/nio/CharBuffer.d.ts'
import type { Charset } from '../../../../../java/nio/charset/Charset.d.ts'
import type { CharsetEncoder } from '../../../../../java/nio/charset/CharsetEncoder.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
import type { CharSequenceInputStream$Builder } from '../../../../../org/apache/commons/io/input/CharSequenceInputStream$Builder.d.ts'
export class CharSequenceInputStream extends InputStream {
    static builder(): CharSequenceInputStream$Builder;
    static nullInputStream(): InputStream;
    constructor(arg0: CharSequence, arg1: Charset)
    constructor(arg0: CharSequence, arg1: Charset, arg2: number)
    constructor(arg0: CharSequence, arg1: string)
    constructor(arg0: CharSequence, arg1: string, arg2: number)
    constructor(arg0: CharSequenceInputStream$Builder, arg1: any)
    // private bBuf: ByteBuffer;
    // private bBufMark: number;
    // private cBuf: CharBuffer;
    // private cBufMark: number;
    // private charsetEncoder: CharsetEncoder;
    available(): number;
    close(): void;
    // private fillBuffer(): void;
    getCharsetEncoder(): CharsetEncoder;
    mark(arg0: number): void;
    markSupported(): boolean;
    read(): number;
    read(arg0: number[]): number;
    read(arg0: number[], arg1: number, arg2: number): number;
    reset(): void;
    skip(arg0: number): number;
}