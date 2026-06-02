import type { File } from '../../../../../../java/io/File.d.ts'
import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { RandomAccessFile } from '../../../../../../java/io/RandomAccessFile.d.ts'
import type { SeekableInputStream } from '../../../../../../org/graalvm/shadowed/org/tukaani/xz/SeekableInputStream.d.ts'
export class SeekableFileInputStream extends SeekableInputStream {
    static nullInputStream(): InputStream;
    constructor(file: File)
    constructor(randomAccessFile: RandomAccessFile)
    constructor(name: string)
    // private randomAccessFile: RandomAccessFile;
    close(): void;
    length(): number;
    position(): number;
    read(): number;
    read(buf: number[]): number;
    read(buf: number[], off: number, len: number): number;
    seek(pos: number): void;
}