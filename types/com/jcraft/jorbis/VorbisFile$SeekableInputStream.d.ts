import type { InputStream } from '../../../java/io/InputStream.d.ts'
import type { RandomAccessFile } from '../../../java/io/RandomAccessFile.d.ts'
export class VorbisFile$SeekableInputStream extends InputStream {
    static nullInputStream(): InputStream;
    constructor(null_: VorbisFile$SeekableInputStream, arg1: string)
    // private mode: string;
    // private raf: RandomAccessFile;
    available(): number;
    close(): void;
    getLength(): number;
    mark(arg0: number): void;
    markSupported(): boolean;
    read(): number;
    read(arg0: number[]): number;
    read(arg0: number[], arg1: number, arg2: number): number;
    reset(): void;
    seek(arg0: number): void;
    skip(arg0: number): number;
    tell(): number;
}