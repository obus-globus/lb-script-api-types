import type { FileChannel } from '../java/nio/channels/FileChannel.d.ts'
import type { FileHandle } from '../okio/FileHandle.d.ts'
export class NioFileSystemFileHandle extends FileHandle {
    constructor(readWrite: boolean, fileChannel: FileChannel)
    // private fileChannel: FileChannel;
    protected protectedClose(): void;
    protected protectedFlush(): void;
    protected protectedRead(fileOffset: number, array: number[], arrayOffset: number, byteCount: number): number;
    protected protectedResize(size: number): void;
    protected protectedSize(): number;
    protected protectedWrite(fileOffset: number, array: number[], arrayOffset: number, byteCount: number): void;
}