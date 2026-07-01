import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { Reader } from '../../../../../java/io/Reader.d.ts'
import type { ByteBuffer } from '../../../../../java/nio/ByteBuffer.d.ts'
import type { CharBuffer } from '../../../../../java/nio/CharBuffer.d.ts'
import type { Charset } from '../../../../../java/nio/charset/Charset.d.ts'
import type { CharsetEncoder } from '../../../../../java/nio/charset/CharsetEncoder.d.ts'
import type { CoderResult } from '../../../../../java/nio/charset/CoderResult.d.ts'
import type { AbstractInputStream } from '../../../../../org/apache/commons/io/input/AbstractInputStream.d.ts'
import type { ReaderInputStream$Builder } from '../../../../../org/apache/commons/io/input/ReaderInputStream$Builder.d.ts'
export class ReaderInputStream extends AbstractInputStream {
    static builder(): ReaderInputStream$Builder;
    static nullInputStream(): InputStream;
    constructor(arg0: Reader)
    constructor(arg0: Reader, arg1: Charset)
    constructor(arg0: Reader, arg1: Charset, arg2: number)
    constructor(arg0: Reader, arg1: CharsetEncoder)
    constructor(arg0: Reader, arg1: CharsetEncoder, arg2: number)
    constructor(arg0: Reader, arg1: string)
    constructor(arg0: Reader, arg1: string, arg2: number)
    constructor(arg0: ReaderInputStream$Builder, arg1: any)
    // private charsetEncoder: CharsetEncoder;
    // private encoderIn: CharBuffer;
    // private encoderOut: ByteBuffer;
    // private endOfInput: boolean;
    // private lastCoderResult: CoderResult;
    // private reader: Reader;
    available(): number;
    close(): void;
    // private fillBuffer(): void;
    getCharsetEncoder(): CharsetEncoder;
    read(): number;
    read(arg0: number[]): number;
    read(arg0: number[], arg1: number, arg2: number): number;
}