import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { ByteBuffer } from '../../../../../java/nio/ByteBuffer.d.ts'
import type { FileChannel } from '../../../../../java/nio/channels/FileChannel.d.ts'
import type { AbstractInputStream } from '../../../../../org/apache/commons/io/input/AbstractInputStream.d.ts'
import type { MemoryMappedFileInputStream$Builder } from '../../../../../org/apache/commons/io/input/MemoryMappedFileInputStream$Builder.d.ts'
export class MemoryMappedFileInputStream extends AbstractInputStream {
    static builder(): MemoryMappedFileInputStream$Builder;
    static nullInputStream(): InputStream;
    private constructor(arg0: MemoryMappedFileInputStream$Builder)
    // private buffer: ByteBuffer;
    // private bufferSize: number;
    // private channel: FileChannel;
    // private nextBufferPosition: number;
    available(): number;
    // private cleanBuffer(): void;
    close(): void;
    getBufferSize(): number;
    // private nextBuffer(): void;
    read(): number;
    read(arg0: number[]): number;
    read(arg0: number[], arg1: number, arg2: number): number;
    skip(arg0: number): number;
}