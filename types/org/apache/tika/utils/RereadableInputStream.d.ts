import type { File } from '../../../../java/io/File.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../../../java/io/OutputStream.d.ts'
export class RereadableInputStream extends InputStream {
    static nullInputStream(): InputStream;
    constructor(arg0: InputStream)
    constructor(arg0: InputStream, arg1: boolean)
    constructor(arg0: InputStream, arg1: number)
    constructor(arg0: InputStream, arg1: number, arg2: boolean)
    // private bufferHighWaterMark: number;
    // private bufferPointer: number;
    // private byteBuffer: number[];
    // private closeOriginalStreamOnClose: boolean;
    // private closed: boolean;
    // private inputStream: InputStream;
    // private maxBytesInMemory: number;
    // private originalInputStream: InputStream;
    // private readingFromBuffer: boolean;
    // private storeFile: File;
    // private storeOutputStream: OutputStream;
    close(): void;
    // private closeStream(): void;
    read(): number;
    rewind(): void;
    // private saveByte(arg0: number): void;
}