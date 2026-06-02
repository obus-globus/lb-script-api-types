import type { AtomicReferenceArray } from '../../../../../../../java/util/concurrent/atomic/AtomicReferenceArray.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class BufferRecycler extends Object {
    static BYTE_BASE64_CODEC_BUFFER: number;
    static BYTE_READ_IO_BUFFER: number;
    static BYTE_WRITE_CONCAT_BUFFER: number;
    static BYTE_WRITE_ENCODING_BUFFER: number;
    static CHAR_CONCAT_BUFFER: number;
    static CHAR_NAME_COPY_BUFFER: number;
    static CHAR_TEXT_BUFFER: number;
    static CHAR_TOKEN_BUFFER: number;
    constructor()
    constructor(arg0: number, arg1: number)
    // private _byteBuffers: AtomicReferenceArray<number[]>;
    // private _charBuffers: AtomicReferenceArray<string[]>;
    allocByteBuffer(arg0: number): number[];
    allocByteBuffer(arg0: number, arg1: number): number[];
    allocCharBuffer(arg0: number): string[];
    allocCharBuffer(arg0: number, arg1: number): string[];
    balloc(arg0: number): number[];
    byteBufferLength(arg0: number): number;
    calloc(arg0: number): string[];
    charBufferLength(arg0: number): number;
    releaseByteBuffer(arg0: number, arg1: number[]): void;
    releaseCharBuffer(arg0: number, arg1: string[]): void;
}