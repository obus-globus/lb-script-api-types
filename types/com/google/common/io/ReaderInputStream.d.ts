import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { Reader } from '../../../../java/io/Reader.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { CharBuffer } from '../../../../java/nio/CharBuffer.d.ts'
import type { Charset } from '../../../../java/nio/charset/Charset.d.ts'
import type { CharsetEncoder } from '../../../../java/nio/charset/CharsetEncoder.d.ts'
export class ReaderInputStream extends InputStream {
    static nullInputStream(): InputStream;
    constructor(reader: Reader, charset: Charset, bufferSize: number)
    constructor(reader: Reader, encoder: CharsetEncoder, bufferSize: number)
    // private byteBuffer: ByteBuffer;
    // private charBuffer: CharBuffer;
    // private doneFlushing: boolean;
    // private draining: boolean;
    // private encoder: CharsetEncoder;
    // private endOfInput: boolean;
    // private reader: Reader;
    // private singleByte: number[];
    close(): void;
    // private drain(b: number[], off: number, len: number): number;
    read(): number;
    read(b: number[], off: number, len: number): number;
    // private readMoreChars(): void;
    // private startDraining(overflow: boolean): void;
}