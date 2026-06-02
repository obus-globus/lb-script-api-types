import type { RandomAccessFile } from '../java/io/RandomAccessFile.d.ts'
import type { FileHandle } from '../okio/FileHandle.d.ts'
export class JvmFileHandle extends FileHandle {
    constructor(readWrite: boolean, randomAccessFile: RandomAccessFile)
    // private randomAccessFile: RandomAccessFile;
    protected protectedClose(): void;
    protected protectedFlush(): void;
    protected protectedRead(fileOffset: number, array: number[], arrayOffset: number, byteCount: number): number;
    protected protectedResize(size: number): void;
    protected protectedSize(): number;
    protected protectedWrite(fileOffset: number, array: number[], arrayOffset: number, byteCount: number): void;
}